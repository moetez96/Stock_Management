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

const ListItems = ({getAllItems, items, getAllCategories, categories}) => {
    const dispatch = useDispatch();
    const [itemsList, setItemsList] = useState(items)
    const [show, setShow] = useState(false);
    const [item, setItem] = useState({name: '', description: '', category: '', price: '', currentStock: ''});
    const [id, setId] = useState('');
    const [sort, setSort] = useState('default');
    const [search, setSearch] = useState('');
    console.log(categories)
    useEffect(() => {
        setItemsList(items)
    }, [items]);

    useEffect(() => {
        getAllCategories()
    }, [dispatch]);

    useEffect(() => {
        getAllItems();
    }, [dispatch]);
    
    const handleClose = () => setShow(false);
    const handleShow = (item) => {
        setShow(true);
        setItem(item);
        setId(item.id);
        console.log(item);
    }
    const handleDelete = (id) =>{
        dispatch(deleteItems(id));
    }

    const handleNameChange = (e) => {
        setItem({name: e.target.value, description: item.description, category: item.category, price: item.price, currentStock: item.currentStock})
      }
      
      const handleDescriptionChange = (e) => {
        setItem({name: item.name, description: e.target.value, category: item.category, price: item.price, currentStock: item.currentStock})
      }
    
      const handleCategoryChange = (e) => {
        setItem({name: item.name, description: item.description, category: e.target.value, price: item.price, currentStock: item.currentStock})
      }
    
      const handlePriceChange = (e) => {
        setItem({name: item.name, description: item.description, category: item.category, price: e.target.value, currentStock: item.currentStock})
      }
    
      const handleQuantityChange = (e) => {
        setItem({name: item.name, description: item.description, category: item.category, price: item.price, currentStock: e.target.value})
      }
      
      const handleOnSubmit = (e) => {
          e.preventDefault();
          console.log(item);
          console.log(id)
          dispatch(updateItems(id, item));
          setShow(false);
          
      } 
      
      const handleSearchChange = (e) => {
        setSearch(e.target.value)
      } 

      const handleSearchClick = (e) => {
        e.preventDefault();
        if(search != ''){
            setItemsList(items.filter(item => item.name.includes(search) || item.description.includes(search)))
        }else{
            setItemsList(items)
        }
      } 

      const handleClick = (id) => {
        console.log(id);
        if(id === 0 ){
            setItemsList(items)
        }else{
            setItemsList(items.filter(item => item.category == id))
        }
      }

      const handleSort = () => {
        if(sort === 'default'){
            setSort('asc')
            setItemsList(items.sort((a, b) => b.price - a.price));
            console.log(itemsList);
        }

        if(sort === 'asc'){
            setSort('desc')
            setItemsList(items.sort((a, b) => a.price - b.price));
            console.log(itemsList);
        }

        if(sort === 'desc'){
            setSort('default')
            setItemsList(items)
            console.log(itemsList);
        }

    } 
    
    const categoryName = (id) => {
        const objet = categories.find(categ => categ.id == id)
        console.log(objet)
        return objet.name
    }

    return (
        <div>
            <h1 style={{float: 'left'}}>Item Products</h1>
            <Row>
                <Col>
                    <Dropdown className="d-inline mx-2">

                        <Dropdown.Toggle id="dropdown-autoclose-true">
                            Filter by Category
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleClick(0)}>All</Dropdown.Item>            
                            {categories.map(categ => (  
                                <Dropdown.Item key={categ.id} onClick={() => handleClick(categ.id)}>{categ.name}</Dropdown.Item>            
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    </Col>
                <Col>
                    <Button variant="primary" onClick={handleSort}>Sort By Price</Button>{' '}
                </Col>
                <Col>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    onChange={handleSearchChange}/>
                    <Button variant="outline-primary" id="button-addon2" onClick={handleSearchClick}>
                        Search
                    </Button>
                </InputGroup>
                </Col>
            </Row>
            

            <Table striped bordered hover style={{margin: 15}}>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Price (unite)</th>
                    <th>currentStock</th>
                    <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                {itemsList.map(item => {
                    return (
                        <tr>
                        <td>{item.id}</td>
                        <th>{item.name}</th>
                        <th>{item.description}</th>
                        <th>{categoryName(item.category)}</th>
                        <th>{item.price}</th>
                        <th>{item.currentStock}</th>
                        <th>  
                            <Button variant="warning" onClick={() => handleDelete(item.id)}>Delete</Button>{' '}
                            <Button variant="primary" onClick={() => handleShow(item)}>Update</Button>{' '}
                        </th>
                        </tr>
                    )
                })}
                </tbody>
                </Table>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Update Item {item.id}</Modal.Title>
                    </Modal.Header>
                    <Form>
                        <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Product Name" value={item.name} onChange={handleNameChange} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label>Product Description</Form.Label>
                            <Form.Control type="text" placeholder="Product Description" value={item.description} onChange={handleDescriptionChange} />
                            </Form.Group>

                            <Form.Label>Product Category</Form.Label>
                            <Form.Select aria-label="Floating label select example" value={item.category} onChange={handleCategoryChange} >
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </Form.Select>
                            
                            <Form.Group className="mb-3">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control type="number" placeholder="Product Price" value={item.price} onChange={handlePriceChange} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label>Product Quantity</Form.Label>
                            <Form.Control type="number" placeholder="Product Quantity" value={item.currentStock} onChange={handleQuantityChange}  />
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
    items: state.itemReducer.items,
    categories: state.categoryReducer.categories,
});
  export default connect(mapStateToProps, {getAllItems, getAllCategories})(ListItems);