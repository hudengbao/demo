import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom'
import Login from './pages/login'
import Admin from './pages/admin'
import Button from './pages/UI/button'
import Home from './pages/home'
import App from './App'

export default class AppRouter extends React.Component {

    render(){
        return (
            <Router>
                <App>
                    <Route path="/login" component={Login} />
                    <Route path="/admin" render = {()=>
                        <Admin>
                            <Route path="/admin/ui/button" component={Button} />
                            <Route path="/admin/home" component={Home} />
                        </Admin>
                    } />
                </App>
            </Router>
        )

    }
}