import React from 'react';
import {Table, Button} from 'reactstrap';

const SplashDisplay = (props) => {

    

    const postTable = () => {
        return props.posts.map((post, ind) => {
            return(
                <tr key={ind}>
                    <th scope='row'>{post.park}</th>
                    <td>{post.state}</td>
                    <td>{post.activity}</td>
                    <td>{post.comments}</td>
                    {props.sessionToken ? <td><Button onClick={() => {props.savePost(post)}}>Save To Bucket List</Button></td> : <></>}
                </tr>
            )
        })
    }

    return(
        <div>
            <h3>Bucket List Suggestions</h3>
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
                    {postTable()}
                </tbody>
            </Table>
        </div>
    )
}

export default SplashDisplay;