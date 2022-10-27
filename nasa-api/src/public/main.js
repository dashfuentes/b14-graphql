"use strict";

//Declarations

let getBtn = document.querySelector( ".search-place" );


getBtn.addEventListener( "click", ( e ) => {
    e.preventDefault();
	let getCoordinates = document.querySelector("#coordinates").value;
	let getDate = document.querySelector("#date").value;
    let coordinates = getCoordinates.split( "," ); //[]
    const url = location.origin + '/get-image';

	//Global Object
	let queryParams = {
		date: getDate,
		lon: coordinates[0],
		lat: coordinates[1],
    };
    
    async function sendCoordinates( url = "", points ) {
        const response = await fetch( url, {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify( points )
        } );

        return response.json();
    }

    sendCoordinates( url, queryParams ).then( response => {
        console.log(response)
        ////Execution
          
    } )
    
} );


