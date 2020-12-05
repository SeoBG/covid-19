import React, { useState } from "react";
import {
  Link
} from "react-router-dom";
import { Container, Row, Col } from 'react-grid-system';

import '../App.css';
import Modal from './Modal.js';

const List = (props) => {
  const [show, setShow] = useState(false);
  const [newCases, setNewCases] = useState('');
  const [newCountry, setNewCountry] = useState('');
  const [newDeaths, setNewDeaths] = useState('');
  const [newRecovered, setNewRecovered] = useState('');
  const [totalConfirmed, setTotalConfirmed] = useState('');
  const [totalRecovered, setTotalRecovered] = useState('');
  const [totalDeaths, setTotalDeaths] = useState('');
  const openModal = () =>  setShow(true);
  const closeModal = () => setShow(false);
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>Something go wrong!</p>;
  const handleClick = (e, repos) => {
    setNewCases(repos.NewConfirmed)
    setNewCountry(repos.Country)
    setNewDeaths(repos.NewDeaths)
    setNewRecovered(repos.NewRecovered)
    setTotalConfirmed(repos.TotalConfirmed)
    setTotalRecovered(repos.TotalRecovered)
    setTotalDeaths(repos.TotalDeaths)
    console.log(repos)
  }
  console.log('newCases ', newCases);
  return (
    <div style={{ backgroundColor: '#282c34' }}>
      <Modal
        country={newCountry}
        closeModal={closeModal}
        show={show}
        newCases={newCases}
        newDeaths={newDeaths}
        newRecovered={newRecovered}
        totalConfirmed={totalConfirmed}
        totalDeaths={totalDeaths}
        totalRecovered={totalRecovered}
      />
      <Container>
        <h1 className='list-head'>WHO Coronavirus Disease (COVID-19) Dashboard</h1>
        <Row>
          <Col sm={8} className="content">
            {repos.map((repo, i) => {
              return (
                <div className='smallRows' key={i}>
                  <Link onClick={((e) => handleClick(e, repo))} className="App-link"><span className="country-link">{repo.Country}</span></Link>
                </div>
              );
            })}
          </Col>
          <Col sm={4}>
            <div className='aside'>
              <h2>Country: {newCountry}</h2>
              <p className='repo-description'>New Infected Cases: <strong>{newCases}</strong></p>
              <p className='repo-description'>New Deaths Cases: <strong>{newDeaths}</strong></p>
              <p className='repo-description'>New Recovered Cases: <strong>{newRecovered}</strong></p>
              <p className='repo-description'>Total Confirmed Cases: <strong>{totalConfirmed}</strong></p>
              <p className='repo-description'>Total Deaths Cases: <strong>{totalDeaths}</strong></p>
              <p className='repo-description'>Total Recovered Cases: <strong>{totalRecovered}</strong></p>
              <button onClick={openModal}>More Info</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default List;