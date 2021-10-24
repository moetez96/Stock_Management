import React , { useState, useEffect }from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useDispatch, useSelector, connect} from "react-redux";
import {addItems,updateItems} from "../actions/itemAction";
import { useHistory } from "react-router-dom";
import {getAllClients} from "../actions/clientAction";
import {getAllItems} from "../actions/itemAction";
import {getAllOrders,addOrder} from "../actions/orderAction";

const AddOrders = ({getAllClients , getAllItems,getAllOrders ,addOrder, clients ,items,updateItems}) => {

  const error_add_item = useSelector(state => state.itemReducer.error_add_item);
  const dispatch = useDispatch();
  const history = useHistory();
  
  console.log(error_add_item);

  const [dateMvt, setdateMvt] = useState('');
  const [quantite, setQuantite] = useState('');
  const [typeOrder, setTypeOrder] = useState('');
  const [item, setItem] = useState();
  const [client, setClient] = useState('');

  useEffect(() => {
    getAllClients()
}, [dispatch]);

useEffect(() => {
    getAllItems();
}, [dispatch]);

useEffect(() => {
    getAllOrders();
}, [dispatch]);

  

  const handleDateChange = (e) => {
    setdateMvt(e.target.value);
  }
  
  const handleQteChange = (e) => {
    setQuantite(e.target.value);
  }

  const handleTypeChange = (e) => {
    setTypeOrder(e.target.value);
  }

  const handleClientChange = (e) => {
    setClient(e.target.value);
    console.log("kddd",client)
  }

  const handleProductChange = (e) => {
    setItem(e.target.value);
    console.log("it",item)
  }
  
  const handleOnSubmit = (e) => {

      e.preventDefault();
      
       let objet = items.find(it => it.id == item )
      console.log("obj",items)
      console.log("loula",item)
      console.log("aaa",objet)
      const data = {
        dateMvt , 
        quantite ,
         typeOrder , 
         item ,
         client
      };
      if (objet.currentStock > quantite){
        if (typeOrder ==="ACHAT"){
        objet.currentStock = parseInt(objet.currentStock) - parseInt(quantite);}
        else{
        objet.currentStock = parseInt(objet.currentStock) - parseInt(quantite);
        }
      console.log ("ahawa"+objet)
      
      addOrder(data).then(() => updateItems(item ,objet))
     
    }
  } 

    return (
      <div style={{marginLeft: 420}}>
        <Card style={{ width: '350px' }}>
          <Card.Body>
            <Card.Title>Add Order</Card.Title>
            <Form>
            
                           <Form.Group className="mb-3">
                            <Form.Label>Order Date</Form.Label>
                            <Form.Control type="text" placeholder="Order Date"  onChange={handleDateChange} />
                            </Form.Group>
                            

                            <Form.Group className="mb-3">
                            <Form.Label>QTE</Form.Label>
                            <Form.Control type="text" placeholder="QTE"   onChange={handleQteChange} />
                            </Form.Group>

                            <Form.Label>Order Type</Form.Label>
                            <Form.Select aria-label="Floating label select Order Type"  onChange={handleTypeChange} >
                            <option value="ACHAT">Achat</option>
                            <option value="VENTE">Vente</option>
                           
                            </Form.Select>
                           
                            <Form.Label>client</Form.Label>
                               <Form.Select aria-label="Floating label select example" onChange={handleClientChange} >
                               <option value= '0' >Select Client</option>
                               {clients.map(client => (                
                                 <option key={client.id} value={client.id}>{client.name}</option>
                                 
                                ))}
                            </Form.Select>
                            
                            <Form.Label>Product</Form.Label>
                               <Form.Select aria-label="Floating label select example" onChange={handleProductChange} >
                               <option value='0'>Select Product</option>
                               {items.map(item => (                
                                 <option key={item.id} value={item.id}>{item.name}</option>
                                ))}
                            </Form.Select>
                        
                        
                            <Button variant="primary" onClick={handleOnSubmit}>
                Add
              </Button>
                        
                    </Form>
            
          </Card.Body>
        </Card>
      </div>
        );

    }
const mapStateToProps = (state) => ({
    orders: state.orderReducer.orders,
    clients: state.clientReducer.clients,
    items: state.itemReducer.items,
  });
export default connect(mapStateToProps, {getAllClients , getAllItems,getAllOrders,addOrder ,updateItems})(AddOrders); 