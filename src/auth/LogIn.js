import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody} from 'reactstrap';

const LogIn = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        fetch(`http://localhost:3000/user/login`, {
            method: 'POST',
            body: JSON.stringify( {user: {username:username, password:password}}),
            headers: {'Content-Type': 'application/json'}
        }).then(res => res.json())
        .then(data => {props.updateToken(data.sessionToken)})
        .then(e => {props.logInOff()})
    }

    return(
        <Modal isOpen = {true}>
            <ModalHeader>Log In to Your Account</ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor='username'>Enter Your Username</Label>
                        <Input name='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='password'>Enter Your Password</Label>
                        <Input name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </FormGroup>
                    <Button type='submit'>Log In</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default LogIn;