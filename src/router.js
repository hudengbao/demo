import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom'
import Login from './pages/login'
import Admin from './pages/admin'
import Button from './pages/UI/button'
import Motals from './pages/UI/modals'
import Loading from './pages/UI/loading'
import Notification from './pages/UI/notification'
import Message from './pages/UI/message'
import Home from './pages/home'
import NoMatch from './pages/errPage'
import App from './App'

export default class AppRouter extends React.Component {

    render(){
        return (
            <Router>
                <App>
                    <Route path="/login" component={Login} />
                    <Route path="/admin" render = {()=>
                        <Admin>
                            <Switch>
                                <Route path="/admin/home" component={Home} />
                                <Route path="/admin/ui/button" component={Button} />
                                <Route path="/admin/ui/modals" component={Motals} />
                                <Route path="/admin/ui/loading" component={Loading} />
                                <Route path="/admin/ui/notification" component={Notification} />
                                <Route path="/admin/ui/message" component={Message} />
                                <Route component={NoMatch} />
                            </Switch>
                        </Admin>
                    } />
                </App>
            </Router>
        )

    }
}