import { createContext, useEffect, useState } from "react";

export const DataContext = createContext({
  rating: {
    oneStar: 0,
    twoStar: 0,
    threeStar: 0,
    fourStart: 0,
    fiveStar: 0,
  },
  userData: [],
  addUser: (user) => {},
  deleteUser: (user) => {},
  editUser: () => {},
});

const ContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [userIdCounter, setUserIdCounter] = useState(1);

  const [rating, setRating] = useState({
    oneStar: 0,
    twoStar: 0,
    threeStar: 0,
    fourStar: 0,
    fiveStar: 0,
  });

  useEffect(() => {
    const newRating = {
      oneStar: users.filter((user) => user.rating === "1").length,
      twoStar: users.filter((user) => user.rating === "2").length,
      threeStar: users.filter((user) => user.rating === "3").length,
      fourStar: users.filter((user) => user.rating === "4").length,
      fiveStar: users.filter((user) => user.rating === "5").length,
    };
    setRating(newRating);
  }, [users]);

  const addUserHandler = (user) => {
    const newUser = { ...user, id: userIdCounter };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setUserIdCounter((prevCounter) => prevCounter + 1);
  };

  const deleteuserHandler = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const editUserHandler = (userId, updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...updatedUser, id: userId } : user
      )
    );
  };

  return (
    <DataContext.Provider
      value={{
        rating,
        userData: users,
        addUser: addUserHandler,
        deleteUser: deleteuserHandler,
        editUser: editUserHandler,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
