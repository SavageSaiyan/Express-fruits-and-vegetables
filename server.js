const express = require('express')
const app = express();
const fruits = require('./models/fruits.js');
const vegetables = require('./models/vegetables.js');

//Setting up view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());



//ROUTES
//index
app.get('/fruits', (req, res)=>{
    res.render("fruits/Index", {
        fruits: fruits
    })
});


//show
app.get('/fruits/:indexOfFruitsArray', (req, res)=>{
    res.render('fruits/Show', {
        fruit: fruits[req.params.indexOfFruitsArray]
    })
})



app.get('/vegetable', (req, res)=>{
    res.render("veggies/Index", {
        vegetables: vegetables
    })
});


//show
app.get('/vegetable/:indexOfVegetablesArray', (req, res)=>{
    res.render('veggies/Show', {
        vegetables: vegetables[req.params.indexOfVegetablesArray]
    })
})





app.listen(3000, ()=> {
    console.log('listening')
})