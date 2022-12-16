import React, { useEffect, useState } from 'react';
import styles from './Form.module.css';
import axios from 'axios';
const Form = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('second');
  const [password, setPassword] = useState('');
  const [occupation, setOccupation] = useState('');
  const [state, setState] = useState('');
  const [message, setMessage] = useState('');

  /* form validation & Post Request */
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { occupation, name, email, password, state };

    if (name === '') {
      setMessage('Please enter name');
      document.getElementById('name').style.backgroundColor = 'pink';

      return;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setMessage('Please Enter Valid Email');
      document.getElementById('email').style.backgroundColor = 'pink';
    } else if (password.length < 8) {
      setMessage('Password needs to be atleast 8 characters');
      document.getElementById('password').style.backgroundColor = 'pink';
    } else if (occupation === '') {
      setMessage('Please select occupation');
      document.getElementById('occupation').style.backgroundColor = 'pink';
    } else if (state === '') {
      setMessage('Please select state');
      document.getElementById('state').style.backgroundColor = 'pink';
    } else {
      console.log(JSON.stringify(user));
      axios
        .post('https://frontend-take-home.fetchrewards.com/form', user)
        .catch((err) => {
          console.log(err);
        });
      document.getElementById('modal').style.display = 'block';
    }
  };
  /* data collected from user */
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const occupationHandler = (e) => {
    setOccupation(e.target.value);
  };
  const stateHandler = (e) => {
    setState(e.target.value);
  };

  return (
    <>
      <span className={styles.message}>{message}</span>
      <form onSubmit={handleSubmit} className={styles.container}>
        <label htmlFor="name">Name</label>
        <input onChange={nameHandler} type="text" name="name" id="name" />

        <label htmlFor="email">Email</label>
        <input onChange={emailHandler} type="text" name="email" id="email" />
        <label htmlFor="passsword">Password</label>
        <input
          onChange={passwordHandler}
          type="password"
          name="password"
          id="password"
        />
        <label htmlFor="occupation">Occupation</label>
        <select onChange={occupationHandler} name="state" id="occupation">
          <option value=""></option>
          {props.occupation?.map((x) => (
            <option value={x}>{x}</option>
          ))}
        </select>
        <label htmlFor="state">State</label>
        <select onChange={stateHandler} name="state" id="state">
          <option value=""></option>
          {props.states?.map((x) => (
            <option value={x.name}>{x.name}</option>
          ))}
        </select>
        <input type="submit" name="submit" id="submit" />
      </form>
    </>
  );
};

export default Form;
