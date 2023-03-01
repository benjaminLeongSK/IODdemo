const express = require('express');
const app = express();
const port1 = 3000;
// const port2 = 8000;
const userRoutes = require('./routes/userRoutes');
const calculatorRoutes= require('./routes/calculatorRoute')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/', express.static('public'));
app.use('/users', userRoutes);
app.use('/calculator', calculatorRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// app.get('/', (req, res) => {
//     res.send("Hello")
// })
// app.get('/profile', (req,res) => {
//     res.send("You are at profile page")
// })


app.listen(port1, () => {
    console.log(`webserver running at port ${port1}`)
});

// app.listen(port2, () => {
//     console.log(`webserver running at port ${port2}`)
// });