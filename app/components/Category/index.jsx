import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import slideData from './data.js'
import './style.less'
class Category extends React.Component {
    /*
    轮播图需要用到一个第三方插件 https://github.com/voronianski/react-swipe 根据其文档要求需要安装插件，
    即`npm install react swipe-js-iso react-swipe --save`，这个插件的日常使用我已经验证过，大家可放心使用
    */
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }
    render () {
        const opt = {
            // auto: 2500,
            callback: function (index) {
                this.setState({index: index});
            }.bind(this)
        }
        console.log(slideData)
        return (
            <div id="home-category">
                <ReactSwipe swipeOptions={opt}>
                    {
                        [0,1,2].map((num)=>{
                            return (
                                <div className="carousel-item" key={num}>
                                    <ul className="clear-fix">
                                        {
                                            slideData[num].map((item, index) => {
                                                return (
                                                    <li className="float-left" key={index} >
                                                        <img src={require(`./images/${item.img}`)} />
                                                        <p>{item.title}</p>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}></li>
                        <li className={this.state.index === 1 ? "selected" : ''}></li>
                        <li className={this.state.index === 2 ? "selected" : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Category