import React from 'react'
import { observable, computed, action } from "mobx";


function testable(target) {
    target.isTestable = true;
}

@testable
class MyTestableClass {}

console.log(MyTestableClass.isTestable)


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