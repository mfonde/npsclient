import React from 'react';
import {Table, Button} from 'reactstrap';

const ParkNameSearchDisplay = (props) => {

    const parkPostTable = () => {
        return props.parkNamePosts.map((post, ind) => {
            return(
                <tr key={ind}>
                    <th scope='row'>{post.park}</th>
                    <td>{post.state}</td>
                    <td>{post.activity}</td>
                    <td>{post.comments}</td>
                    <td><Button onClick={() => props.savePost(post)}>Save to Bucket List</Button></td>
                </tr>
            )
        })
    }

    console.log(props.parkNamePosts);

    return(
        <div>
            <h3>Bucket List Suggestions For {props.parkName}</h3>
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
                    {parkPostTable()}
                </tbody>
            </Table>
        </div>
    )
}

export default ParkNameSearchDisplay;