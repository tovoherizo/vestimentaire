import React from 'react'
import './EspaceAdmin.css';
import { NavLink, useNavigate } from 'react-router-dom';
import List from './List';

function EspaceAdmin() {
    const navigate = useNavigate();
    const routeMembre = () => {
        navigate('/User');
    }
     const routeProduit = () => {
       navigate("/posts");
    };
     const routeParametre = () => {
       navigate("/Parametre");
     };
  return (
    <div className="dash">
      <div className="Menu">
        <h2>Dashboard</h2>
        <hr style={{ border: "solid " }} />
        <div className="liste">
          <div className="bar">
            <ul>
              <li onClick={routeMembre} style={{ cursor: "pointer" }}>
                Ajout Membre
              </li>
              <li onClick={routeProduit} style={{ cursor: "pointer" }}>
                Ajout Produit
              </li>
              <li onClick={routeParametre} style={{ cursor: "pointer" }}>
                Parametre
              </li>
            </ul>
          </div>

          <div className="onglet">
            <p className="ad">Admin</p>
            <select name="" id="">
              <option>Profil</option>
              <option>Langue</option>
              <option></option>
              <hr />
              <option>se deconnecter</option>
            </select>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default EspaceAdmin