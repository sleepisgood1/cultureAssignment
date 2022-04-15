import React, { useState, useEffect } from 'react';
import data1 from '../exampleData.js';
import ExperimentPictures from './ExperimentPictures.jsx';
import axios from 'axios'
import FilterButtons from './FilterButtons.jsx'

const App = () => {
  const [filter, setFilter] = useState("everything");
  const [expData, setExpData] = useState([]);

  const onSubmitButton = (id, foaming) => {
    // console.log(id, foaming)
    axios.put('/update', {id, foaming})
      .then((response)=> {
        // console.log(response)
        setExpData(response.data)
      })
  };

  const filterButton = (event)=>{
    // console.log(event.target)
    console.log(event.target.value)
    axios.get('/getAll', {
      params: {
        number: 30,
        condition: event.target.value
      }
    })
      .then((response)=>{
        setExpData(response.data)
      })
  };

  useEffect(()=>{
    axios.get('/getAll', {
      params: {
        number: 30,
        condition: "null"
      }
    })
      .then((data)=>{
        setExpData(data.data)
      })
  }, []);

  return (
    <div>
      <h1>Lets do this Culture!</h1>
      <FilterButtons filterButton={filterButton}/>
      <ExperimentPictures pictureData={expData} onSubmitOfForm={onSubmitButton}/>
    </div>
  )
};
export default App;