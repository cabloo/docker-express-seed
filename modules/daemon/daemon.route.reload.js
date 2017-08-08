exports = module.exports = patch;
exports['@require'] = [__dirname + '/daemon.service'];
function patch(daemon) {
  return [
    saveSettings,
    successResponse,
  ];

  function saveSettings(req, res, next) {
    daemon
      .reload()
      .then(next.bind(null, null), next)
    ;
  }

  function successResponse(req, res) {
    res.success("Daemon reloaded.");
  }
}
