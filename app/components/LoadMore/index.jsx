import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {

        }
    }
    render() {
        return (
            <div className="load-more border-b" ref="wrapper">
                {
                    this.props.isLoadingMore ?
                    <span><img src={require('./images/loading.png')}/>加载中...</span>:
                    <span onClick={this.props.onClick}>查看更多</span>
                }
            </div>
        )
    }
    componentDidMount() {
        const loadMoreFn = this.props.onClick
        const wrapper = this.refs.wrapper
        let timeoutId

        function callback() {
            const top = wrapper.getBoundingClientRect().top
            const windowHeight = window.screen.height
            if (top && top < windowHeight) {
                loadMoreFn()
            }
        }
        window.addEventListener('scroll', function(){
            if(this.props.isLoadingMore) {
                return
            } 
            if(timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback, 50)
        }.bind(this), false)
    }
}

export default LoadMore
