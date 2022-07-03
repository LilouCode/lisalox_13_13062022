import React,  { useState, useEffect } from "react";
import Account from "../_components/Account";
import UserService from "../_services/user.service";

const User = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []);
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {content}!
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount={"$2,082.79"}
        description={"Available Balance"}
      />
      <Account
        title="Argent Bank Checking (x8349)"
        amount={"$2,082.79"}
        description={"Available Balance"}
      />
      <Account
        title="Argent Bank Checking (x8349)"
        amount={"$2,082.79"}
        description={"Available Balance"}
      />
    </main>
  );
}
export default User;
