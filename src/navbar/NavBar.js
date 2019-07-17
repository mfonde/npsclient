import React from 'react';
import {Button} from 'reactstrap';



const NavBar = (props) => {
   

  
   
    return(
        <div>
            {props.sessionToken ? <div>
            {!props.homePage ? <span><Button onClick={props.homePageOn}>Home</Button></span> : <></>}
            {!props.myPostsPage ? <span><Button onClick={props.myPostsPageOn}>My Posts</Button></span> : <></>}
            {!props.bucketListPage ? <span><Button onClick={props.bucketListOn}>My Bucket List</Button></span> : <></>}{!props.displaySearchByPark ? <span><Button onClick={props.displaySearchByParkOn}>Search By Park</Button></span> : <></>}
            <span><Button onClick={props.logOut}>Log Out</Button></span>
            
            </div> : <> </>}
        </div>
    )
}

export default NavBar;