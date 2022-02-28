import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, HashRouter  } from 'react-router-dom';
import Home from './containers/HomeContainers';
import TestRoute from './components/TestRoute';


// import Stake from './home/Stake'




class AppRoutes extends Component {
	render() {
		return (
            <HashRouter hasType = "hashbang">
                <Routes >
                    <Route exact path='/' element={<Home/>} />
                    <Route exact path = '/route' element={<TestRoute/>} /> 
                </Routes>
            </HashRouter>
                    
		)
	}
}

export default AppRoutes