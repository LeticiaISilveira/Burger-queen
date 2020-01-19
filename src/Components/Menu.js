import {useEffect, useState} from 'react';
import { db } from '../utils/firebaseUtils';

export default function Menu() {
  const [menu, setMenu ]= useState([]);
  useEffect (()=> { db.collection('menu').get()
    .then((snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        ...doc.data()
      }))
      setMenu(newData)
    })
  },[])
  return menu
}