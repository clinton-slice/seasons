import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
    state = {lat: null, errorMessage: '', date: new Date()};
    componentDidMount(){
        this.timerID= setInterval(()=>this.setState({date: new Date()}), 1000);
        window.navigator.geolocation.getCurrentPosition(
            position => {this.setState({lat: position.coords.latitude})},
            error => {this.setState({errorMessage: error.message})}
        )
    }
    componentDidUpdate(){
            console.log('Component just updated and re-rendered')
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    renderContent(){
        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} date={this.state.date}/>
        }
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        return <Spinner message={'Please allow us access your location'}/>
    }

    render(){
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
    <App/>, document.querySelector('#root')
)
