import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import Topbar from './components/Topbar/index.js';
import Footer from './components/Footer/index.js';

import Home from './screens/Home';
import Projects from './screens/Projects';
import Experience from './screens/Experience';
import Resume from './screens/Resume';
import Invalid from './screens/Invalid';

const App = props => {
	return (
    	<Router>
      		<Topbar />
			<Home />
			<Footer />
			{/*<Switch>
				<Route exact path="/" component={ Home } />
				<Route exact path="/projects" component={ Projects } />
				<Route exact path="/experience" component={ Experience } />
				<Route exact path="/resume" component={ Resume } />
				<Route path="*" component={ Invalid } />
			</Switch>*/}
    	</Router>
  );
};

export default App;