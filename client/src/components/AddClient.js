import React , { useState, useEffect }from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useDispatch, useSelector, connect} from "react-redux";
import {addItems} from "../actions/itemAction";
import { useHistory } from "react-router-dom";
import {addClient} from "../actions/clientAction";

const AddClient = ({addClient}) => {

  const error_add_item = useSelector(state => state.itemReducer.error_add_item);
  const dispatch = useDispatch();
  const history = useHistory();
  
  console.log(error_add_item);

  const [name, setName] = useState('');
  const [firstname, setFirstname] = useState('');
  const [dateReg, setdateReg] = useState('');
  const [card, setCard] = useState('');
  const [tel, setTel] = useState('');

  

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  
  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  }

  const handleDateChange = (e) => {
    setdateReg(e.target.value);
  }

  const handleCardChange = (e) => {
    setCard(e.target.value);
  }

  const handleTelChange = (e) => {
    setTel(e.target.value);
  }
  
  const handleOnSubmit = (e) => {
      e.preventDefault();
      const data = {
        name,
        firstname,
        dateReg,
        tel,
        card
      };
      addClient(data).then(() => {
        history.push('/list_clients');
    })
  } 

    return (
      <div style={{marginLeft: 420}}>
          
        <Card style={{ width: '350px' }}>
          <Card.Body>
            <Card.Title>Add Client</Card.Title>
            <Form>
                        <Form.Group className="mb-3">
                            <Form.Label> Name</Form.Label>
                            <Form.Control type="text" placeholder="Name"  onChange={handleNameChange} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label> Firstname</Form.Label>
                            <Form.Control type="text" placeholder="Firstname"  onChange={handleFirstnameChange} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label> Date Registration</Form.Label>
                            <Form.Control type="text" placeholder="Date Registration"  onChange={handleDateChange} />
                            </Form.Group>
                            
                            <Form.Group className="mb-3">
                            <Form.Label> Tel</Form.Label>
                            <Form.Control type="number" placeholder="Tel"  onChange={handleTelChange} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label>Card</Form.Label>
                            <Form.Control type="number" placeholder="Card"  onChange={handleCardChange}  />
                        </Form.Group>
                        
                       
                        <Button variant="primary" onClick={handleOnSubmit}>
                            Save Changes
                        </Button>
                        
                    </Form>
          </Card.Body>
        </Card>
      </div>
        );

    }
const mapStateToProps = (state) => ({
   
  });
export default connect(mapStateToProps, {addClient})(AddClient); 