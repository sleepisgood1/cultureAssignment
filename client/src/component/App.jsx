import React from 'react'
import data from '../exampleData.js'
import ExperimentPictures from './ExperimentPictures.jsx'
const App = () => {
  return (
    <div>
      <div>lets do this Culture</div>
      <ExperimentPictures pictureData={data}/>
    </div>
  )
}
export default App;