import React, { useContext } from "react";
import { DataContext } from "../store/data-context";

const OverallRating = () => {
  const ctx = useContext(DataContext);
  const ratingData = ctx.rating;
  return (
    <div>
      <h4>Overall   Rating</h4>
      <div style={{ margin: 12 }}>
        <div>*{ratingData.oneStar}</div>
        <div>**{ratingData.twoStar}</div>
        <div>***{ratingData.threeStar}</div>
        <div>****{ratingData.fourStar}</div>
        <div>*****{ratingData.fiveStar}</div>
      </div>
    </div>
  );
};

export default OverallRating;
