import React from "react";

import { useNavigate } from "react-router-dom";

function NavigationButtons(){
    const navigate = useNavigate();

    return (
        <div style={{ marginTop: "20px" }}>
          <button onClick={() => navigate("/")}>Go to Home</button>
          <button onClick={() => navigate("/1")}>Go to ID: 1</button>
          <button onClick={() => navigate("/books")}>Go to Books</button>
        </div>
      );
}

export default NavigationButtons;
