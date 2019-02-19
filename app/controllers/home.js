module.exports.index = function (app, req, res) {
    var dados = {
        "dolar": '1'
    }
    res.render("home/index", {data : dados});
}

module.exports.gerar = function (app, req, res) {
    var dolar = req.body;
    // req.assert('titulo', 'Título é obrigatório').notEmpty();
    // req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    // req.assert('resumo', 'Resumo deve conter entre 10 e 100').len(10, 100);
    // req.assert('autor', 'Autor é obrigatório').notEmpty();
    // req.assert('data_noticia', 'Data é obrigatório').notEmpty();
    // req.assert('noticia', 'Notícia é obrigatório').notEmpty();

    // var erros = req.validationErrors();

    // if (erros) {
    //     res.render('admin/form_add_noticia', { validacao: erros, noticia: noticia });
    //     return;
    // };

    // var connection = app.config.dbConnection();
     var dolarModel = new app.app.models.Dolar();
     dolarModel.CalcularValorReal(dolar);
    // noticiasModel.salvarNoticia(noticia, function (error, result) {
    //     res.redirect('/noticias');
    // });
}