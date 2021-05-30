import { Component } from 'react';
import Earthdate from './Earthdate'


class EarthdateContainer extends Component {

    renderEarthdates = () => {
        if (this.props.earthdates.data) {
           return this.props.earthdates.data.map(ed => <Earthdate earthdate={ed} key={ed.attributes.id} addPhotos={this.props.addPhotos} alt={ed.attributes.date} /> )                
        } else {
            return <h3>Loading Earthdates...</h3>
        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Perseverance App (React.0)</h1>

                    {this.renderEarthdates()}

            </div>
        )
    }
}



export default EarthdateContainer;