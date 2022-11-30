import express from 'express';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import { engine } from 'express-handlebars';


const app = express();
const PORT = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));


app.engine('hbs', engine({
    defaultLayout:'main.hbs',
    helpers: {
        formatFun () {
            return 'this type function to support display in hbs file';
        }
    }
}));


// su dung handlebars
app.set('view engine', 'hbs');
app.set('views', './views');

//ket noi voi folder public de dung css
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('home');
});

app.listen(PORT,() => {
    console.log(`Example app listening on port ${PORT}`)
});