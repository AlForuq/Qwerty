import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { PeopleChild } from '../PeopleChild'



export const People = () => {
  const [page, setPage] = useState(1)
  
  const { data, status } = useQuery(['people', page], () => {
    return fetch(`https://swapi.dev/api/people/?page=${page}`).then((res) => res.json()
    );
  })
  
  return (
    <div>

      <h2>People</h2>
      <button  style={{ color: page === 1 ? "#ffff57" : "white" }} onClick={() => setPage(1)} >Page 1</button>
      <button  style={{ color: page === 2 ? "#ffff57" : "white" }} onClick={() => setPage(2)} >Page 2</button>
      <button  style={{ color: page === 3 ? "#ffff57" : "white" }} onClick={() => setPage(3)} >Page 3</button>

      {status === 'error' && (
        <div>Error Occured</div>
      )}
      
      {status === 'loading' && (
        <div>Error Occured</div>
      )}

      {status === 'success' && (
        data.results.map(person => <PeopleChild key={person.name} person={person} />)
      )}
    </div>
  )
}
