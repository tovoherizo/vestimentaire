import React from 'react'
import AdminProduit from './AdminProduit'
import EspaceAdmin from './EspaceAdmin'
import './Post.css';

function Post() {
  return (
    <div className='dash'>
      <div>
        <EspaceAdmin />
      </div>
      <div>
        <AdminProduit/>
      </div>
    </div>
  );
}

export default Post