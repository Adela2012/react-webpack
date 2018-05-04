import React from 'react'

class B extends React.Component {
    render() {
        return (
            <p>B: {this.props.userinfo.city}</p>
        )
    }
}

export default B