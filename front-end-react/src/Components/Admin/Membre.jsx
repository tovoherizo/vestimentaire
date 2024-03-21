import React from 'react'
import EspaceAdmin from './EspaceAdmin';
import List from './List';
import './Membre.css';


function Membre() {
  return (
    <div className='dash'>
      <div>
        <EspaceAdmin />
      </div>
      <div >
        <List/>
      </div>
      
    </div>
  );
}

export default Membre