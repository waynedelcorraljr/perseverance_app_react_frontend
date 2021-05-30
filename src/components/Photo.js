import React from 'react';
import { Component } from 'react';

class Photo extends Component {

    render() {
        console.log(this.props)
        return (
        
                <img src={this.props.photo.img_src} key={this.props.photo.id} style={{ width: '80%' }} alt={this.props.photo.id}></img>
           
        )
    }
}

export default Photo;