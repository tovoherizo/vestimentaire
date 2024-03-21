import React, { useState } from 'react'
import './Inscription.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Inscription() {
  const navigate = useNavigate();
  

  const [userField, setUserField] = useState({
    name: "",
    email: "",
    Password: ""
  });
  const changeUserFieldHandler = (e) => {
    
    setUserField({
      ...userField,
      [ e.target.name ]: e.target.value
    });
    console.log(userField); 
  }
  const onSubmitChange = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.post("http://localhost:8000/api/addnew", userField);
      console.log(responce);
      navigate("/Login");

    } catch (err) {
      console.log("something Wrong");
    }
  }




     
  
  return (
    <div className="inscription">
      <form className="log">
        <h1>S'inscrire</h1>
        <label>
          <p className="soratra">Nom:</p> <br />
          <input
            className="formul"
            type="text"
            name="name"
            placeholder="entrer votre nom"
            id="name"
            required
            onChange={e => changeUserFieldHandler(e)}
          />
        </label>

        <label>
          <p className="soratra">Email:</p> <br />
          <input
            className="formul"
            type="email"
            name="email"
            placeholder="@email"
            id="email"
            required
            onChange={e=> changeUserFieldHandler(e)}
          />
        </label>
        <label>
          <p className="soratra"> Mot de passe:</p> <br />
          <input
            className="formul"
            type="password"
            name="password"
            placeholder="mot de passe"
            id="password"
            required
            onChange={e => changeUserFieldHandler(e)}
          />
        </label>
        <label>
          <p className="soratra"> Confirmer votre mot de passe:</p> <br />
          <input
            className="formul"
            type="password"
            name="password"
            placeholder="Confirmer votre mot de passe"
            required
          />
        </label>
        <div className="checkbox">
          <p className="sexe"> Sexe: &nbsp;&nbsp;</p>
          <label htmlFor="" className="check">
            <input type="checkbox" name="" id="" /> &nbsp;
            <p className="sexe">Homme</p>
            &nbsp;&nbsp;&nbsp;
            <input type="checkbox" name="" id="" /> &nbsp;
            <p className="sexe">Femme</p>
          </label>
        </div>
        <br />
        <input
          className="formul"
          type="submit"
          placeholder="S'inscrire"
          id="btn"
          // onClick={Dashboard}
          onClick={e => onSubmitChange(e)}
        
        />
      </form>
    </div>
  );
}

export default Inscription