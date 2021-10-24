import React, {useEffect, useState } from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {getAllItems} from "../actions/itemAction";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {deleteItems, updateItems} from "../actions/itemAction";
import {getAllCategories} from "../actions/categoryAction";
import { updateClient,deleteClient,getAllClients } from "../actions/clientAction";

const ListClients = ({getAllItems,deleteClient,updateClient, clients, getAllClients, categories}) => {
    const dispatch = useDispatch();
    const [clientsList, setClientsList] = useState(clients)
    const [show, setShow] = useState(false);
    const [client, setClient] = useState({firstname: '', name: '', dateReg: '', tel: '', card: ''});
    const [id, setId] = useState('');
    
    console.log(categories)
    useEffect(() => {
        setClientsList(clients)
    }, [clients]);

    useEffect(() => {
        getAllClients();
    }, [dispatch]);
    
    const handleClose = () => setShow(false);
    const handleShow = (client) => {
        setShow(true);
        setClient(client);
        setId(client.id);
        console.log(client);
    }
    const handleDelete = (id) =>{
        deleteClient(id);
    }

    const handleNameChange = (e) => {
        setClient({firstname: client.firstname, name: e.target.value, dateReg: client.dateReg, tel: client.tel, card: client.card})
      }
      
      const handleFirstnameChange = (e) => {
        setClient({firstname: e.target.value, name: client.name, dateReg: client.dateReg, tel: client.tel, card: client.card})
      }
    
      const handleDateChange = (e) => {
        setClient({firstname: client.firstname, name: client.name, dateReg: e.target.value, tel: client.tel, card: client.card})
      }
    
      const handleTelChange = (e) => {
        setClient({firstname: client.firstname, name: client.name, dateReg: client.dateReg, tel: e.target.value, card: client.card})
      }
    
      const handleCardChange = (e) => {
        setClient({firstname: client.firstname, name: client.name, dateReg: client.dateReg, tel: client.tel, card: e.target.value})
      }
      
      const handleOnSubmit = (e) => {
          e.preventDefault();
          console.log(client);
          console.log(id)
          updateClient(id, client);
          setShow(false);
          
      } 
      
      

      
      

    return (
        <div>
            <h1 style={{float: 'left'}}> Clients</h1>
            
            

            <Table striped bordered hover style={{margin: 15}}>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>First Name</th>
                    <th>Date Registration</th>
                    <th>Tel</th>
                    <th>Card</th>
                    </tr>
                </thead>
                <tbody>
                {clientsList.map(client => {
                    return (
                        <tr>
                        <td>{client.id}</td>
                        <th>{client.name}</th>
                        <th>{client.firstname}</th>
                        <th>{client.dateReg}</th>
                        <th>{client.tel}</th>
                        <th>{client.card}</th>
                        <th>  
                            <Button variant="warning" onClick={() => handleDelete(client.id)}>Delete</Button>{' '}
                            <Button variant="primary" onClick={() => handleShow(client)}>Update</Button>{' '}
                        </th>
                        </tr>
                    )
                })}
                </tbody>
                </Table>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Update client {client.id}</Modal.Title>
                    </Modal.Header>
                    <Form>
                        <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label> Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" value={client.name} onChange={handleNameChange} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label> Firstname</Form.Label>
                            <Form.Control type="text" placeholder="Firstname" value={client.firstname} onChange={handleFirstnameChange} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label> Date Registration</Form.Label>
                            <Form.Control type="text" placeholder="Date Registration" value={client.dateReg} onChange={handleDateChange} />
                            </Form.Group>
                            
                            <Form.Group className="mb-3">
                            <Form.Label> Tel</Form.Label>
                            <Form.Control type="number" placeholder="Tel" value={client.tel} onChange={handleTelChange} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label>Card</Form.Label>
                            <Form.Control type="number" placeholder="Card" value={client.card} onChange={handleCardChange}  />
                        </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleOnSubmit}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
        </div>
            );
    };

  const mapStateToProps = (state) => ({
    
    clients: state.clientReducer.clients,
});
  export default connect(mapStateToProps, {getAllItems, getAllCategories,deleteClient,getAllClients,updateClient})(ListClients);