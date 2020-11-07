import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import PuppiesComp from './components/PuppiesComp';
import KittenComp from './components/KittenComp';
import ManyPuppies from './components/ManyPuppies';
import ProfilePreview from './components/ProfileView';
import UsstateView from './components/UsstateView';

function App() {
  const States = [
            {
            "state": "Alabama",
            "slug": "alabama",
            "code": "AL",
            "nickname": "Yellowhammer State",
            "website": "http://www.alabama.gov",
            "admission_date": "1819-12-14",
            "admission_number": 22,
            "capital_city": "Montgomery",
            "capital_url": "http://www.montgomeryal.gov",
            "population": 4833722,
            "population_rank": 23,
            "constitution_url": "http://alisondb.legislature.state.al.us/alison/default.aspx",
            "state_flag_url": "https://cdn.civil.services/us-states/flags/alabama-large.png",
            "state_seal_url": "https://cdn.civil.services/us-states/seals/alabama-large.png",
            "map_image_url": "https://cdn.civil.services/us-states/maps/alabama-large.png",
            "landscape_background_url": "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/alabama.jpg",
            "skyline_background_url": "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/alabama.jpg",
            "twitter_url": "https://twitter.com/alabamagov",
            "facebook_url": "https://www.facebook.com/alabamagov"
            },
            {
            "state": "Alaska",
            "slug": "alaska",
            "code": "AK",
            "nickname": "The Last Frontier",
            "website": "http://alaska.gov",
            "admission_date": "1959-01-03",
            "admission_number": 49,
            "capital_city": "Juneau",
            "capital_url": "http://www.juneau.org",
            "population": 735132,
            "population_rank": 47,
            "constitution_url": "http://www.legis.state.ak.us/basis/folioproxy.asp?url=http://wwwjnu01.legis.state.ak.us/cgi-bin/folioisa.dll/acontxt/query=*/doc/{t1}?",
            "state_flag_url": "https://cdn.civil.services/us-states/flags/alaska-large.png",
            "state_seal_url": "https://cdn.civil.services/us-states/seals/alaska-large.png",
            "map_image_url": "https://cdn.civil.services/us-states/maps/alaska-large.png",
            "landscape_background_url": "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/alaska.jpg",
            "skyline_background_url": "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/alaska.jpg",
            "twitter_url": "https://twitter.com/alaska",
            "facebook_url": "https://www.facebook.com/AlaskaLocalGovernments"
            },
  ]

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
    <>
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

    {States.map((state, i) => {
        return <UsstateView key={i} 
        data={state}
        // username={profileData.username}
        // thumbnailUrl={profileData.thumbnailUrl}
         
        />
      })
      } 
    </div>

      {/* <UsStates /> */}


      </>
  );
}

export default App;
