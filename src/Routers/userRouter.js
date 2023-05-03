import {Router} from 'express';

const userRouter = Router();
export default userRouter;

userRouter.get('/', (req, res) => {
    res.redirect('/login');
});

userRouter.get('/login', (req, res) => {
    res.render('login');
})

userRouter.get('/register', (req, res) => {
    res.render('registro');
});

userRouter.get('/perfil', (req, res) => {
    if (req.isAuthenticated()) {
        console.log(req['user']);
        res.render('perfil', {usuario: req['user']});
    } else {
        res.redirect('/login');
    }
    
})



