exports = module.exports = SetupRoutes;
exports['@require'] = ['app', 'express', 'electrolyte'];

function SetupRoutes(app, express, IoC) {
  var router = new express.Router();

  router.post('/reload', IoC.route(__dirname + '/daemon.route.reload'));

  app.use('/daemon', router);
}

