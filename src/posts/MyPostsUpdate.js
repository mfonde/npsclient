import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button} from 'reactstrap';


const MyPostsUpdate = (props) => {
    const [editParkName, setEditParkName] = useState('');
    const [editUsState, setEditUsState] = useState('');
    const [editActivity, setEditActivity] = useState('');
    const [editComments, setEditComments] = useState('');

    const updatePost = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/post/update/${props.postToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({post:
            {park: editParkName, state: editUsState, activity: editActivity, comments: editComments}}),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : props.sessionToken
            }
        }).then(res => res.json())
        .then(postData => {
            console.log(postData);
            props.editPostPageOff();
            props.fetchMyPosts();
        })
    }

    return(
        <Modal isOpen={true}>
            <ModalHeader>Edit Post</ModalHeader>
            <ModalBody>
                <Form onSubmit={updatePost}>
                    <FormGroup>
                        <Label htmlFor='editParkName' />
                        <Input name='editParkName' value={editParkName} type='select' onChange={(e) => setEditParkName(e.target.value)}>
                            <option value=''>Select Park</option>
                            <option value='Acadia'>Acadia</option>
                            <option value='Yosemite'>Yosemite</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='editUsState' />
                        <Input name='editUsState' value={editUsState} onChange={(e) => setEditUsState(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='editActivity' />
                        <Input name='editActivity' value={editActivity} onChange={(e) => setEditActivity(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='editComments' />
                        <Input name='editComments' value={editComments} onChange={(e) => setEditComments(e.target.value)} />
                    </FormGroup>
                    <Button type='submit'>Save Updates</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default MyPostsUpdate;