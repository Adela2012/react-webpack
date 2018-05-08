import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import * as api from '../../api'
class HomeAd extends React.Component {
    constructor(props, context) {
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div className="home-ad border-b">
                <a className="title-link">
                    <span className="title-left">超值特惠</span>
                    <span className="more">更多优惠</span>
                </a>
                <div className="content">
                    {                        
                        this.props.data.map((item,key)=> {
                            return (
                                <a className="item" key={key}>
                                    <img src={item.imageUrl} alt="" />
                                    <div className="title">{item.shortTitle}</div>
                                    <div className="price">
                                        <span className="cur">{parseInt(item.price)}</span>
                                        <del className="old">{parseInt(item.markPrice)}</del>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default HomeAd