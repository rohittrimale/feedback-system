import React, { useContext, useState } from "react";
import { DataContext } from "../store/data-context";

const UserCard = ({ user }) => {
  const ctx = useContext(DataContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(user.name);
  const [editedRating, setEditedRating] = useState(user.rating);

  const deleteHandler = () => {
    ctx.deleteUser(user.id);
  };

  const editHandler = () => {
    setIsEditing(true);
  };

  const saveHandler = () => {
    const updatedUser = { name: editedName, rating: editedRating };
    ctx.editUser(user.id, updatedUser);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <select
            value={editedRating}
            onChange={(e) => setEditedRating(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button onClick={saveHandler}>Save</button>
        </div>
      ) : (
        <div>
          {user.name} - {user.rating}{" "}
          <button onClick={deleteHandler}>Delete</button>
          <button onClick={editHandler}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default UserCard;
