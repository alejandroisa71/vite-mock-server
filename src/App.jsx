import { useEffect } from 'react';
import {Button} from '@components/Button'

import './App.css';

function App() {
  useEffect(() => {
    const fetchUserByIndex = (index) => {
      fetch(`/api/users/${index}`)
        .then((response) => response.json())
        .then((data) => console.log(data));
    };
    fetchUserByIndex(8)
  }, []);

  return (
    <>
      <h1>Testeando</h1>
      <Button/>
    </>
  );
}

export default App;
