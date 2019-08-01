import React from 'react'

export default class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
        }
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

    componentWillMount(){
        console.log("componentWillMount")
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    componentWillReceiveProps(newProps){
        console.log("componentWillReceiveProps")
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true
    }

    componentWillUpdate(){
        console.log("componentWillUpdate")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    render() {
        return (
            <div>
                <p>{this.props.name}</p>
            </div>
        )   
    }
}