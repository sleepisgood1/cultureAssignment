import React from 'react';

const ExperimentPictures = (props) => {
  var pictureData = props.pictureData.map((onePicData)=>{
    return <OnePicCard key={onePicData.url} data={onePicData}/>
  })
  return (
    <div>{pictureData}</div>
  )
}
export default ExperimentPictures;