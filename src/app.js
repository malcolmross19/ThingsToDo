import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map'
import Places from './components/Places'

class App extends Component {
    render() {
        const location = {
            lat: 28.5962,
            lng: 81.3064
        };

        return (
            <div>
                This is the REACT APP!
                <div style={{width: 300, height:600, background: '#777'}}>
                    <Map center={location}/>
                </div>

                <Places />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))