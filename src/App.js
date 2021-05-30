import './App.css';
import { Component } from 'react';
import EarthdateContainer from './components/EarthdateContainer';
import PhotosContainer from './components/PhotosContainer';
import { connect } from 'react-redux';
import { fetchEarthdates } from './actions/fetchEarthdates'
import { addPhotosToStore } from './actions/addPhotosToStore';
import rover from './images/rover.gif';
import mars_2020_mission from './images/mars_2020_mission.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends Component {

  componentDidMount() {
    this.props.fetchEarthdates()
  }

  render(){
    console.log(this.props)
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/photos">Photos</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/photos">
            <div className="App">
              <EarthdateContainer earthdates={this.props.earthdates} addPhotos={this.props.addPhotosToStore}/>
              <PhotosContainer photos={this.props.photos} />
            </div>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
      
    );
  }
}

function Home() {
  return(
    <div className='App'>
      <h2>Welcome to the Perseverance App!</h2>
      <img src={rover} alt='Perseverance Rover Identification GIF' style={{ width: '90%' }}></img>
    </div>
  ) 
}

function About() {
  return(
    <div className='App'>
      <h2>About</h2>
      <p>This app gathers all of the current photos available from the Mars Perseverance Rover</p>
      <p>All data is pulled from NASA's public API https://api.nasa.gov/</p>
      <p>The API is only updated when new photos are gathered</p>
      <p>New photos are not gethered everyday</p>

      <img src={mars_2020_mission} alt='Perseverance Rover Identification GIF' style={{ width: '50%' }}></img>

    </div>
  )
}

const mapStateToProps = state => {
  return {
      earthdates: state.earthdates,
      photos: state.photos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchEarthdates: () => dispatch(fetchEarthdates()),
    addPhotosToStore: (photos) => dispatch(addPhotosToStore(photos))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
