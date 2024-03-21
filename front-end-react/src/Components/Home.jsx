import React from 'react'
import './Home.css';


import Contenu from './Contenu';
import Section2 from './Section2';
import SignUp from './SignUp';
import Addproduit from './Admin/Addproduit';





function Home() {
  return (
    <div>
      <Contenu />
      <Section2 />
      <SignUp/>
      {/* <Addproduit/> */}
      
   
    
    </div>
  );
}

export default Home