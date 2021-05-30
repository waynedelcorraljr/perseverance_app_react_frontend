import React from 'react';
import { Component } from 'react';

class Earthdate extends Component {

    handleOnClick = event => {
        event.preventDefault()
        console.log(this.props.earthdate.attributes.photos)
        this.props.addPhotos(this.props.earthdate.attributes.photos)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={event => this.handleOnClick(event)} id={this.props.earthdate.id}>{this.props.earthdate.attributes.date}</button>
            </div>
        )
    }
}

export default Earthdate;