exports = module.exports = daemonFactory;
exports['@require'] = ['src/util/shell', 'src/util/log'];
function daemonFactory(shell, log) {
  return new Daemon(shell, log);
}

var COMMAND = {
  RELOAD: 'sudo ' + __dirname + '/daemon.reload.sh',
};
function Daemon(shell, log) {
  var me = this;

  this.reload = reload;

  function reload() {
    return shell
      .run(COMMAND.RELOAD)
      .then(function () {
        log.info('Reloaded Daemon');
      }, function (error) {
        log.error('Failed to RTG Daemon: ' + error);

        throw error;
      });
  }
}
