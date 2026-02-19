import React from 'react';

const Profile = () => {
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');

  return (
    <div style={{ padding: '50px' }}>
      <h2>Welcome, {name}</h2>
      <p>Email: {email}</p>
    </div>
  );
};

export default Profile;
