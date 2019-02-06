import React, { Component } from 'react'
import { connect } from "react-redux";
import { updateName } from "../Ducks/reducer";

class ChildTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInputName: '',
        }
    }

    handleUserInputName(value) {
        this.setState({
            userInputName: value
        })
    }

    updateReduxName() {
        console.log('updateName', this.state.userInputName);

        this.props.updateName(this.state.userInputName)
    }

    render() {
        return (
            <div>
                <input onChange={(e) => this.handleUserInputName(e.target.value)} />
                <button onClick={() => this.updateReduxName()}>Update Name</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    updateName
}

export default connect(null, mapDispatchToProps)(ChildTwo)