// import React, {useState} from 'react';

// const BucketListCreate = (props) => {
    
//     const createListItem = (e) => {
//         e.preventDefault();
//         fetch(`http://localhost:3000/bucketlist/`, {
//             method: 'POST',
//             body: JSON.stringify({post:
//             {park: props.postToSave.park, state: props.postToSave.state, activity: props.postToSave.activity, comments: props.postToSave.comments}}),
//             headers: {'Content-Type': 'application/json', 'Authorization': props.sessionToken}
//         }).then(res => res.json())
//         .then(listItemData => {
//             console.log(listItemData);
//             props.fetchListItems();
//         })
//     }

//     return(
//         <div>
            
//         </div>
//     )
// }

// export default BucketListCreate;