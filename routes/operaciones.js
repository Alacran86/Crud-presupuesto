var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest: './uploads/'});
var fs = require('fs');
var pool = require('../bd');

/* GET users listing. */

router.get('/', async function(req, res, next) {
    let operación =  await pool.query("select * from presupuesto");
    res.render('listadoOperaciones', {data:operación});
});

router.get('/altaOperacion', async function(req, res, next) {
    
    res.render('altaOperacion');
});


router.post('/altaOperacion', async (req, res)=>{
    const {concepto, monto, fecha, tipo} = req.body;
    const newOperation = {
        concepto,
        monto,
        fecha,
        tipo
    };
    
    await pool.query('INSERT INTO presupuesto set ?' , [newOperation]);
    res.render('success',{mensaje:"Operación exitosa"});
    
    });


    
    router.get('/modificarOperacion/:id', async function(req, res, next) {
        
        let accion = await pool.query("select * from presupuesto where id = " + req.params.id);

        res.render('modificarOperacion' , {data:accion});
    });

    router.post('/modificarOperacion/:id', upload.none() , async function(req, res) {
       
     let sentencia;

      sentencia = `update presupuesto
      set concepto  = '${req.body.concepto}',  
      monto  = '${req.body.monto}',
      fecha  = '${req.body.fecha}',
      tipo = '${req.body.tipo}' 
       where id = ${req.params.id} 
       `
    
       let resultado = await pool.query(sentencia);
       

    res.render('success',{mensaje:"Operaciòn exitosa"});
});
        
   

    router.get('/eliminarOperacion/:id', async function(req, res, next) {
        
    let accion = await pool.query("delete from presupuesto where id = " + req.params.id);

    res.render('success',{mensaje:"Operaciòn eliminada exitosamente!"});
});

    

    

module.exports = router;