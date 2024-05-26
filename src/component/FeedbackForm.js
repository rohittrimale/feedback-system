import React, { useContext, useState } from "react";
import { DataContext } from "../store/data-context";

const FeedbackForm = () => {
  const [ratingValue, setRatingValue] = useState("5");
  const [name, setName] = useState("");
  const ctx = useContext(DataContext);
  const submitHandler = (event) => {
    event.preventDefault();

    const userDetails = {
      name: name,
      rating: ratingValue,
    };
    ctx.addUser(userDetails);
    setName("");
  };

  const ratingHandler = (event) => {
    setRatingValue(event.target.value);
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <form onSubmit={submitHandler} style={{ marginTop: 24 }}>
        <label>Enter Your Name :</label>
        <input type="text" id="name" value={name} onChange={nameHandler} />
        <label>Choose Rating</label>

        <select onChange={ratingHandler} name="rating" defaultValue="5">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
