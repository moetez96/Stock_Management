import React , { useState }from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useDispatch, useSelector} from "react-redux";
import {addItems} from "../actions/itemAction";
import { useHistory } from "react-router-dom";

const AddItems = () => {

  const error_add_item = useSelector(state => state.itemReducer.error_add_item);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(error_add_item)
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const handlePriceChange = (e) => {
    setPrice(e.target.value)
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value)
  }
  
  const handleOnSubmit = (e) => {
      e.preventDefault();
      const data = {
        name,
        description,
        category,
        price,
        quantity
      }
      dispatch(addItems(data)).then(() => {
        history.push('/list_items')
    })
  } 

    return (
      <div style={{marginLeft: 420}}>
        <Card style={{ width: '350px' }}>
        <Card.Body>
          <Card.Title>Add Product</Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" placeholder="Product Name" onChange={handleNameChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Product Description</Form.Label>
              <Form.Control type="text" placeholder="Product Description" onChange={handleDescriptionChange} />
            </Form.Group>

            <Form.Label>Product Category</Form.Label>
            <Form.Select aria-label="Floating label select example" onChange={handleCategoryChange} >
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            
            <Form.Group className="mb-3">
              <Form.Label>Product Price</Form.Label>
              <Form.Control type="number" placeholder="Product Price" onChange={handlePriceChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Product Quantity</Form.Label>
              <Form.Control type="number" placeholder="Product Quantity" onChange={handleQuantityChange}  />
            </Form.Group>

            <Button variant="primary" onClick={handleOnSubmit}>
              Add
            </Button>
          </Form>
        </Card.Body>
        </Card>
      </div>
        );

    }

export default AddItems; 