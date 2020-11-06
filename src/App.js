import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import PuppiesComp from './components/PuppiesComp';
import KittenComp from './components/KittenComp';
import ManyPuppies from './components/ManyPuppies';
import ProfilePreview from './components/ProfileView';

function App() {
  return (
    <div className="App">
      <h1> Hello from Main Page Navigation!</h1>
      <Router >
        <PuppiesComp path="/puppy"/> 
        <KittenComp path="/kitten" />
        <ManyPuppies path="/:number" />
      </Router>

      <ProfilePreview 
      username="James"
      thumbnailUrl={'https://images-cdn.9gag.com/photo/aOKgZpR_460s.jpg'}
      likeCount={3}
      bio="this is my bio."      
      />
    </div>
  );
}

export default App;
