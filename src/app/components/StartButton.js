import React, { Component } from "react";

export default (props) => {
  const { onClick, text } = props;
  return (
    <div className="text-center ">
      <div onClick={() => onClick()}>
        {text ? text : <h1>Iniciar Juego Nuevo</h1>}
      </div>
    </div>
  );
};
