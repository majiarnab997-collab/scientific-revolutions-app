import "./AddNawCaed.css";

const AddNewCard = () => {
  return (
    <form className="add-new-card"> 
    
        <h1 className="add-new-card-heading">Add New Card</h1>
        <label className="add-new-card-label">Title</label>
        <input type="text" placeholder="Title" className="add-new-card-input" />
        <label className="add-new-card-label">Category</label>  
        <input type="text" placeholder="Category" className="add-new-card-input" />
        <label className="add-new-card-label">Description</label>
        <textarea placeholder="Description" className="add-new-card-textarea"></textarea>
        <label className="add-new-card-label">Image URL</label>
        <input type="text" placeholder="Image URL" className="add-new-card-input" />
        <label className="add-new-card-label">Year</label>
        <input type="text" placeholder="Year" className="add-new-card-input" />
        <button type="submit" className="add-new-card-btn">Add Card</button>
     </form>)}
export default AddNewCard