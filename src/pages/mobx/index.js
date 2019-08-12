import React from 'react'
import { autobind } from 'core-decorators'
import { observable, computed, action, autorun  } from "mobx"
import {observer} from "mobx-react"
import Todo from './todo'

var age=34

var person = {
    name:"fd",
    age
}

console.log(person)

const appStore = observable({
    count : 0
})

appStore.increment = function(){
    this.count++
}

appStore.decrement = function(){
    this.count--
}

class Counter extends React.Component {

    render() {
        return (
            <div >
                <p>dfsfsd</p>
                <Todo store = {appStore} />
            </div>
            
        );
    }
}

export default Counter;