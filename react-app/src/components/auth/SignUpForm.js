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
  const [character_pfp, setCharacter_pfp] = useState('https://mariokart8.nintendo.com/assets/img/drivers/mario_th.png');
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
      <div className="sign-up-banner">
        <h1 className="title-sign-up">Sign up now to track</h1>
        <h1 className="title-sign-up">your high scores!</h1>
        <div className='mario-div'>
        </div>
        <img src="https://i.imgur.com/Fa4DmJZ.png" className="img-sign-up-mario" alt='baby mario'></img>
      </div>
      <form className="sign-up-form-container" onSubmit={onSignUp}>
        <div className="sign-up-errors">
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>
          <label className="sign-up-label">Username</label>
          <input
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
            className="sign-up-input"
          ></input>
        </div>
        <div>
          <label className="sign-up-label">Email</label>
          <input
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
            className="sign-up-input"
          ></input>
        </div>
        <div>
          <label className="sign-up-label">Password</label>
          <input
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
            className="sign-up-input"
          ></input>
        </div>
        <div>
          <label className="sign-up-label">Repeat Password</label>
          <input
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
            className="sign-up-input"
          ></input>
        </div>
        <div>
          <label className="sign-up-label">Bio</label>
          <input
            id="bio-input-box"
            type='text'
            name='bio'
            onChange={updateBio}
            value={bio}
            required={false}
            className="sign-up-input"
          ></input>
        </div>

        <div className="character-select-container">
          <div className="character-select-rows">
            <input
              name="character-select"
              type="radio"
              defaultChecked
              value="https://mariokart8.nintendo.com/assets/img/drivers/mario_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/mario_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/luigi_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/luigi_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/peach_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/peach_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/daisy_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/daisy_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/rosalina_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/rosalina_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/tanukiMario_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/tanukiMario_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/catPeach_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/catPeach_th.png" className="pfp_label" alt='pfp' />
            </label>
          </div>

          <div className="character-select-rows">
            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/yoshi_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/yoshi_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/toad_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/toad_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/koopa_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/koopa_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/shyguy_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/shyguy_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/lakitu_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/lakitu_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/toadette_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/toadette_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/kingBoo_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/kingBoo_th.png" className="pfp_label" alt='pfp' />
            </label>
          </div>

          <div className="character-select-rows">
            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/babyMario_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/babyMario_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/babyLuigi_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/babyLuigi_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/babyPeach_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/babyPeach_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/babyDaisy_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/babyDaisy_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/babyRosalina_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/babyRosalina_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/metalMario_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/metalMario_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/goldPeach_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/goldPeach_th.png" className="pfp_label" alt='pfp' />
            </label>
          </div>

          <div className="character-select-rows">
            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/wario_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/wario_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/waluigi_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/waluigi_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/dk_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/dk_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/bowser_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/bowser_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/dryBones_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/dryBones_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/koopaJr_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/koopaJr_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/boneKoopa_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/boneKoopa_th.png" className="pfp_label" alt='pfp' />
            </label>
          </div>

          <div className="character-select-rows">
            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/lemmy_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/lemmy_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/larry_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/larry_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/wendy_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/wendy_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/ludwig_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/ludwig_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/iggy_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/iggy_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/roy_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/roy_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/morton_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/morton_th.png" className="pfp_label" alt='pfp' />
            </label>
          </div>

          <div className="character-select-rows">
            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/splatoonG_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/splatoonG_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/splatoonB_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/splatoonB_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/link_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/link_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/animalB_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/animalB_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/animalG_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/animalG_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/isabelle_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/isabelle_th.png" className="pfp_label" alt='pfp' />
            </label>

            <input
              name="character-select"
              type="radio"
              value="https://mariokart8.nintendo.com/assets/img/drivers/mii_th.png"
              onChange={updateCharacter_pfp}
            />
            <label>
              <img src="https://mariokart8.nintendo.com/assets/img/drivers/mii_th.png" className="pfp_label" alt='pfp' />
            </label>
          </div>
        </div>
        <button className="sign-up-button" type='submit'>Sign Up</button>
      </form >
    </div >

  );
};

export default SignUpForm;
