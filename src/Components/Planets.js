import React, { useState } from 'react'
import { useQuery } from 'react-query'

import { PlanetChild } from '../PlanetChild'
export const Planets = () => {
    const [page, setPage] = useState(1)


    const { data, status } = useQuery(['Planet', page], () => {

        return fetch(`https://swapi.dev/api/planets/?page=${page}`).then(res => res.json())
    })
   
    return (
      <div>
        <h2>Planets</h2>
        <button
          style={{ color: page === 1 ? "#ffff57" : "white" }}
          onClick={() => setPage(1)}
        >
          {" "}
          Page 1
        </button>
        <button
          style={{ color: page === 2 ? "#ffff57" : "white" }}
          onClick={() => setPage(2)}
        >
          {" "}
          Page 2
        </button>
        <button
          style={{ color: page === 3 ? "#ffff57" : "white" }}
          onClick={() => setPage(3)}
        >
          {" "}
          Page 3
        </button>
        {status === "error" && "Error Occured"}
        {status === "loading" && "Waiting for Success"}
        {status === "success" && <PlanetChild data={data} />}
      </div>
    );


}

