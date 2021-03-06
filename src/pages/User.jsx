import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Account from "../components/Account";
import UserService from "../services/user.service";
import { Navigate } from "react-router-dom";
import {toggleEdition, editName} from "../slices/user"
import Edition from "../components/Edition";

const User = () => {
  const dispatch = useDispatch();
  const {isEditing,firstName, lastName} = useSelector( (state) => state.user);
  const [content, setContent] = useState("");
  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data.body);
        dispatch(editName([response.data.body.firstName, response.data.body.lastName]))
        console.log(content);
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
  const { user: currentUser } = useSelector((state) => state.auth);
  return !currentUser ? (
    <Navigate replace to={"/login"} />
  ) : (
    <main className="main bg-dark">
      {!isEditing ? (
        <div className="header">
          {" "}
          <h1>
            Welcome back
            <br />
            {firstName} {lastName}!
          </h1>
          <button className="edit-button" onClick={ () => dispatch(toggleEdition())}>Edit Name</button>
        </div>
      ): (
        <div className="header">
          {" "}
          <h1>Welcome back</h1>
          <Edition/>
        </div>
      )} 
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
};
export default User;
