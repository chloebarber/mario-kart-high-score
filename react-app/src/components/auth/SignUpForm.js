import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [character_pfp, setCharacter_pfp] = useState('');
  const [bio, setBio] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password, character_pfp, bio));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateCharacter_pfp = (e) => {
    setCharacter_pfp(e.target.value);
  };

  const updateBio = (e) => {
    setBio(e.target.value);
  }

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div>
      <div class="sign-up-banner">
        <h1 class="title-sign-up">Sign up now to track</h1>
        <h1 class="title-sign-up">your high scores!</h1>
        <img src="https://i.imgur.com/Fa4DmJZ.png" class="img-sign-up-mario"></img>
      </div>
      <form class="sign-up-form-container" onSubmit={onSignUp}>
        <div class="sign-up-errors">
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>
          <label>User Name</label>
          <input
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div>
          <label>Repeat Password</label>
          <input
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <div>
          <label>Bio</label>
          <input
            id="bio-input-box"
            type='text'
            name='bio'
            onChange={updateBio}
            value={bio}
            required={false}
          ></input>
        </div>
        <div className="character-select-container">
          <div className="pfp-select toad-pfp">
            <label>
              <img src="https://pbs.twimg.com/media/DPv03idXUAAE7nI.png" width="75" />
              <input
                type="radio"
                value="https://pbs.twimg.com/media/DPv03idXUAAE7nI.png"
                checked={character_pfp}
                onChange={updateCharacter_pfp}
              />
            </label>
          </div>
        </div>
        <button class="sign-up-button" type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
