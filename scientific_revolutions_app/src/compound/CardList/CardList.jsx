import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./CardList.css";

const CardList = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [view, setView] = useState("table");
  const [mounted, setMounted] = useState(false);

  const fetchCards = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/get-cards");
      const data = await response.json();
      setCards(data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    } finally {
      setLoading(false);
      setTimeout(() => setMounted(true), 50);
    }
  };

  useEffect(() => { fetchCards(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this card?")) return;
    setDeletingId(id);
    try {
      const response = await fetch(`http://127.0.0.1:5000/delete-card/${id}`, { method: "DELETE" });
      const result = await response.json();
      if (response.ok) {
        setCards((prev) => prev.filter((card) => card.id !== id));
      } else {
        alert(result.error || "Delete failed ❌");
      }
    } catch (error) {
      alert("Something went wrong ❌");
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <div className="cl-loading">
        <div className="cl-loader-ring">
          <div></div><div></div><div></div><div></div>
        </div>
        <p className="cl-loading-text">Fetching your cards...</p>
      </div>
    );
  }

  if (cards.length === 0) {
    return (
      <div className="cl-empty">
        <div className="cl-empty-icon">📭</div>
        <h2>No cards yet</h2>
        <p>Add your first card to get started</p>
        <button className="cl-add-btn" onClick={() => navigate('/addnewcard')}>+ Add Card</button>
      </div>
    );
  }

  return (
    <div className={`cl-wrapper ${mounted ? "cl-mounted" : ""}`}>

      {/* ── Top Bar ── */}
      <div className="cl-topbar">
        <div className="cl-topbar-left">
          <h1 className="cl-heading">
            <span className="cl-heading-accent">All</span> Cards
          </h1>
          <p className="cl-subheading">
            <span className="cl-count">{cards.length}</span> record{cards.length !== 1 ? "s" : ""} in database
          </p>
        </div>

        <div className="cl-controls">
          <div className="cl-view-toggle">
            <button
              className={`cl-toggle-btn ${view === "table" ? "active" : ""}`}
              onClick={() => setView("table")}
            >
              <span>⊞</span> Table
            </button>
            <button
              className={`cl-toggle-btn ${view === "card" ? "active" : ""}`}
              onClick={() => setView("card")}
            >
              <span>⊟</span> Cards
            </button>
          </div>
          <button className="cl-add-btn" onClick={() => navigate('/addnewcard')}>+ Add New</button>
        </div>
      </div>

      {/* ── TABLE VIEW ── */}
      {view === "table" && (
        <div className="cl-table-wrap">
          <table className="cl-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Description</th>
                <th>Image</th>
                <th>Year</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cards.map((card, i) => (
                <tr key={card.id} className="cl-table-row" style={{ animationDelay: `${i * 0.06}s` }}>
                  <td><span className="cl-id-badge">{card.id}</span></td>
                  <td className="cl-td-title">{card.title}</td>
                  <td><span className="cl-badge">{card.category}</span></td>
                  <td className="cl-td-desc">{card.description}</td>
                  <td>
                    {card.image_url
                      ? <img src={card.image_url} alt="" className="cl-thumb" onError={(e) => (e.target.style.display = "none")} />
                      : <span className="cl-null">NULL</span>}
                  </td>
                  <td className="cl-td-year">{card.year || <span className="cl-null">NULL</span>}</td>
                  <td>
                    <div className="cl-table-actions">
                      <button className="cl-icon-btn cl-icon-edit" onClick={() => navigate(`/edit/${card.id}`)}>✏️</button>
                      <button className="cl-icon-btn cl-icon-delete" onClick={() => handleDelete(card.id)} disabled={deletingId === card.id}>
                        {deletingId === card.id ? "⏳" : "🗑️"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ── CARD VIEW ── */}
      {view === "card" && (
        <div className="cl-grid">
          {cards.map((card, i) => (
            <div className="cl-card" key={card.id} style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="cl-card-image-wrap">
                {card.image_url
                  ? <img src={card.image_url} alt={card.title} className="cl-card-image" onError={(e) => (e.target.style.display = "none")} />
                  : <div className="cl-card-no-img">🖼️</div>}
                <div className="cl-card-overlay">
                  <button className="cl-overlay-btn" onClick={() => navigate(`/edit/${card.id}`)}>✏️ Edit</button>
                  <button className="cl-overlay-btn cl-overlay-delete" onClick={() => handleDelete(card.id)} disabled={deletingId === card.id}>
                    {deletingId === card.id ? "⏳" : "🗑️ Delete"}
                  </button>
                </div>
              </div>
              <div className="cl-card-body">
                <div className="cl-card-meta">
                  <span className="cl-badge">{card.category}</span>
                  <span className="cl-card-year">📅 {card.year}</span>
                </div>
                <h2 className="cl-card-title">{card.title}</h2>
                <p className="cl-card-desc">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardList;