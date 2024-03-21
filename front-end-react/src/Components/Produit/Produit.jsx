import React, { useEffect, useState } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from 'axios';
import './Produit.css';

function Produit() {
    const [ postData, setPostData ] = useState([]);
    useEffect(() => {
        fetchData();

    }, [])
    const fetchData = async () => {
        try {
            const result = await axios("http://localhost:8000/api/posts");
            console.log(result.data.results);
            setPostData(result.data.results);

        } catch (error) {
            console.log('tsisy ninoninana ato')
            
        }
    }
    return (
        <div className='container'>
            {
                postData.map((post, i) => {
                    return (
                      <Card className='card' style={{ width: "23rem" }} key={i}>
                        <Card.Img  className='sar' variant="top" src={post.image} />
                        <Card.Body>
                          <Card.Title className='titra'>{post.titre}</Card.Title>
                          <Card.Text className='vidiny'>{post.prix}$</Card.Text>
                          <Card.Text className='desc'>{post.description}</Card.Text>
                          <Button  className="btn" variant="primary">Ajouter</Button>
                          
                        </Card.Body>
                      </Card>
                    );

                })
            }
      
      </div>
    );
}

export default Produit