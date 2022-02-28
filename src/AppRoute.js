import React, { Component } from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Home from './containers/HomeContainers';
import TestRoute from './components/TestRoute';


// import Stake from './home/Stake'




class AppRoutes extends Component {
	render() {
		return (
            <BrowserRouter>
                <Routes >
                    <Route exact path='/' element={<Home/>} />
                    <Route exact path = '/route' element={<TestRoute/>} /> 
                </Routes>
            </BrowserRouter>
                    
		)
	}
}

export default AppRoutes