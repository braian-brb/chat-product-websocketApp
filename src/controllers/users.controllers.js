import User from '../models/User.js'
import passport from 'passport'
import logger from '../utils/logger.js'
export const usersCtrl = {}

usersCtrl.renderSignUpForm = (req, res) => {
  res.render('users/signup')
}

usersCtrl.singUp = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  const errors = []
  if (password !== confirmPassword) {
    errors.push({
      message: 'Passwords do not match'
    })
  }
  if (password.length < 4) {
    errors.push({
      message: 'Password must be at least 4 characters'
    })
  }
  if (errors.length > 0) {
    res.render('users/signup', {
      errors,
      name,
      email,
      password,
      confirmPassword
    })
  } else {
    const user = await User.findOne({ email })
    if (user) {
      req.flash('error_msg', 'The email is alredy taken')
      res.redirect('/users/signup')
    } else {
      const newUser = new User({ name, email, password })
      newUser.password = await newUser.encryptPassword(password)
      await newUser.save()
      req.flash('success_msg', 'You are registered')
      res.redirect('/users/signin')
    }
  }
}

usersCtrl.renderSignInForm = (req, res) => {
  res.render('users/signin')
}

usersCtrl.signIn = passport.authenticate('local', {
  failureRedirect: '/users/signin',
  successRedirect: '/home',
  failureFlash: true
})

usersCtrl.logout = (req, res) => {
  req.logout((_err) => {
    logger.info('Logout success')
  })
  req.flash('success_msg', 'You are logged out now')
  res.redirect('/users/signin')
}
