var React = require('react');
var ReactDom = require('react-dom');
import User from './components/user';
import Users from './components/users';
import Friends from './components/friends';
import Navigation from './components/navigation';
import Navbar from './components/navbar';
import Home from './components/home';

import ReactRouter from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


require('./index.css');

//state
//lifecycle events
//UI

class App extends React.Component {

  render() {
    var localDevelopment = false;

  	return (
      <Router>
    		<div className="container">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/popular" component={Navigation} />
            
            <Route render={ function() {
              return <p> NOT FOUND </p>
            }} />
            { localDevelopment ? <div>
      		  <User name="Uma Mahesh" 
      		    role="Full Stack Developer" 
      		    image="https://pbs.twimg.com/profile_images/825750184072269824/PkEg6V5j_400x400.jpg"/>
      		  <Users list={['Uma', 'Ravali', 'Novina', 'Jeevan', 'Abhi']}/>
            <Friends list={[{friend: true, name: 'Uma'},
            {friend: false, name: 'raju'},
            {friend: true, name: 'prabhakar'},
            {friend: true, name: 'srikanth'}
            ]} />
            </div> : "" }
            </Switch>
    		</div>
      </Router>
  	)
  }
}


ReactDom.render(<App/>, document.getElementById('app'));