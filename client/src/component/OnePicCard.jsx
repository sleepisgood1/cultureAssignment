
import React, {useState, useEffect} from 'react';
import {ModalDialog, Modal, Card, Button} from "react-bootstrap"

const OnePicCard = (props) => {
  if (props.data.foaming ===null) {
    props.data.foaming = "null"
  }
  const [foaming, setFoaming] = useState(props.data.foaming)
  const [show, setShow] = useState(false)
  const onClickOfRadio = (event) => {
    // console.log(event.target)
    setFoaming(JSON.parse(event.target.value))
    //send an axios.put req to database and have it return the updated list
  };
  const handleClose = ()=>{
    setShow(false)
  };
  const handleOpen = ()=>{
    setShow(true)
  };

  return (
    <Card style={{
      "borderStyle": "solid",
      "display": "flex",
      "maxWidth": "33%",
    }}>
      <Card.Img variant="top"
      src={props.data.url}
      onClick={handleOpen}
      />
      <Modal
      show={show}
      onHide={handleClose}
      size={"xl"}
      >
        <ModalDialog
        size={"xl"}
        >

        <Modal.Body
        size={"xl"}
        >
          <img src={props.data.url} onClick={handleClose}/>
        </Modal.Body>
        </ModalDialog>

      </Modal>
      <Card.Body>
      <Card.Text>Original: {props.data.foaming === true ? "Foaming" : (props.data.foaming === false ? "Not Foaming" : "Nothing Selected")}</Card.Text>
      <Card.Text>New Value: {foaming === true ? "Foaming" : (foaming === false ? "Not Foaming" : "Nothing Selected")}</Card.Text>
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
      </Card.Body>
    </Card>

  )
}
export default OnePicCard