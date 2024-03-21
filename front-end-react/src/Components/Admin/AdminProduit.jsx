import React from 'react'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaPencil } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import './AdminProduit.css';
const AdminProduit =() => {
   const [postData, setPostData] = useState([]);
   useEffect(() => {
     fetchData();
   }, []);
   const fetchData = async () => {
     try {
       const result = await axios("http://localhost:8000/api/posts");
       console.log(result.data.results);
       setPostData(result.data.results);
     } catch (error) {
       console.log("tsisy ninoninana ato");
     }
    };
    const handleDelete = async (id) => {
      console.log(id);
      await axios.delete("http://localhost:8000/api/postsdelete/" + id);
      const newPostData = postData.filter((item) => {
        return item.id !== id;
      });
      setPostData(newPostData);
    }; 
  
  return (
        <div className="container">
          <h3>Produit </h3>
          <div className="tablo">
            <table>
              <thead>
                <tr>
                  <th>S.NO</th>
                  <th>titre</th>
                  <th>prix</th>
                  <th>description</th>
                  
                </tr>
              </thead>
              <tbody>
                        {
                           postData.map((post, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{post.titre}</td>
                      <td>{post.prix}</td>
                      <td>{post.description}</td>

                      <td className="action">
                        {/* <div className="action"> */}
                        {/* <FiSearch to={"/view/${user.id}"} className="iconList" /> */}

                        <FaPencil className="iconList1" to={"/addproduit"} />
                        <IoIosAddCircle className="iconList1" />
                        <button
                          className="delete"
                          onClick={() => handleDelete(post.id)}>
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


export default AdminProduit