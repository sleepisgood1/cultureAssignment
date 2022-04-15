import React, { useState, useEffect } from 'react';
import data1 from '../exampleData.js';
import ExperimentPictures from './ExperimentPictures.jsx';
import axios from 'axios'
const App = () => {
  const [expData, setExpData] = useState([]);
  const onClickOfRadio = () => {
    console.log(event.target)
    //send an axios.put req to database and have it return the updated list
  };
  useEffect(()=>{
    axios.get('/getAll', {
      params: {
        number: 30,
        condition: "null"
      }
    })
      .then((data)=>{
        console.log('data', data1)
        console.log('now', data.data)
        setExpData(data.data)
      })
  }, [])

  return (
    <div>
      <div>lets do this Culture</div>
      <ExperimentPictures pictureData={expData} onClickOfRadio={onClickOfRadio}/>
    </div>
  )
}
export default App;