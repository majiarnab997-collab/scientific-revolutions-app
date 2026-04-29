import { Search } from "lucide-react"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import ShowingSearchResults from "../ShowingSearchResults/ShowingSearchResults"
import "./Explore.css"

const Explore = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const ChangingInput=(event)=>{
    
    setInputValue(event.target.value  );}

  const SearchInput=async ()=>{
    const url="https://apis.ccbp.in/wiki-search?search="+inputValue;
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData )
    const arregmentData=jsonData.search_results.map((item)=>({
      id:uuidv4(),
      description:item.description,
      title:item.title,   
      link:item.link
  }));
   
   setSearchResults(arregmentData);
   setInputValue("");
   
}
  
  return (
    <div>
    <div className="explore-main-container">

      <h1 className="explore-heading">
        Explore the Unknown
      </h1>

     
      <div className="role-container">
        <span className="role-badge">Physics</span>
        <span className="role-badge">Chemistry</span>
        <span className="role-badge">Biology</span>
        <span className="role-badge">Engineering</span>
      </div>

      <div className="search-container">
        
        <div className="search-input-box">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search for a revolution, scientist, or discovery..."
            className="search-input"
            onChange={ChangingInput}
            value={inputValue}
          />
        </div>

        <button className="search-button" onClick={SearchInput}>
          Search
        </button>

      </div>

    </div>
    {searchResults.map((item)=>(
      <ShowingSearchResults 
        key={item.id} 
        title={item.title}
        description={item.description}
        link={item.link}
      />
    ))}
    </div>
  )
}

export default Explore