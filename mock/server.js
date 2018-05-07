var app = require('koa')();
var router = require('koa-router')();

var homeAdData = require('./home/ad.js')
router.get('/api/homead', function *(next) {
    this.body = homeAdData
})

var homeListData = require('./home/list.js') 
router.get('/api/homelist/:city/:page', function *(next) {
    const paramsCity = this.params.city
    const paramsPage = this.params.page
    console.log('当前城市：' + paramsCity)
    console.log('当前页数：'+paramsPage)

    this.bidy = homeListData
})

app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3003);
