import React from 'react'

class C extends React.Component {
    render() {
        return (
            <p><button onClick={this.changeUserInfo.bind(this)}>修改</button></p>
        )
    }
    changeUserInfo() {
        const actions = this.props.actions
        actions.login({
            userid: '123',
            city: 'hangzhou'
        })
    }
}

export default C