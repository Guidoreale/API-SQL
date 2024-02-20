import express from 'express';

const app = express();

app.set('port', process.env.PORT || 3000);

app.use("/", (req, res) => {
    res.send('Bienvenido a mi api con bdd');
});



app.listen(3000, () => {
    console.log('Server running on port', app.get('port'));
});