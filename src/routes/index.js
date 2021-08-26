const newsRouter = require('./news');
const homeRouter = require('./home');
const productRouter = require('./products');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/products', productRouter);
    app.use('/', homeRouter);
}

module.exports = route;