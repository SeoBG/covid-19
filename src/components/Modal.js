import React from "react";

function Modal(props) {
  const { show, closeModal } = props;
  return (
    <>
      <div className={show ? "modalBackground" : "hide"}>
        <div className={show ? "modal" : "hide"}>
          <button onClick={closeModal}>X</button>
          <h1>{props.country}</h1>
          <p className='repo-description'>New Infected Cases: <strong>{props.newCases}</strong></p>
          <p className='repo-description'>New Deaths Cases: <strong>{props.newDeaths}</strong></p>
          <p className='repo-description'>New Recovered Cases: <strong>{props.newRecovered}</strong></p>
          <p className='repo-description'>Total Confirmed Cases: <strong>{props.totalConfirmed}</strong></p>
          <p className='repo-description'>Total Deaths Cases: <strong>{props.totalDeaths}</strong></p>
          <p className='repo-description'>Total Recovered Cases: <strong>{props.totalRecovered}</strong></p>
        </div>
      </div>
    </>
  );
}

export default Modal;