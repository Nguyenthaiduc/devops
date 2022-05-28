import express from 'express';

const app = express();

app.get('/', (req, res) => 
    res.json(process.env.WELCOME_MESSAGE 
        ? `${process.env.WELCOME_MESSAGE}` 
        : 'Hello to Local Host not environment ENV')
)
const PORT = 4000;

app.listen(PORT,()=> console.log(`Server start in PORT ${PORT}`))



