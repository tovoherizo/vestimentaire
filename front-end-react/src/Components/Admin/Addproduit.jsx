import React, { useState } from 'react'
import "./Addproduit.css";
import { useNavigate } from 'react-router-dom';
function Addproduit() {
    const navigate = useNavigate;

    const [postField, setPostField] = useState({
      titre: "",
      prix: "",
        description: "",
      image:""
    });
    const changeUserFieldHandler = (e) => {
      setPostField({
        ...postField,
        [e.target.name]: e.target.value,
      });
      console.log(postField);
    };
    const onSubmitChange = async (e) => {
      e.preventDefault();
      try {
        const responce = await axios.post(
          "http://localhost:8000/api/addnewpost",
          postField
        );
        console.log(responce);
        navigate("/posts");
      } catch (err) {
        console.log("something Wrong");
      }
    };


  return (
    <div className="ajoutproduit">
      <form>
        <h1>Ajouter Produit</h1>
        <label>
          <p className="soratra">Titre du produit:</p> <br />
          <input
            type="text"
            name="titre"
            placeholder="entrer le nom du produit"
            id="titre"
            required
            onChange={e => changeUserFieldHandler(e)}
          />
        </label>

        <label>
          <p className="soratra">Prix:</p> <br />
          <input
            className="formul"
            type="text"
            name="prix"
            placeholder="$"
            id="prix"
            required
            onChange={e => changeUserFieldHandler(e)}
          />
        </label>
        <label>
          <p className="soratra"> Description du produit:</p> <br />
          <input
            className="formul"
            type="text"
            name="description"
            placeholder="type,reference,...."
            id="description"
            required
            onChange={e => changeUserFieldHandler(e)}
          />
        </label>
        <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-3-desktop">
          <input
            type="file"
            class="mdc-text-field__input"
            id="image"
            name="image"
            onChange={e => changeUserFieldHandler(e)}
          />
        </div>
        <input
          className="formul"
          type="submit"
          placeholder="save"
          id="btn"
          // onClick={Dashboard}
          onClick={e=> onSubmitChange(e)}
        />
      </form>
    </div>
  );
}

export default Addproduit