import React, {useState, useEffect} from 'react';
import BucketListDisplay from './BucketListDisplay';

const BucketList = (props) => {
    const [listItems, setListItems] = useState([]);

    const fetchListItems = () => {
        fetch(`http://localhost:3000/bucketlist/getall`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json',
        'Authorization': props.sessionToken}
        }).then(res => res.json())
        .then(items => {setListItems(items)})
    }

    useEffect(() => {
        fetchListItems();
    }, [])

    console.log(listItems);

    return(
        <div>
            <h3>My Bucket List</h3>
            <BucketListDisplay sessionToken={props.sessionToken} fetchListItems={fetchListItems} listItems={listItems} />
        </div>
    )
}

export default BucketList;