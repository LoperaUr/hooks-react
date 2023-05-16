import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to={"/"}>home</Link>
        <Link to={"/albums"}>albums</Link>
        <Link to={"/comments"}>comments</Link>
        <Link to={"/photos"}>photos</Link>
        <Link to={"/posts"}>posts</Link>
        <Link to={"/todos"}>todos</Link>
        <Link to={"/users"}>users</Link>
      </nav>
    </header>
  );
};

export default Header;
