import React from 'react'
import { autobind } from 'core-decorators'
import { observable, computed, action } from "mobx"
import {observer} from "mobx-react"

@observer class Todo extends React.Component {

    render() {
        return (
            <div >
                <p>{this.props.store.count}</p>
                <button onClick={this.handleInc}> + </button>
                <button onClick={this.handleDec}> - </button>
            </div>
            
        );
    }

    handleInc=()=>{
        this.props.store.increment()
    }

    handleDec=()=>{
        this.props.store.decrement()
    }
}

export default Todo;