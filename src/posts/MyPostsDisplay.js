import React from 'react';
import {Table, Button} from 'reactstrap';

const MyPostsDisplay = (props) => {

    const deletePost = (post) => {
        fetch(`http://localhost:3000/post/delete/${post.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json',
        'Authorization': props.sessionToken}
        }).then(() => props.fetchMyPosts())
    }

    const myPostsTable = () => {
        return props.myPosts.map((post, ind) => {
            return(
                <tr key={ind}>
                    <th scope='row'>{post.park}</th>
                    <td>{post.state}</td>
                    <td>{post.activity}</td>
                    <td>{post.comments}</td>
                    <td><Button onClick={() => {props.editPost(post); props.editPostPageOn()}}>Edit Post</Button></td>
                    <td><Button onClick={() => {deletePost(post)}}>Delete Post</Button></td>
                </tr>
            )
        })
    }

    return(
        <div>
            <hr/>
            <Table striped>
                <thead>
                    <tr>
                        <th>Park</th>
                        <th>State</th>
                        <th>Activity</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {myPostsTable()}
                </tbody>
            </Table>
        </div>
    )
}

export default MyPostsDisplay;