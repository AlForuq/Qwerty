import React from 'react'

export const PeopleChild = ({person}) => {
  return (
      <div  className='card' >
          <h3>{person.name}</h3>
          <p>Gender - {person.gender}</p>
          <p>Birth - {person.birth_year}</p>
    </div>
  )
}
