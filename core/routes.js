const core = require('./core')

module.exports = (app) => {

    app.route('/best_route')
      .get(core.best_route);
}  