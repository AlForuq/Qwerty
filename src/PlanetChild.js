import React from 'react'

export const PlanetChild = ({data: {results}}) => {
  return (
      
         results.map(value => {
             return <div key={value.name} className='card'>
                 <h3>{value.name}</h3>
                 <p>Population - {value.population}</p>
                 <p>Terrain - {value.terrain}</p>
              </div>
          })
    
  )
}
