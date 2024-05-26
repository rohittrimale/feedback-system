import React, { useContext } from "react";
import { DataContext } from "../store/data-context";
import UserCard from "./UserCard";

const AllFeedback = () => {
  const ctx = useContext(DataContext);

  const users = ctx.userData;

  return (
    <div>
      <h3>All Feedback</h3>
      {users.map((user) => {
        return <UserCard user={user} key={user.id} />;
      })}
    </div>
  );
};

export default AllFeedback;
