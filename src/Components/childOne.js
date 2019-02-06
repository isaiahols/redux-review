import React from 'react'
import { connect } from "react-redux";

const ChildOne = (props) => {
    console.log(props)
    return (
        <div>
            <h2>{props.name}</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    const { name } = state
    return {
        name
    }
}

export default connect(mapStateToProps)(ChildOne)

