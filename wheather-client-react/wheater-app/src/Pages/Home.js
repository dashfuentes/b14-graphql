import React, {useState} from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_WEATHER_QUERY } from "../graphql/Queries";

const Home = () => {

    debugger

    const [citySearch, setCitySearched] = useState( "" )
    
    const [getWheatherInfo, { data, error }] = useLazyQuery( GET_WEATHER_QUERY, {
        variables: { name: citySearch },
    } );

    if(error) return <h1>Not Found</h1>
    
    if ( data ) {
        console.log( data ) 
    }
   
    
  return (
      <div className='home'>
          <h1>Search Country Weather</h1>
          <input
              type="text"
              placeholder='City name..'
              onChange={( event ) => {
                  //console.log( event.target.value )
                  setCitySearched(event.target.value)
              }}
          />
          <button onClick={() => getWheatherInfo() }>Search</button>
          { data && (
              <>
                  <h1>{data.getCityByName.name}</h1>
                  <h1>Max Temperature : {data.getCityByName.weather.temperature.max}</h1>
                  <h1>Wind Speed: { data.getCityByName.weather.wind.speed}</h1>
              </>
          )}
    </div>
  )
}

export default Home

