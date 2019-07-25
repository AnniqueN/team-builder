import React, { useState } from "react";
import "./App.css";

import Form from "./Form";
import Card from "./Card";

import { listOfPeople } from "./Data";

const App = () => {
  const [list, setList] = useState([...listOfPeople]);
  const [memberToEdit, setMemberToEdit] = useState(null);

  const editMember = member => {
    const editIndex = list.indexOf(memberToEdit);
    // Updates the list with the newly edited object
    setList(list.map((user, index) => (index === editIndex ? member : user)));
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

