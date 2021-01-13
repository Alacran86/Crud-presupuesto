var express = require('express');
var router = express.Router();
var pool = require('../bd');

// router.get('/', (req, res)=>{
//     res.render('signup');


// });

router.get('/signup', (req, res)=>{
    res.render('signup');


});

router.post('/signup', async (req, res)=>{
    let {fullname, username, password} = req.body;
    let newOperation = {
        fullname,
        username,
        password
    };
    
    await pool.query('INSERT INTO users set ?' , [newOperation]);
    res.render('success',{mensaje:"Se ha registrado correctamente!!"});
});
    
   
    

router.get('/signin', (req, res)=>{
    res.render('signin');


});

// Averiguar como hacer para que cuando se loguee con su clave y usuario me muestre el msj

router.get('/:User_ID', async function(req, res, next) {
    let username = await (pool.query("select * from username where User_ID = '" + 
                            req.params.User_ID + "'"));

                            
    res.status(200).json(username);      
});

router.post('/signin', async (req, res)=>{
    
    
    let username = await (pool.query("select * from username where User_ID = '" + 
                            req.params.User_ID + "'"));

    
    res.render('success',{mensaje:"Ha iniciado sesion"});
});



module.exports = router;