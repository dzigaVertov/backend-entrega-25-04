export function loginController(req, res){
    console.log('logincontroller');
    res.status(200).redirect('/perfil');
}
