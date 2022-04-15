import React from 'react';
import OnePicCard from './OnePicCard.jsx';

const ExperimentPictures = (props) => {
  var pictureData = props.pictureData.map((onePicData)=>{
    return <OnePicCard key={onePicData.url} data={onePicData} onSubmitOfForm={props.onSubmitOfForm}/>
  })
  return (
    <div>{pictureData}</div>
  )
}
export default ExperimentPictures;