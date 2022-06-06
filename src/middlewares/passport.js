import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import User from '../models/User.js'

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      const user = await User.findOne({ email })
      if (!user) {
        return done(null, false, { message: 'Not user found' })
      } else {
        const matchPassBool = await user.matchPassword(password)
        if (!matchPassBool) {
          return done(null, false, { message: 'Incorrect Password' })
        } else {
          return done(null, user)
        }
      }
    }
  )
)

passport.serializeUser((user, done) => {
  done(null, user.id)
})
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
  /*
    Se puede hacer sin cb con async await, ver como manejar el err
    const user = await User.findById(id)
    done (null, user)
    */
})
