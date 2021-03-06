var express = require( 'express' );
var app = express();

// handlebars
var handlebars = require( 'express3-handlebars' )
   .create( { defaultLayout:'main' } )
app.engine( 'handlebars', handlebars.engine );
app.set( 'view engine', 'handlebars' );

app.set( 'port', process.env.PORT || 8080 );

app.get( '/', function( req, res ) {
   res.render( 'home' );
});

// custom 404 page
app.use( function ( req, res ){
   res.type( 'text/plain' );
   res.status( 404 );
   res.send( '404 - Not found' );
});

// custom 500 page
app.use( function( req, res ){
   res.type( 'text/plain' );
   res.status( 500 );
   res.send( '500 - Server Internal Error' );
});

app.listen( app.get( 'port' ), function() {
   console.log( 'Express started on http://localhost' +
      app.get( 'port' ) );
});
