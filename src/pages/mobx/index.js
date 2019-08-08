import React from 'react'
import { observable, computed, action } from "mobx";


class Timer {
    @observable start = Date.now();
    @observable current = Date.now();

    @computed
    get elapsedTime() {
        return this.current - this.start + "milliseconds";
    }

    @action
    tick() {
        this.current = Date.now();
    }
}


export default class Login extends React.Component {

    componentDidMount(){
        
    }

    render() {
        return (
            <div >
                <p>0</p>
            </div>
            
        );
    }

    
}