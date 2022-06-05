export const usersCtrl = {}

usersCtrl.renderSignUpForm = (req, res) => {
    res.render('users/signup')
}

usersCtrl.singUp = (req, res) =>{
    res.send('singup')
}

usersCtrl.renderSignInForm = (req, res) =>{
    res.render('users/signin')
}

usersCtrl.signIn = (req, res) =>{
    res.send('signin')
}

usersCtrl.logout = (req, res) =>{
    res.send('logout')
}