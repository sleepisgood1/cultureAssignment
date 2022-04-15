
import React from 'react';

const OnePicCard = (props) => {
  var pictureData = props.pictureData.map((onePicData)=>{
    return <OnePicCard key={onePicData.url} data={onePicData}/>
  })
  return (
    <div>
      <img src={props.data.url} />
      <p></p>
    </div>
  )
}
export default OnePicCard