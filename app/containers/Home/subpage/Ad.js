import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getHomeAd } from '../../../api'
import HomeAd from '../../../components/HomeAd'
class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            data: []
        }
    }
    render () {
        return (
            <div>
                {
                    this.state.data.length
                    ? <HomeAd/>
                    : <div>加载中...</div>
                }
            </div>
        )
    }
    componentDidMount() {
        getHomeAd().then(res => {
            const data = res.data
            console.log(data)
            if(data.length) {
                this.setState({
                    data: data
                })
            }
        }).catch(ex => {
            if(__DEV__) {
                console.error('首页广告模块获取数据报错，' ,ex.message)
            }
        })

    }
}

export default Ad