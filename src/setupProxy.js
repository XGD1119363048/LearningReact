const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        '/ajax',
        createProxyMiddleware({
            target: 'https://i.maoyan.com',
            changeOrigin: true
        })
    )
}

// https://i.maoyan.com/ajax/comingList?ci=10&limit=10&movieIds=&token=&optimus_uuid=7EA972608E8611EEB14CC5151DE647AAB5623D3592534428B80C3A77E532EE50&optimus_risk_level=71&optimus_code=10
// &movieIds=&token=&
// optimus_uuid=4B288340FADF11ECB480C556BE86AB278C53C20790394CFD92084F6846C45847&
// optimus_risk_level=71&optimus_code=10