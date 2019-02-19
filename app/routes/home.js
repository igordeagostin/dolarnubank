module.exports = function (app) {
    app.get('/', function (req, res) {
        app.app.controllers.home.index(app, req, res);
    })

    app.post('/gerar', function (req, res) {
        app.app.controllers.home.gerar(app, req, res);
    });
}
