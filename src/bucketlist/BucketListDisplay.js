import React from 'react';
import {Table, Button} from 'reactstrap';

const BucketListDisplay = (props) => {
    console.log(props)

    const deleteItem = (item) => {
        fetch(`http://localhost:3000/bucketlist/delete/${item.id}`,{
            method: 'DELETE',
            headers: {'Content-Type': 'application/json',
        'Authorization': props.sessionToken}
        }).then(() => props.fetchListItems())
    }

    const bucketListTable = () => {
        return props.listItems.map((item, ind) => {
            return(
                <tr key={ind}>
                    <th scope='row'>{item.park}</th>
                    <td>{item.state}</td>
                    <td>{item.activity}</td>
                    <td>{item.comments}</td>
                    <td><Button onClick={() => {deleteItem(item)}}>Remove From List</Button></td>
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
                    {bucketListTable()}
                </tbody>
            </Table>
        </div>
    )
}

export default BucketListDisplay;