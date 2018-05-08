import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class HomeAd extends React.Component {
    constructor(props, context) {
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div className="home-ad">
                <a className="title-link">
                    <span className="title-left">超值特惠</span>
                    <span className="more">更多优惠</span>
                </a>
            </div>
        )
    }
}

export default HomeAd