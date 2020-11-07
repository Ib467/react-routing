import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import PuppiesComp from './components/PuppiesComp';
import KittenComp from './components/KittenComp';
import ManyPuppies from './components/ManyPuppies';
import ProfilePreview from './components/ProfileView';

function App() {

  const profileDatefromDb = [
    {    
    username: "James",
    thumbnailUrl:'https://images-cdn.9gag.com/photo/aOKgZpR_460s.jpg',
    likeCount: 1,
    bio: "this is my bio."
    },
    {    
    username: "Queen",
    thumbnailUrl:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxNjIzMzUxODIx/queen-elizabeth-ii-9286165-1-402.jpg',
    likeCount: 1,
    bio: "this is my bio."
  },
  {    
  username: "Nice guy",
  thumbnailUrl:'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=899&h=471&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F04%2Fdkalfdsdada.jpg',
  likeCount: 55,
  bio: "this is my bio."
  },




  ]
  return (
    <div className="App" style={{width: "60%", 
    margin: "0 auto" }} >
      <h1> Hello from Main Page Navigation!</h1>
      <Router >
        <PuppiesComp path="/puppy"/> 
        <KittenComp path="/kitten" />
        <ManyPuppies path="/:number" />
      </Router>

      {/* <ProfilePreview 
      username="James"
      thumbnailUrl={'https://images-cdn.9gag.com/photo/aOKgZpR_460s.jpg'}
      likeCount={3}
      bio="this is my bio."      
      /> */}

      {profileDatefromDb.map((profileData, i) => {
        return <ProfilePreview key={i} 
        data={profileData}
        // username={profileData.username}
        // thumbnailUrl={profileData.thumbnailUrl}
         
        />
      })
      }

  
    </div>
  );
}

export default App;
