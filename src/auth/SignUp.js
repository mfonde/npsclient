import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody} from 'reactstrap';

const SignUp = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        // if(password.length < 5){
        //     console.log('PASSWORD IS TOO SHORT')
        // } else {
        fetch(`http://localhost:3000/user/create`, {
            method: 'POST',
            body: JSON.stringify( {user: {username:username, password:password}}),
            headers: new Headers({'Content-Type': 'application/json'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            props.updateToken(data.sessionToken)
        })
        .then(e => {props.signUpOff()})
        .catch(err => console.log({error: err}))
    // }
    }

    return(
        <Modal isOpen = {true}>
            <ModalHeader>Create an Account</ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor='username'>Create A Unique Username</Label>
                        <Input name='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='password'>Create a Password</Label>
                        <Input name='password' minLength='5' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </FormGroup>
                    <Button type='submit'>Create User</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default SignUp;