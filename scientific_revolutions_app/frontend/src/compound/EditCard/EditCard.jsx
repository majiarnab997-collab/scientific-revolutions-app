import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import "./EditCard.css"

const EditCard = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [year, setYear] = useState("")
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)
  const [mounted, setMounted] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/get-card/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title || "")
        setCategory(data.category || "")
        setDescription(data.description || "")
        setImageUrl(data.image_url || "")
        setYear(data.year || "")
      })
      .catch((err) => console.error("Fetch error:", err))
      .finally(() => {
        setFetching(false)
        setTimeout(() => setMounted(true), 50)
      })
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const data = { title, category, description, image_url: imageUrl, year }

    try {
      const response = await fetch(`http://127.0.0.1:5000/update-card/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      if (response.ok) {
        setSuccess(true)
        setTimeout(() => navigate("/cardlist"), 1200)
      } else {
        alert(result.error || "Update failed ❌")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Something went wrong ❌")
    } finally {
      setLoading(false)
    }
  }

  if (fetching) {
    return (
      <div className="ec-loading">
        <div className="ec-loader">
          <div></div><div></div><div></div>
        </div>
        <p>Loading card data...</p>
      </div>
    )
  }

  return (
    <div className={`ec-page ${mounted ? "ec-mounted" : ""}`}>

      {/* Left panel — preview */}
      <div className="ec-preview-panel">
        <div className="ec-preview-inner">
          <span className="ec-preview-label">Live Preview</span>

          <div className="ec-preview-card">
            <div className="ec-preview-img-wrap">
              {imageUrl
                ? <img src={imageUrl} alt={title} className="ec-preview-img" onError={(e) => e.target.style.display = "none"} />
                : <div className="ec-preview-placeholder">🖼️</div>
              }
              <div className="ec-preview-year">{year || "Year"}</div>
            </div>
            <div className="ec-preview-body">
              <span className="ec-preview-category">{category || "Category"}</span>
              <h3 className="ec-preview-title">{title || "Title"}</h3>
              <p className="ec-preview-desc">{description || "Description will appear here..."}</p>
            </div>
          </div>

          <div className="ec-preview-badge">
            <span>ID</span>
            <strong>#{id}</strong>
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="ec-form-panel">
        <button className="ec-back-btn" onClick={() => navigate("/cardlist")}>
          ← Back to List
        </button>

        <h1 className="ec-heading">Edit <span>Card</span></h1>
        <p className="ec-sub">Make your changes below and save</p>

        {success && (
          <div className="ec-success-banner">
            ✅ Saved! Redirecting...
          </div>
        )}

        <form className="ec-form" onSubmit={handleSubmit}>
          <div className="ec-field">
            <label className="ec-label">Title</label>
            <input type="text" className="ec-input" placeholder="e.g. Breaking Bad"
              value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>

          <div className="ec-field">
            <label className="ec-label">Category</label>
            <input type="text" className="ec-input" placeholder="e.g. TV Show, Movie, Anime"
              value={category} onChange={(e) => setCategory(e.target.value)} required />
          </div>

          <div className="ec-field">
            <label className="ec-label">Description</label>
            <textarea className="ec-textarea" placeholder="Write a short description..."
              value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>

          <div className="ec-row">
            <div className="ec-field">
              <label className="ec-label">Image URL</label>
              <input type="text" className="ec-input" placeholder="https://..."
                value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
            </div>
            <div className="ec-field ec-field-year">
              <label className="ec-label">Year</label>
              <input type="number" className="ec-input" placeholder="2024"
                value={year} onChange={(e) => setYear(e.target.value)} />
            </div>
          </div>

          <div className="ec-actions">
            <button type="button" className="ec-btn-cancel" onClick={() => navigate("/cardlist")}>
              Cancel
            </button>
            <button type="submit" className="ec-btn-save" disabled={loading || success}>
              {loading ? <span className="ec-saving-dots"><span></span><span></span><span></span></span> : "💾 Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditCard