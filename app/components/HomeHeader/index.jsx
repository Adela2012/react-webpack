import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class HomeHeader extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="home-header">
                <header className="index-head">
                    <a className="city">{this.props.cityName}</a>
                    <div className="search">输入商户名、地点</div>
                    <a className="self">
                        <div className="selfOutLine"></div>
                    </a>
                </header>
                <div className="header-fill"></div>
            </div>
        )
    }
}

export default HomeHeader