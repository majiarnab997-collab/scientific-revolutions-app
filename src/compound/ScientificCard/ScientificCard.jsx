
import "./ScientificCard.css"
import { useNavigate } from "react-router-dom";  
const ScientificCard=(props)=>{
    const {id, title, category, year, description, image} = props;
    const navigate=useNavigate();
    const clickingReadmoreButton=()=>{
        navigate(`/details/${id}`)
    }
    return(
        <div className="card">
            <img src={image} alt={title} className="card-image"/>
            <h1 className="card-title">{title}</h1>
            <p className="card-description">{description}</p>
            <button className="card-button" onClick={clickingReadmoreButton}>Read More</button>
        </div>
    )

}

export default ScientificCard;  