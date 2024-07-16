import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <>
      <h1>Admin</h1>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/contact"}>Contact</Link>
    </>
  );
}

export default Admin;
