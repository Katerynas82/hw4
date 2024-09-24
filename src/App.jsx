// import { useState } from 'react'
import React from 'react'
import axios from 'axios';

const App = () => {

  useEffect(() => {
    axios.get("https://api.unsplash.com/search/photos");
  }, []);


  return (
    <div>App</div>
  )
}




export default App
