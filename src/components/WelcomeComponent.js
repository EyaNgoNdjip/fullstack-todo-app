import React from "react";
import { useParams } from "react-router-dom";

const WelcomeComponent = () => {
  const { username } = useParams();

  return (
    <div>
      <h1 className="welcome"> Welcome {username}</h1>
    </div>
  );
};

export default WelcomeComponent;
