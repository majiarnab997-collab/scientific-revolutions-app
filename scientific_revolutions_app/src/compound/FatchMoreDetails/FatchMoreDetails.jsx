import './FatchMoreDetails.css'

const FatchMoreDetails = ({ details }) => {
    const { title, year, description, shortDescription, category, imageUrl, videoUrl } = details

    return (
        <div className="details-card">

           
            <img src={imageUrl} alt={title} className="details-image" />

            <h1>{title}</h1>
            <p className="details-category">{category} — {year}</p>
            <p>{shortDescription}</p>
            <p>{description}</p>

            
           <iframe
                width="100%"
                height="400"
                src={videoUrl.replace("watch?v=", "embed/")}
                title={title}
                allowFullScreen
            />
        </div>
    )
}

export default FatchMoreDetails;