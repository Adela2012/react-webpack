import React from 'react'

class A extends React.Component {
    render () {
        return (
            <p>A:{this.props.userinfo.userid}</p>
        )
    }
}

export default A