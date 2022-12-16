import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import axios from 'axios';
import Modal from './components/Modal';

function App() {
  const [formOptions, setFormOptions] = useState('');

  useEffect(() => {
    axios
      .get('https://frontend-take-home.fetchrewards.com/form')
      .then((response) => setFormOptions(response.data))
      .catch((err) => {
        console.log(err);
      });
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
  console.log(formOptions);
  const states = formOptions.states;
  const occupation = formOptions.occupations;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome!</h1>
        <Modal />
        <Form states={states} occupation={occupation} />
      </header>
    </div>
  );
}

export default App;
