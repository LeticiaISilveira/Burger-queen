import React, { useState, useEffect } from 'react';
import { firebaseDatabase } from '../utils/firebaseUtils';
// import Button from '../Components/Button';
// import Input from '../Components/Input';
// import Title from '../Components/Title';

function Menu() {
  // firebaseDatabase.firebase.collection("breakfast")

  // firebaseDatabase.collection("breakfast").get().then(console.log)
  
  firebaseDatabase.collection('breakfast').doc('0')
  .get().then((doc => {
    console.log(doc.data());
  }));

  return (
    <div className="App">
     <h1 style={{color:'white'}}>Menu</h1>

    </div>
  );
}

export default Menu;