import React, {useEffect, useState} from 'react';
import ParkNameSearchDisplay from './ParkNameSearchDisplay';

const ParkNameSearch = (props) => {
    const [parkNamePosts, setParkNamePosts] = useState([]);
    let savePost = props.savePost;

    const fetchPostsByParkName = () => {
        let url= `http://localhost:3000/post/parkname/${props.parkName}`;
        console.log(url);
    fetch(url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json',
    'Authorization': props.sessionToken}
    })
    .then(res => res.json())
    .then(postData => setParkNamePosts(postData))
}


console.log(parkNamePosts);

console.log(props.parkName)
useEffect(() => {
    fetchPostsByParkName();
},[])

return(
    <div>
        <ParkNameSearchDisplay savePost={savePost} fetchPostsByParkName={fetchPostsByParkName} parkName={props.parkName} parkNamePosts={parkNamePosts} />
    </div>
)

}

export default ParkNameSearch;