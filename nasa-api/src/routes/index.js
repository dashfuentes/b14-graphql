const express = require( 'express' );
const router = express.Router();

router.get( '/', ( req, res ) => {
    res.render( "layouts/main" );
} );

//
router.post( '/get-image', ( req, res ) => {
    console.log( 'posting.....', req.body )
    const { lon, lat } = req.body;
    ///Transform new date() to YYYY-MM-DD
    const date = req.body.date ? req.body.date : new Date();


     
    return res.json({message: 'success'})

} )



module.exports = router;