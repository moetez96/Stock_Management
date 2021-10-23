import React , { useState, useEffect }from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useDispatch, useSelector, connect} from "react-redux";
import {addItems} from "../actions/itemAction";
import { useHistory } from "react-router-dom";
import {getAllCategories} from "../actions/categoryAction";

const AddItems = ({getAllCategories, categories}) => {

  const error_add_item = useSelector(state => state.itemReducer.error_add_item);
  const dispatch = useDispatch();
  const history = useHistory();
  
  console.log(error_add_item);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [currentStock, setCurrentStock] = useState('');

  useEffect(() => {
    getAllCategories()
  }, [dispatch]);

  console.log(categories)

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  }

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  }

  const handleCurrentStockChange = (e) => {
    setCurrentStock(e.target.value);
  }
  
  const handleOnSubmit = (e) => {
      e.preventDefault();
      const data = {
        name,
        description,
        category,
        price,
        currentStock
      };
      dispatch(addItems(data)).then(() => {
        history.push('/list_items');
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
                <option value='0'>Select Category</option>
                {categories.map(categ => (                
                  <option key={categ.id} value={categ.id}>{categ.name}</option>
                ))}
              </Form.Select>
              
              <Form.Group className="mb-3">
                <Form.Label>Product Price</Form.Label>
                <Form.Control type="number" placeholder="Product Price" onChange={handlePriceChange} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Product Quantity</Form.Label>
                <Form.Control type="number" placeholder="Product Quantity" onChange={handleCurrentStockChange}  />
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
const mapStateToProps = (state) => ({
      categories: state.categoryReducer.categories,
  });
export default connect(mapStateToProps, {getAllCategories})(AddItems); 