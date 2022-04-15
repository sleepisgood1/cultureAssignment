import React from 'react';
import OnePicCard from './OnePicCard.jsx';

const ExperimentPictures = (props) => {
  var pictureData = props.pictureData.map((onePicData)=>{
    return <OnePicCard key={onePicData.url} data={onePicData} onClickOfRadio={props.onClickOfRadio}/>
  })
  return (
    <div>{pictureData}</div>
  )
}
export default ExperimentPictures;