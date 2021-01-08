import React from 'react';
import './userForm.css';
import {Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function UserForm({setShowUserFormPopup, handleChange, handleSubmit}) {
    return (
        <div className = "userForm__Container">
            <div className = "formHeading__section">
                <h2>Please Fill The Form</h2>
                <div className = "closeFormMark__section" onClick = {() => setShowUserFormPopup(false)}>X</div>
            </div>
            <Form>
                <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Your Name" 
                        name = "name" 
                        onChange = {(e) => handleChange(e)}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        name = "email"
                        onChange = {(e) => handleChange(e)}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control 
                        type="number"
                        placeholder="Enter Your Phone Number" 
                        name = "phone"
                        onChange = {(e) => handleChange(e)}/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I'm Not a Robot" />
                </Form.Group>
                <div className = "submitButton__section">
                    <Button variant="primary" type="submit" onClick = {handleSubmit}>
                        Submit
                    </Button>
                </div>
                </Form>
        </div>
    )
}

export default UserForm
