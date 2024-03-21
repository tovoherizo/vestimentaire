import React, { NavLink, useEffect, useState } from "react";
import axios from "axios";
import { FaPencil } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
// import { result } from 'laravel-precognition-vue';
import './List.css';
import { useNavigate } from "react-router-dom";

const List = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost:8000/api/users");
      console.log(result.data.results);
      setUserData(result.data.results);
    } catch (err) {
      console.log("something wrong");
    }
  };
  const handleDelete = async (id) => {
    console.log(id);
    await axios.delete("http://localhost:8000/api/usersdelete/" + id);
    const newUserData = userData.filter((item) => {
      return (
        item.id !== id
      )
      })
    setUserData(newUserData);
  }; 
  
  const navigate = useNavigate();
  const edituser = () => {
    navigate("/Edit")
  }
  return (
    <div className="container">
      <h3> Details</h3>
      
      <div className="tablo">
        <table>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Full Name</th>
              <th>email</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {
              userData.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="action">
                    {/* <div className="action"> */}
                    {/* <FiSearch to={"/view/${user.id}"} className="iconList" /> */}

                    
                      <FaPencil className="iconList" to={"/edit/${user.id}"}  onClick={edituser} />
                   
                  

                    <button
                      className="delete"
                      onClick={() => handleDelete(user.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
