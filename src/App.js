import './App.css';
import React, { Component } from 'react';
import ParticleBg from './components/ParticleBg/Particle';
import Navigation from './components/navigations/Navigation';
import Logo from './components/Logo/Logo';
import ImgLinkForm from './components/ImgLinkForm/ImgLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import CopyURL from './components/CopyURL/CopyURL';
import 'tachyons';

const initialState = {
      input: '',
      url: '#',
      box: [],
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: "",
        email: '',
        entries: 0,
        date: ""
      }
    }
    
class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  copyURL = (URL) => {
    this.setState({input: URL})
  }

  remove = () => {
    this.setState({url: ''});
    this.setState({box: []});
    this.setState({input: ''})
  }

  onLoad = (data) => {
    this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        date: data.date
    }})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  
  calculateFaceLocation = (box) => {
    const image = document.getElementById('detectPhoto');
    const width = Number(image.width);
    const height = Number(image.height);
    const locations = box.map(i => {
      return {
          topRow: i.top_row * height,
          leftCol: i.left_col * width,
          bottomRow: height - (i.bottom_row * height),
          rightCol: width - (i.right_col * width)
      } 
    })
    return locations;
  }

  displsyFaceBox = (boxes) => {
    this.setState({box: boxes});
  }

  onRouteChange = (route) => {
    route === 'signin' || route === 'Register'
    ? this.setState(initialState)
    : this.setState({isSignedIn: true})
    this.setState({route: route});
  }
  

  OnSubmit = () => {
    if (this.state.input !== '') {
      this.setState({url: this.state.input});
      fetch('https://smart-brainapi-fmans.sevalla.app/clarifai', {
        method: 'post',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          input: this.state.input
        })
      })
      .then(response => response.json())
      .then(result => {
        if(result.outputs[0].data.regions) {
            fetch('https://smart-brainapi-fmans.sevalla.app/image', {
              method: 'put',
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({
                id: this.state.user.id
              })
            }).then(response => response.json())
              .then(count => {
                  this.setState(Object.assign(this.state.user, {
                    entries: count
                  }))
                })
              .catch(err => console.log('err', err))
        }
        const box = result.outputs[0].data.regions.map(i => { return i.region_info.bounding_box});
        this.displsyFaceBox(this.calculateFaceLocation(box));
      })
      .catch(error => console.log('error', error));
    }
  }

  render() {
    const {url, route, isSignedIn, box} = this.state;
    return (
      <div>
          <ParticleBg/>
          <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
          {route === 'home' 
          ? <div>
              <Logo/>
              <Rank name={this.state.user.name} rank={this.state.user.entries}/>
              <ImgLinkForm 
              onInputChange={this.onInputChange}
              onSubmit={this.OnSubmit}
              setValue={this.state.input}/>
              <FaceRecognition imageURL={url} box={box} copyURL={this.copyURL} remove={this.remove}/>
              <CopyURL copyURL={this.copyURL}/>
            </div>
          : (route === 'signin')
          ? <SignIn onLoad={this.onLoad} onRouteChange={this.onRouteChange}/> 
          : <Register onLoad={this.onLoad} onRouteChange={this.onRouteChange}/>          
          }
      </div>
    );
  }

}
export default App;