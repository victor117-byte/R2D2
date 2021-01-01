const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
// inicializaciones

const app = express();

// setting
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views') );
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layoutes'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname : '.hbs'
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));


// Global Variables

// Routs
app.use(require('./routes/inde'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));
// Static Files

// Server is listenning
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});