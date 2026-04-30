import "./ShowingSearchResults.css";
const ShowingSearchResults = (props) => {
    const {title,description,link}=props;
    return (
        <div className="search-result-card">
            <h2 className="result-title">{title}</h2>
            <p className="result-description">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="result-link">{link}</a>
        </div>
    )
    

}
export default ShowingSearchResults;