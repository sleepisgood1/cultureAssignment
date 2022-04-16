import React from 'react';
import OnePicCard from './OnePicCard.jsx';
import { CardDeck} from 'reactstrap'

const ExperimentPictures = (props) => {
  var pictureData = props.pictureData.map((onePicData)=>{
    return <OnePicCard key={onePicData.url} data={onePicData} onSubmitOfForm={props.onSubmitOfForm}/>
  })
  return (
    <div
    style={{
      "display": 'flex',
      "flexDirection": "row",
      "flexWrap": "wrap"
    }}>{pictureData}</div>

  )
}
export default ExperimentPictures;