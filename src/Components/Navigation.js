import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from '../Views/HomePage'
import AboutPage from '../Views/AboutPage'
import ContactPage from '../Views/ContactPage'
import Calender from '../Views/Calender'
import Menu from './Menu'
import Quiz from '../Views/Quiz'
import Countries from '../Views/Countries'
import BookReader from '../Views/BookReader'

function Navigation() {
    return (
        <Router >
            <div>
                <div className="fixed top-0 w-full bg-gray-500 p-2 z-10">
                    <Menu/>
                </div>
               
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/about">
                        <AboutPage/>
                    </Route>
                    <Route path="/quiz">
                        <Quiz/>
                    </Route>
                    <Route path="/calender">
                        <Calender/>
                    </Route>
                    <Route path="/countries">
                        <Countries/>
                    </Route>
                    <Route path="/bookreader">
                        <BookReader/>
                    </Route>
                    <Route path="/contact">
                        <ContactPage/>
                    </Route>
                </Switch>
            </div>            
        </Router>
    )
}

export default Navigation
