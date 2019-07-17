import React, {useState, useEffect} from 'react';
import SplashDisplay from './SplashDisplay';
import BucketList from '../bucketlist/BucketList';
import ParkNameSearch from './ParkNameSearch';


const Splash = (props) => {
    const [posts, setPosts] = useState([]);
    const sessionToken = props.sessionToken;
    const parkName = props.parkName;

    const fetchPosts = () => {
        let url = `http://localhost:3000/post/getall`
        console.log(url);
        fetch(url, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).then(res => res.json())
        .then(postData => {setPosts(postData)})
    }

    console.log(posts);

    useEffect(() => {
        fetchPosts();
    },[])

    const savePost = (item) => {
        console.log(item);
        console.log(item.park);
        fetch(`http://localhost:3000/bucketlist/`, {
            method: 'POST',
            body: JSON.stringify({listItem:
            {park: item.park, state: item.state, activity: item.activity, comments: item.comments}}),
            headers: {'Content-Type': 'application/json', 'Authorization': props.sessionToken}
        }).then(res => res.json())
        .then(listItemData => {
            console.log(listItemData);
            // props.fetchListItems();
        })
    }

    return(
        <div>
            {props.bucketListPage ? <BucketList sessionToken={sessionToken} /> : props.searchByPark ? <ParkNameSearch sessionToken={sessionToken} parkName={parkName} savePost={savePost} /> : <SplashDisplay sessionToken={sessionToken} savePost={savePost} posts={posts} />}
        </div>
    )
}

export default Splash;