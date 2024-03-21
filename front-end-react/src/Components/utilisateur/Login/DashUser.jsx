import React from 'react'
import './DashUser.css';
import { useNavigate } from 'react-router-dom';
function DashUser() {
    const navigate = useNavigate();
    const ProfilUser = () => {
      navigate("/ProfilUser");
    };
  return (
    <div>
      <div>
        <div className="dash">
          <div className="Menu">
            <h2>Dashboard</h2>
            <hr style={{ border: "solid " }} />
            <div className="liste">
              <div className="bar">
                <ul>
                  <li onClick={ProfilUser} style={{ cursor: "pointer" }}>
                    Editer votre Profil
                  </li>
                  <li style={{ cursor: "pointer" }}>tout vos Achat</li>
                  <li style={{ cursor: "pointer" }}>Parametre</li>
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
      </div>
    </div>
  );
}

export default DashUser