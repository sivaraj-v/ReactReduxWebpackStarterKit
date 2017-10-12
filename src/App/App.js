import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './app.css'

class App extends Component {
    render() {
        return (
            <div>Hello world</div>
        )
    }
}

const matchDispatchToProps = (dispatch)=>{
    return bindActionCreators({

    }, dispatch)
}
  
const mapStateToProps = (state)=>{
    return {

    }
}

export default connect(mapStateToProps, matchDispatchToProps)(App);