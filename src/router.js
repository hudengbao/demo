import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom'
import Login from './pages/login'
import Admin from './pages/admin'
import Button from './pages/UI/button'
import Motals from './pages/UI/modals'
import Loading from './pages/UI/loading'
import Notification from './pages/UI/notification'
import Message from './pages/UI/message'
import Tab from './pages/UI/tab'
import Card from './pages/UI/card'
import Carousel from './pages/UI/carousel'
import Formlogin from './pages/form/login'
import Registered from './pages/form/registered'
import TableBase from './pages/table/table'
import Home from './pages/home'
import Mobx from './pages/mobx'
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
                                <Route path="/admin/ui/tab" component={Tab} />
                                <Route path="/admin/ui/card" component={Card} />
                                <Route path="/admin/ui/carousel" component={Carousel} />
                                <Route path="/admin/form/login" component={Formlogin} />
                                <Route path="/admin/mobx" component={Mobx} />
                                <Route path="/admin/table/table" component={TableBase} />
                                <Route path="/admin/form/registered" component={Registered} />
                                <Route component={NoMatch} />
                            </Switch>
                        </Admin>
                    } />
                </App>
            </Router>
        )

    }
}