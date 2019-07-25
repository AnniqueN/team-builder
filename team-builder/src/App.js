import React, { useState } from "react";
import "./App.css";

import Form from "./Form";
import Card from "./Card";

const App = () => {
  const [list, setList] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState(null);

  const editMember = member => {
    const editIndex = list.indexOf(memberToEdit);
    setList(
      list.map((user, index) => {
        if (index === editIndex) {
          return member;
        } else {
          return user;
        }
      })
    );
  };

  return (
    <div>
      <Form
        list={list}
        setList={setList}
        memberToEdit={memberToEdit}
        setMemberToEdit={setMemberToEdit}
        editMember={editMember}
      />
      {list.map((user, index) => {
        return (
          <Card key={index} user={user} setMemberToEdit={setMemberToEdit} />
        );
      })}
    </div>
  );
};

export default App;
