import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FuncsCookies from "../../../func/funcsCookies";
// import Font from '../Components/photo/fontLogin.jpg'

function Login({ userConnected, setUserConnected }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleverification = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:8000/api/users/");
      console.log(response.data.results);
      const List = response.data.results;
      // navigate("/Login");
      let emailExist = false;
      let userConnectedTemp = {};
      List.forEach((user) => {
        if (user.email.toLowerCase() === email.toLowerCase()) {
          emailExist = true;
          userConnectedTemp = user;
          userConnectedTemp.state = 1;
          userConnectedTemp.password = password;
        }
      });

      if (emailExist) {
        setUserConnected(userConnectedTemp);
        try {
          const responce = await axios.put(
            "http://localhost:8000/api/usersupdate/" + userConnectedTemp.id,
            userConnectedTemp,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log(responce);
          FuncsCookies.setCookie("id-user", userConnectedTemp.id, 3);
          navigate("/Login");
        } catch (err) {
          console.log(err);
        }
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const changeUserEmail = (e) => {
    if (e.target.value.length > 0) {
      console.log(e.target.value);
      setEmail(e.target.value);
    }
  };

  const handleChangePassword = (e) => {
    if (e.target.value.length > 0) {
      console.log(e.target.value);
      setPassword(e.target.value);
    }
  };

  return (
    <div className="connexion">
      <form className="login" onSubmit={(e) => handleverification(e)}>
        <h1>Login</h1>
        <label>
          <p className="soratra">Email:</p> <br />
          <input
            className="formulaire"
            type="email"
            name="email"
            placeholder="@email"
            onChange={(e) => changeUserEmail(e)}
          />
        </label>
        <label>
          <p className="soratra"> Mot de passe:</p> <br />
          <input
            className="formulaire"
            type="password"
            name="password"
            placeholder="mot de passe"
            onChange={handleChangePassword}
          />
        </label>
        <div className="checkbox">
          <input type="checkbox" name="" id="" /> &nbsp;
          <p>Se souvenez de moi</p>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <p>Mot de passe oublier?</p>
        </div>
        <br />
        <input
          className="formulaire"
          type="submit"
          value="Connecter"
          id="btn"
        />

        <div className="text">
          <p>Vous n'avez pas de compte? </p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <p className="inscrire">S'inscrire</p>
        </div>
      </form>
    </div>
  );
}

export default Login;
