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
import {deleteCategory, updateCategory, getAllCategories, addCategory} from "../actions/categoryAction";

const Categories = ({getAllCategories, categories}) => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState('');
    const [categoriesList, setCategoriesList] = useState([])
    const [show, setShow] = useState(false);
    const [id, setId] = useState('');

    useEffect(() => {
        setCategoriesList(categories)
    }, [categories]);

    useEffect(() => {
        getAllCategories()
    }, [dispatch]);

    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
    } 

    const handleCategoryClick = (e) => {
        e.preventDefault();
        if(category !== ''){
            dispatch(addCategory({name: category}))
        }else{
            console.log('empty')
        }
    } 

    const handleShow = (categ) => {
        setShow(true);
        setCategory(categ);
        setId(categ.id);
        console.log(categ);
    }

    const handleDelete = (id) =>{
        dispatch(deleteCategory(id));
    }

    const handleClose = () => setShow(false);

    const handleNameChange = (e) => {
        setCategory({name: e.target.value})
      }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(updateCategory(id, category))
    } 

    return (
        <div>
            <h1 style={{float: 'left'}}>List Category</h1>
            <Col xs={4}>
            <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Add Category"
                    aria-label="Add Category"
                    aria-describedby="basic-addon2"
                    onChange={handleCategoryChange}/>
                    <Button variant="outline-primary" id="button-addon2" onClick={handleCategoryClick}>
                        Add Category
                    </Button>
                </InputGroup>
            </Col>

            <Table striped bordered hover style={{margin: 15}}>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                {categoriesList.map(categ => {
                    return (
                        <tr key={categ.id}>
                        <td>{categ.id}</td>
                        <th>{categ.name}</th>
                        <th>  
                            <Button variant="warning" onClick={() => handleDelete(categ.id)}>Delete</Button>{' '}
                            <Button variant="primary" onClick={() => handleShow(categ)}>Update</Button>{' '}
                        </th>
                        </tr>
                    )
                })}
                </tbody>
                </Table>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Update Category {category.id}</Modal.Title>
                    </Modal.Header>
                        <Form>
                            <Modal.Body>
                            <Form.Group className="mb-3">
                                <Form.Label>Category Name</Form.Label>
                                <Form.Control type="text" placeholder="Product Name" value={category.name} onChange={handleNameChange} />
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
    categories: state.categoryReducer.categories,
});
  export default connect(mapStateToProps, {getAllCategories})(Categories);