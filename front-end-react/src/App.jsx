import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Header from "./Components/Header";

import NotFound from "./NotFound";
import Footer from "./Components/Footer";
import Login from "./Components/utilisateur/Login/Login";
import Inscription from "./Components/utilisateur/Login/Inscription";
import List from "./Components/Admin/List";
import Edit from "./Components/Admin/Edit";
import EspaceAdmin from "./Components/Admin/EspaceAdmin";
import Membre from "./Components/Admin/Membre";
import Parametre from "./Components/Admin/Parametre";
import Produit from "./Components/Produit/Produit";
import Post from "./Components/Admin/Post";
import Men from "./Components/Men";
import DashUser from "./Components/utilisateur/Login/DashUser";
import ProfilUser from "./Components/utilisateur/Login/ProfilUser";
import { useEffect, useState } from "react";
import FuncsCookies from "./func/funcsCookies";
import axios from "axios";

function App() {
  const [userConnected, setUserConnected] = useState({});

  const getUserCookiesData = async () => {
    if (Object.entries(userConnected).length === 0) {
      let donneCookieUser = FuncsCookies.getCookie("id-user");
      if (parseInt(donneCookieUser)) {
        try {
          const response = await axios.get("http://localhost:8000/api/users/");
          // console.log(response.data.results);
          const List = response.data.results;
          // navigate("/Login");
          let userConnectedTemp = {};
          List.forEach((user) => {
            if (parseInt(user.id) === parseInt(donneCookieUser)) {
              userConnectedTemp = user;
              userConnectedTemp.state = 0;
              userConnectedTemp.password = "1234";
            }
          });

          if (Object.entries(userConnectedTemp).length > 0) {
            setUserConnected(userConnectedTemp);
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  useEffect(() => {
    getUserCookiesData();
  });

  const deconnexion = async () => {
    let userConnectedTemp = userConnected;
    userConnectedTemp.state = 0;
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
      FuncsCookies.setCookie("id-user", userConnectedTemp.id, -1);
      setUserConnected({});
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Header userConnected={userConnected} deconnexion={deconnexion} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/Login"
            element={
              <Login
                userConnected={userConnected}
                setUserConnected={setUserConnected}
              />
            }
          />
          <Route path="inscription" element={<Inscription />} />
          <Route path="/List" element={<List />} />
          <Route path="/Edit" element={<Edit />} />
          <Route path="/posts" element={<Post />} />
          <Route path="User" element={<Membre />} />
          <Route path="" element={<Produit />} />
          <Route path="Parametre" element={<Parametre />} />
          <Route path="ProduitAdmin" element={<Post />} />
          <Route path="Men" element={<Men />} />
          <Route path="DashUser" element={<DashUser />} />
          <Route path="ProfilUser" element={<ProfilUser />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
