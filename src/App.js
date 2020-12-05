import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios';

import './App.css';
import List from './components/List';
import Welcome from './components/Welcome';
import Modal from './components/Modal';
import withListLoading from './components/withListLoading';

export default function App() {

  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.covid19api.com/summary`;
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data.Countries;
      setAppState({ loading: false, repos: allRepos });
    });
  }, [setAppState]);

  return (
    <Router>
      <Switch>
        <Route path="/list">
          <ListLoading isLoading={appState.loading} repos={appState.repos} />
        </Route>
        <Route path="/modal">
          {/* under constr */}
        </Route>
        <Route path="/">
        <Welcome />
        </Route>
      </Switch>
    </Router>
  );
}