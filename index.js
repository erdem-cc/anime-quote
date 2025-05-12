import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;
const url = `https://yurippe.vercel.app/api/quotes`;

app.use(express.static('public'));


app.get('/', async (req, res) => {
    try {

        const response = await axios.get(url);
        const data = response.data;
        const random = Math.floor(Math.random() * data.length);
        const content = data[random];

        res.render('index.ejs', {content: content});

    } catch (error) {
        console.log(error);
    }
});

app.listen(port, '0.0.0.0', () => { console.log(`listening on port ${port}`) });