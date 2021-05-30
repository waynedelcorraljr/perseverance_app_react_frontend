import './App.css';
import { Component } from 'react';
import EarthdateContainer from './components/EarthdateContainer';
import PhotosContainer from './components/PhotosContainer';
import { connect } from 'react-redux';
import { fetchEarthdates } from './actions/fetchEarthdates'
import { addPhotosToStore } from './actions/addPhotosToStore';



class App extends Component {

  componentDidMount() {
    this.props.fetchEarthdates()
  }

  render(){
    console.log(this.props)
    return (
      <div className="App">
        <EarthdateContainer earthdates={this.props.earthdates} addPhotos={this.props.addPhotosToStore}/>
        <PhotosContainer photos={this.props.photos} />
      </div>
    );
  }
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
