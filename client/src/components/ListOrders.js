import React, {useEffect, useState } from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {getAllItems} from "../actions/itemAction";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {deleteOrder, updateOrder,getAllOrders} from "../actions/orderAction";
import {getAllCategories} from "../actions/categoryAction";
import {getAllClients} from "../actions/clientAction";


const ListOrders = ({getAllOrders, items ,orders, getAllClients, clients,getAllItems}) => {
    const dispatch = useDispatch();
    const [ordersList, setOrdersList] = useState(orders)
    const [show, setShow] = useState(false);
    const [order, setOrder] = useState({dateMvt: '', quantite: '', typeOrder: '', item: '', client: ''});
    const [id, setId] = useState('');
    
    useEffect(() => {
        setOrdersList(orders)
    }, [orders]);

    useEffect(() => {
        getAllClients()
    }, [dispatch]);

    useEffect(() => {
        getAllItems();
    }, [dispatch]);

    useEffect(() => {
        getAllOrders();
    }, [dispatch]);
    
    const handleClose = () => setShow(false);
    const handleShow = (order) => {
        setShow(true);
        setOrder(order);
        setId(order.id);
        console.log(order);
    }
    const handleDelete = (id) =>{
        dispatch(deleteOrder(id));
    }

    const handleDateChange = (e) => {
        setOrder({dateMvt: e.target.value, quantite: order.quantite, typeOrder: order.typeOrder, item: order.item, client: order.client})
      }
      
      const handleQteChange = (e) => {
        setOrder({dateMvt: order.dateMvt, quantite: e.target.value, typeOrder: order.typeOrder, item: order.item, client: order.client})
      }
    
      const handleTypeChange = (e) => {
        setOrder({dateMvt: order.dateMvt, quantite: order.quantite, typeOrder: e.target.value, item: order.item, client: order.client})
      }
    
      const handleClientChange = (e) => {
        setOrder({dateMvt: order.dateMvt, quantite: order.quantite, typeOrder: order.typeOrder, item: order.item, client: e.target.value})
      }
    
      const handleProductChange = (e) => {
        setOrder({dateMvt: order.dateMvt, quantite: order.quantite, typeOrder: order.typeOrder, item: e.target.value, client: order.client})
      }
      
      const handleOnSubmit = (e) => {
          e.preventDefault();
          console.log(order);
          console.log(id)
          dispatch(updateOrder(id, order));
          setShow(false);
          
      } 
      
       
    
    const clientName = (id) => {
        const objet = clients.find(client => client.id == id)
        console.log(objet)
        return objet.name +" "+ objet.firstname
    }

    const montant = (id,qte) => {
        const objet = items.find(item => item.id == id)
        
        return parseInt(objet.price) * qte
    }

    const itemName = (id) => {
        const objet = items.find(item => item.id == id)
        console.log(objet)
        return objet.name
    }

    return (
        <div>
             <h1 style={{float: 'left'}}> Orders</h1>
            <Table striped bordered hover style={{margin: 15}}>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Client</th>
                    <th>Product</th>   
                    <th>quantite</th>
                    <th>date Mvt</th>
                    <th>Type Order</th>
                    <th>Montant</th>
                    </tr>
                </thead>
                <tbody>
                {ordersList.map(order => {
                    return (
                        <tr>
                        <td>{order.id}</td> 
                        <th>{clientName(order.client)}</th>
                        <th>{itemName(order.item)}</th>
                        <th>{order.quantite}</th>
                        <th>{order.dateMvt}</th>
                        <th>{order.typeOrder}</th>
                        <th>{montant(order.item,order.quantite)} DNT</th>
                        <th>  
                            <Button variant="warning" onClick={() => handleDelete(order.id)}>Delete</Button>{' '}
                            <Button variant="primary" onClick={() => handleShow(order)}>Update</Button>{' '}
                        </th>
                        </tr>
                    )
                })}
                </tbody>
                </Table>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Update Order {order.id}</Modal.Title>
                    </Modal.Header>
                    <Form>
                        <Modal.Body>
                           <Form.Group className="mb-3">
                            <Form.Label>Order Date</Form.Label>
                            <Form.Control type="text" placeholder="Order Date" value={order.dateMvt} onChange={handleDateChange} />
                            </Form.Group>
                            

                            <Form.Group className="mb-3">
                            <Form.Label>QTE</Form.Label>
                            <Form.Control type="number" placeholder="QTE" value={order.quantite} onChange={handleQteChange} />
                            </Form.Group>

                            <Form.Label>Order Type</Form.Label>
                            <Form.Select aria-label="Floating label select Order Type" value={order.typeOrder} onChange={handleTypeChange} >
                            <option value="ACHAT">Achat</option>
                            <option value="VENTE">Vente</option>
                           
                            </Form.Select>
                           
                            <Form.Label>client</Form.Label>
                               <Form.Select aria-label="Floating label select example" onChange={handleClientChange} >
                               <option value='0'>Select Client</option>
                               {clients.map(client => (                
                                 <option key={client.id} value={client.id}>{client.name}</option>
                                ))}
                            </Form.Select>
                            
                            <Form.Label>Product</Form.Label>
                               <Form.Select aria-label="Floating label select example" onChange={handleProductChange} >
                               <option value='0'>Select Client</option>
                               {items.map(item => (                
                                 <option key={item.id} value={item.id}>{item.name}</option>
                                ))}
                            </Form.Select>
                        
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
    orders: state.orderReducer.orders,
    clients: state.clientReducer.clients,
    items: state.itemReducer.items,
});
  export default connect(mapStateToProps, {getAllItems, getAllCategories,getAllClients,getAllOrders})(ListOrders);