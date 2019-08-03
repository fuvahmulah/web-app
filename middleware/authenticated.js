export default function (app) {

  if (app.route.query.code && app.$auth.loggedIn) {
    let params =  app.route.query;
    delete params.code;
    delete params.state;
    app.redirect(app.route.path)
  }
}
