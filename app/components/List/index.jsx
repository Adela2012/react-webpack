import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class List extends React.Component {
    constructor(props, context) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {

        }
    }
    render() {
        return (
            <div className="list-container border-b">
                {
                    this.props.list.map((item, key) => {
                        return (
                            <div key={key} className="list-item border-b">
                                <div className="pic">
                                    <div className="tag" style={{ color: item.pictag.color }}>{item.pictag.tag}</div>
                                    <img src={item.defaultPic} alt="" />
                                </div>
                                <div className="content">
                                    <div className="title-main">
                                        <div className="shop-name">{item.shopName}</div>
                                        <div className="shop-tags"></div>
                                    </div>
                                    <div className="title-sub">{item.dealGroupTitle}</div>
                                    <div className="price-desc">
                                        <div className="price">
                                            <ins className="cur">{item.dealgroupPrice}</ins>
                                            <ins className="old">{item.marketPrice}</ins>
                                        </div>
                                        <div className="desc">{item.salesdesc}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default List
