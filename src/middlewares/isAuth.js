export const helpers = {}

helpers.isAuth = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash('error_msg', 'Not Authorized')
    res.redirect('/users/signin')
  } else {
    return next()
  }
}
