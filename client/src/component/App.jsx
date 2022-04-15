import React from 'react'
import data from '../exampleData.js'
import ExperimentPictures from './ExperimentPictures.jsx'
const App = () => {
  const [expData, setExpData] = ([])
  const onClickOfRadio = () => {
    console.log(event.target)
    //send an axios.put req to database and have it return the updated list
  }
  return (
    <div>
      <div>lets do this Culture</div>
      <ExperimentPictures pictureData={data} onClickOfRadio={onClickOfRadio}/>
    </div>
  )
}
export default App;