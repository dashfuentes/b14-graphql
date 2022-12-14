const express = require( 'express' );
const exphbs = require( 'express-handlebars' );
const path = require( 'path' );

//Initializations
const app = express();
   //// {'port': 4000. views: '//http://localhost:4000/views'}   app.get.port

//Settings
app.set( 'port', process.env.PORT || 4000 );

//tell node where is the view folder?
app.set( 'views', path.join( __dirname, 'views' ) ) //http://localhost:4000/views

//set handlebars
app.engine( '.hbs', exphbs.engine( {
    defaultLayout: 'main',
    layoutsDir: path.join( app.get( 'views'), 'layouts' ),
    extname: '.hbs'
}))

app.set('view engine', '.hbs')
//middlewares
app.use(express.urlencoded({extended : false}))
app.use(express.json())

//Routes
app.use( require( './routes/index' ) );

//tell node where is the public folder
app.use(express.static(path.join(__dirname, 'public')));

//Start express engine
app.listen( app.get( 'port' ), () => {
    console.log( 'Server is in port', app.get( 'port' ) );
})