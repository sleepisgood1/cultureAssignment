
import React, {useState, useEffect} from 'react';

const OnePicCard = (props) => {
  if (props.data.foaming ===null) {
    props.data.foaming = "null"
  }
  const [foaming, setFoaming] = useState(props.data.foaming)
  const onClickOfRadio = (event) => {
    // console.log(event.target)
    setFoaming(JSON.parse(event.target.value))
    //send an axios.put req to database and have it return the updated list
  };

  return (
    <div>
      <img src={props.data.url} />
      <p>Original: {props.data.foaming === true ? "Foaming" : (props.data.foaming === false ? "Not Foaming" : "Nothing Selected")} New Value: {foaming === true ? "Foaming" : (foaming === false ? "Not Foaming" : "Nothing Selected")}</p>
      <form onSubmit={(event)=>{
        event.preventDefault()
        props.onSubmitOfForm(props.data.id, foaming)
        }}>
        <label>
          <input
            type= "radio"
            name= "foaming-boolean"
            value="false"
            checked={foaming===false}
            onChange={()=>{}}
            onClick={onClickOfRadio}
          />
          Not Foaming
        </label>
        <label>
          <input
            type= "radio"
            name= "null-boolean"
            value="null"
            checked={foaming===null}
            onChange={()=>{}}
            onClick={onClickOfRadio}
          />
          Nothing Checked
        </label>
        <label>
          <input
            type= "radio"
            name= "foaming-boolean"
            value="true"
            checked={foaming===true}
            onChange={()=>{}}
            onClick={onClickOfRadio}
          />
          Foaming
        </label>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}
export default OnePicCard