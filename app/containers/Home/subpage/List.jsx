import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'
import * as api from '../../../api'
import './style.less'
class List extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            hasMore: false,
            isLoadingMore: false,
            page: 0,
            list: []
        }
    }
    render() {
        return (
            <div className="index-for-you">
                <div className="index-like-title">猜你喜欢</div>
                {
                    this.state.list.length
                        ? <ListComponent list={this.state.list} />
                        : <div>加载中...</div>
                }
                {
                    this.state.hasMore
                        ? <LoadMore /> : ''
                }
            </div>
        )
    }
    componentDidMount() {
        const res = api.getHomeList(this.props.cityName, 0)
        this.resultHandle(res)
    }

    resultHandle(result) {
        result.then(res => {
            const hasMore = res.data.hasMore
            const list = res.data.list
            console.log(list)
            this.setState({
                hasMore: hasMore,
                list: this.state.list.concat(list)
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('首页”猜你喜欢“获取数据报错, ', ex.message)
            }
        })
    }
}
export default List