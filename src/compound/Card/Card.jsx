import { useEffect, useState } from "react"
import ScientificCard from "../ScientificCard/ScientificCard"
import "./card.css"
import { useNavigate } from "react-router-dom"

const Card = () => {
  const [cardData, setCardData] = useState([])
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://gist.githubusercontent.com/majiarnab997-collab/cef334ad642d623fffa738235b36a67b/raw/327448538feb1b678894d56f7b60904a607c1a27/scientific_revolutions.json"
      )
      const jsonData = await response.json()
      const Data = jsonData.data

      const formatedData = Data.map((item) => ({
        id: item.id,
        title: item.title,
        category: item.category,
        description: item.description,
        imageUrl: item.imageUrl,
        year: item.year
      }))

      setCardData(formatedData)
    }

    fetchData()
  }, [])

  // Filter cards
  const filteredCards = cardData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )
  
  return (
    <>
      <h1 className="card-heading">Card</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search cards..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
     {filteredCards.length === 0 ? <div className="no-result-container"><p className="no-result-text">No cards found.</p> <button onClick={() => navigate("/explore") } className="explore-btn">Go to Explore</button></div> : 
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
      </div>}
    </>
  )
}

export default Card