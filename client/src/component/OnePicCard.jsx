
import React from 'react';

const OnePicCard = (props) => {
  const [foaming, setFoaming] = (props.data.foaming)
  return (
    <div>
      <img src={props.data.url} />
      <p>{props.data.foaming}</p>
      <form>
        <label>
          <input
            type= "radio"
            name= "foaming-boolean"
            value="not-foaming"
            checked={false}
            onClick={props.onClickOfRadio}
          />
          Not Foaming
        </label>
        <label>
          <input
            type= "radio"
            name= "null-boolean"
            value="null"
            checked={true}
          />
          Nothing Checked
        </label>
        <label>
          <input
            type= "radio"
            name= "foaming-boolean"
            value="foaming"
            checked={false}
          />
          Foaming
        </label>

      </form>
    </div>
  )
}
export default OnePicCard