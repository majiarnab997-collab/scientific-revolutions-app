import { useEffect, useState } from "react"
import {
  Search,
  Sparkles,
  BookOpen,
  PlusCircle,
  ArrowRight,
} from "lucide-react"
import ScientificCard from "../ScientificCard/ScientificCard"
import "./card.css"
import { useNavigate } from "react-router-dom"

const Card = () => {
  const [cardData, setCardData] = useState([])
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://gist.githubusercontent.com/majiarnab997-collab/cef334ad642d623fffa738235b36a67b/raw/327448538feb1b678894d56f7b60904a607c1a27/scientific_revolutions.json"
      )

      const jsonData = await response.json()

      console.log(jsonData)

      // If your JSON itself is an array
      const Data = jsonData.data

      const formatedData = Data.map((item) => ({
        id: item.id,
        title: item.title,
        category: item.category,
        description: item.description,
        imageUrl: item.imageUrl,
        year: item.year,
      }))

      setCardData(formatedData)
    } catch (error) {
      console.log(error)
    }
  }

  fetchData()
}, [])

  const filteredCards = cardData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="card-page">

      {/* HERO SECTION */}
      <section className="card-hero-section">
        <div className="hero-badge">
          <Sparkles size={18} />
          <span>Scientific Knowledge Hub</span>
        </div>

        <h1 className="card-main-heading">
          Explore The World Of
          <span> Scientific Revolutions</span>
        </h1>

        <p className="card-subtitle">
          Discover groundbreaking inventions, scientific discoveries,
          revolutionary ideas, and historical innovations that transformed
          human civilization forever.
        </p>

        {/* SEARCH */}
        <div className="search-wrapper">
          <Search className="search-icon" size={22} />

          <input
            type="text"
            placeholder="Search scientific discoveries..."
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* STATS */}
        <div className="stats-container">
          <div className="stat-box">
            <h2>{cardData.length}+</h2>
            <p>Total Cards</p>
          </div>

          <div className="stat-box">
            <h2>100+</h2>
            <p>Scientific Topics</p>
          </div>

          <div className="stat-box">
            <h2>24/7</h2>
            <p>Learning Access</p>
          </div>
        </div>
      </section>

      {/* NO RESULT */}
      {filteredCards.length === 0 ? (
        <div className="no-result-container">

          <div className="no-result-card">
            <BookOpen size={70} className="no-result-icon" />

            <h2>No Cards Found</h2>

            <p>
              We couldn't find any scientific revolution related to your search.
              Try exploring more topics or create your own scientific card.
            </p>

            <div className="no-result-buttons">

              <button
                onClick={() => navigate("/explore")}
                className="explore-btn"
              >
                Explore More
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => navigate("/cardlist")}
                className="add-btn"
              >
                <PlusCircle size={18} />
                User Card List
              </button>

            </div>
          </div>

        </div>
      ) : (

        /* CARD SECTION */
        <div className="card-arrangement">
          {filteredCards.map((item) => (
            <ScientificCard
              key={item.id}
              id={item.id}
              title={item.title}
              category={item.category}
              year={item.year}
              description={item.description}
              image={item.imageUrl}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Card