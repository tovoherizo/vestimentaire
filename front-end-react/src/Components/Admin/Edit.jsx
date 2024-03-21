import React, { useEffect, useState } from "react";
import "./Edit.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const clickToBackHandler = () => {
    navigate("/List");
  };

  const [userField, setUserField] = useState({
    name: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    fetchUser();
  }, [id]);
  const fetchUser = async () => {
    try {
      const result = await axios.get("http://localhost:8000/api/users/" + id);
      console.log(result.data.users);
      setUserField(result.data.users);
    } catch (err) {
      console.log("Something Wrong");
    }
  };
  const changeUserFieldHandler = (e) => {
    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
    console.log(userField);
  };
  const onSubmitChange = async (e) => {
    e.preventDefault();
    try {
       await axios.put("http://localhost:8000/api/usersupdate/"+id, userField);
        // console.log(updat.data.users)
      navigate("/");
    } catch {
      // console.log("Something Wrong");
      console.log("tsy mandeh io e");
    }
  };
  return (
    <div className="container">
      <h1>Edit User</h1>
      <form action="">
        <div className="mb3 mt-3">
          <label htmlFor="" className="form-label">
            ID:
          </label>
          <input
            type="text"
            className="form-control"
            id="id"
            name="id"
            value={id}
            placeholder="Entrer l'ID "
          />
        </div>
        <div className="mb3 mt-3">
          <label htmlFor="" className="form-label">
            Full Name:
          </label>
          <input
            type="text"
            className="form-control"
            value={userField.name}
            onChange={e => changeUserFieldHandler(e)}
            id="name"
            placeholder="Entrer le nom de l'utilisateur a modifier"
            name="name"
          />
        </div>
        <div className="mb3 mt-3">
          <label htmlFor="" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={userField.email}
            onChange={e => changeUserFieldHandler(e)}
            placeholder="Entrer l'email  de l'utilisateur a modifier"
          />
        </div>
        <div className="mb3 mt-3">
          <label htmlFor="" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={userField.password}
            onChange={e=> changeUserFieldHandler(e)}
            placeholder="Entrer le mot de passe  "
          />
        </div>
       
          <button
          type="submit"
          className="btn btn-primary"
          onClick={e=> onSubmitChange(e)}>
          UPDATE
        </button>
      </form>
      <div className="container d-flex justify-content-end" id="retour">
        <button className="btn btn-primary" id="accueil" onClick={clickToBackHandler}>
          Retour 
        </button>
        </div>
      </div>
    
  );
}

export default Edit;
