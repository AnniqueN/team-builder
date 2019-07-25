import React from "react";

const Card = ({ user, setMemberToEdit }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Role:</strong> {user.role}
      </p>
      <button onClick={() => setMemberToEdit(user)}>Edit</button>
    </div>
  );
};

export default Card;
