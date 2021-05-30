import { Component } from 'react';
import Photo from './Photo';


class PhotosContainer extends Component {

    renderPhotos = () => {
        if (this.props.photos) {
           return this.props.photos.map(photo => <Photo photo={photo} /> )                
        } else {
            return <h3>Select date to view photos</h3>
        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.renderPhotos()}
            </div>
        )
    }
}



export default PhotosContainer;