import React from "react";
import { Link, useParams } from "react-router-dom";

const WelcomeComponent = () => {
  const { username } = useParams();

  return (
    <div>
      <h1 className="welcome"> Welcome {username}</h1>
      Manage your todos - <Link to="/todos">Todos</Link>
    </div>
  );
};

export default WelcomeComponent;
