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
import {deleteItems} from "../actions/itemAction";

const ListItems = ({getAllItems}) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.itemReducer.items)
    console.log(items);
    useEffect(() => {
        getAllItems()
    }, [dispatch]);
    
    const handleDelete = (id) =>{
        dispatch(deleteItems(id));
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
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Col>
                <Col>
                    <Button variant="primary">Sort By Price</Button>{' '}
                </Col>
                <Col>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-primary" id="button-addon2">
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
                {items.map(item => {
                    return (
                        <tr>
                        <td>{item.id}</td>
                        <th>{item.name}</th>
                        <th>{item.description}</th>
                        <th>{item.category}</th>
                        <th>{item.price}</th>
                        <th>{item.currentStock}</th>
                        <th>  
                            <Button variant="warning" onClick={() => handleDelete(item.id)}>Delete</Button>{' '}
                            <Button variant="primary">Update</Button>{' '}
                            <Button variant="secondary">Refill Stock</Button>{' '}
                        </th>
                        </tr>
                    )
                })}
                </tbody>
                </Table>
        </div>
            );
    };

  const mapStateToProps = (state) => ({
    items: state.items,
});
  export default connect(mapStateToProps, {getAllItems})(ListItems);