import { useState } from "react";
import "./AddNewCard.css";

const AddNewCard = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    const data = {
      title,
      category,
      description,
      image_url: imageUrl,
      year,
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/add-card", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);

      alert("Card added successfully ✅");

      // clear form after submit
      setTitle("");
      setCategory("");
      setDescription("");
      setImageUrl("");
      setYear("");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong ❌");
    }
  };

  return (
    <form className="add-new-card" onSubmit={handleSubmit}>
      <h1 className="add-new-card-heading">Add New Card</h1>

      <label className="add-new-card-label">Title</label>
      <input
        type="text"
        placeholder="Enter title"
        className="add-new-card-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label className="add-new-card-label">Category</label>
      <input
        type="text"
        placeholder="Enter category"
        className="add-new-card-input"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <label className="add-new-card-label">Description</label>
      <textarea
        placeholder="Enter description"
        className="add-new-card-textarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label className="add-new-card-label">Image URL</label>
      <input
        type="text"
        placeholder="Enter image URL"
        className="add-new-card-input"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <label className="add-new-card-label">Year</label>
      <input
        type="number"
        placeholder="Enter year"
        className="add-new-card-input"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <button type="submit" className="add-new-card-btn">
        Add Card
      </button>
    </form>
  );
};

export default AddNewCard;