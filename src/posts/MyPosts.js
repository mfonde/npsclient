import React, {useState, useEffect} from 'react';
import {Button} from 'reactstrap';
import MyPostsDisplay from './MyPostsDisplay';
import MyPostsCreate from './MyPostsCreate';
import MyPostsUpdate from './MyPostsUpdate';

const MyPosts = (props) => {
    const [myPosts, setMyPosts] = useState([]);
    const [createPostPage, setCreatePostPage] = useState(false);
    const [postToUpdate, setPostToUpdate] = useState({});
    const [editPostPage, setEditPostPage] = useState(false);

    const fetchMyPosts = () => {
        fetch(`http://localhost:3000/post/myposts`,{
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Authorization': props.sessionToken}
        }).then(res => res.json())
        .then(postData => {setMyPosts(postData)})
    }

    useEffect(() => {
        fetchMyPosts();
    },[])

    console.log(myPosts);

    const editPost = (post) => {
        setPostToUpdate(post);
        console.log(post);
    }

    const createPostPageOn = () => {
        setCreatePostPage(true);
    }

    const createPostPageOff = () => {
        setCreatePostPage(false);
    }

    const viewCreatePostPage = () => {
        return (createPostPage ? <MyPostsCreate sessionToken={props.sessionToken} fetchMyPosts={fetchMyPosts} createPostPageOff={createPostPageOff} /> : <></> )
    }

    const editPostPageOn = () => {
        setEditPostPage(true);
    }

    const editPostPageOff = () => {
        setEditPostPage(false);
    }

    const viewUpdatePostPage = () => {
        return (editPostPage ? <MyPostsUpdate sessionToken={props.sessionToken} fetchMyPosts={fetchMyPosts} editPostPageOff={editPostPageOff} postToUpdate={postToUpdate} /> : <></>)
    }

    return(
        <div>
            <span><h3>My Posts</h3><Button onClick={createPostPageOn}>New Post</Button></span>
            <MyPostsDisplay sessionToken={props.sessionToken} fetchMyPosts={fetchMyPosts} editPost={editPost} myPosts={myPosts} editPostPageOn={editPostPageOn} />
            {/* {props.myPostsPage ? <div><p>These are my posts</p><MyPostsDisplay myPosts={myPosts}/></div> : <></>} */}
            {/* THIS TRIES TO CALL THE FETCH WHEN THE PAGE INITIALLY LOADS. INSTEAD, USE A FUNCTION IN APP.JS THAT WILL CALL THE FETCH WHEN THIS PAGE MOUNTS, AFTER THE SESSIONTOKEN HAS BEEN UPDATED. */}
            {viewCreatePostPage()}
            {viewUpdatePostPage()}
        </div>
    )
}

export default MyPosts;