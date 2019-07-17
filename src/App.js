import React, {useState, useEffect} from 'react';
import NavBar from './navbar/NavBar';
import Splash from './splash/Splash';
import AuthBar from './auth/AuthBar';
import MyPosts from './posts/MyPosts';
import ParkSearchToggle from './navbar/ParkSearchToggle';


function App() {
  const [sessionToken, setSessionToken] = useState('');
  const [myPostsPage, setMyPostsPage] = useState(false);
  const [searchByPark, setSearchByPark] = useState(false);
  const [displaySearchByPark, setDisplaySearchByPark] = useState(false);
  const [bucketListPage, setBucketListPage] = useState(false);
  const [parkName, setParkName] = useState('');
  const [homePage, setHomePage] = useState(true);

  const displaySearchByParkOn = () => {
    setDisplaySearchByPark(true);
    setBucketListPage(false);
    setMyPostsPage(false); 
    setHomePage(false); 
  }

  const bucketListOn = () => {
    setBucketListPage(true);
    setSearchByPark(false);
    setMyPostsPage(false);
    setDisplaySearchByPark(false);
    setHomePage(false);
  }

  const searchByParkOn = (e) => {
    e.preventDefault();
    setSearchByPark(true);
    setBucketListPage(false);
    setMyPostsPage(false);
    setHomePage(false);
  }

  const myPostsPageOn = () => {
    setMyPostsPage(true);
    setSearchByPark(false);
    setBucketListPage(false);
    setDisplaySearchByPark(false);
    setHomePage(false);
  }

  const homePageOn = () => {
    setHomePage(true);
    setMyPostsPage(false);
    setSearchByPark(false);
    setBucketListPage(false);
    setDisplaySearchByPark(false);
  }

useEffect(() => {
  if (localStorage.getItem('token')){
    setSessionToken(localStorage.getItem('token'));
  }
},[])

const updateToken = (newToken) => {
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
  console.log(newToken);
}
console.log(sessionToken)

const clearToken = () => {
  localStorage.clear();
  setSessionToken('');
  setHomePage(true);
  setMyPostsPage(false);
  setSearchByPark(false);
  setBucketListPage(false);
  setDisplaySearchByPark(false);
}
console.log(sessionToken)

const viewToggle = () => {
  return (myPostsPage ? <MyPosts myPostsPage={myPostsPage} sessionToken={sessionToken} /> : <Splash sessionToken={sessionToken} parkName={parkName} myPostsPage={myPostsPage} bucketListPage={bucketListPage} searchByPark={searchByPark} />)
}

  return (
    <div className="App">
      {/* {sessionToken ? <NavBar logOut={clearToken} /> : <AuthBar updateToken={updateToken} />} */}
      {/* HAVING THIS DISPLAY LOGIC IN THE PARENT COMPONENT RETURNS A WARNING, BECAUSE YOU ARE TRYING TO UPDATE THE STATE OF COMPONENT WHILE IT IS 'UNMOUNTED.' INSTEAD, KEEP BOTH COMPONENTS 'MOUNTED,' BUT PUT DISPLAY TERNARIES INSIDE OF THE ACTUAL COMPONENTS. */}
      <AuthBar sessionToken={sessionToken} updateToken={updateToken} />
      <NavBar homePageOn={homePageOn} displaySearchByParkOn={displaySearchByParkOn} sessionToken={sessionToken} logOut={clearToken} myPostsPageOn={myPostsPageOn} bucketListOn={bucketListOn} myPostsPage={myPostsPage} bucketListPage={bucketListPage} displaySearchByPark={displaySearchByPark} homePage={homePage} />
      {/* <Splash myPostsPage={myPostsPage} />
      <MyPosts myPostsPage={myPostsPage} sessionToken={sessionToken} /> */}
      {/* BECAUSE THERE IS A FETCH IN MyPosts, YOU NEED A FUNCTION TO CALL THE VIEW SO IT DOESN'T TRY TO RUN THE FETCH BEFORE THE COMPONENT IS MOUNTED AND THE SESSIONTOKEN EXISTS */}
      {displaySearchByPark ? <ParkSearchToggle setParkName={setParkName} parkName={parkName} setSearchByPark={setSearchByPark} searchByParkOn={searchByParkOn} /> : <></>}
      {viewToggle()}
    </div>
  );
}

export default App;
