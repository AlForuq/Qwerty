import React, { useState } from 'react'
import { Navbar } from './Components/Navbar'
import { People } from './Components/People'
import { Planets } from './Components/Planets'
import { ReactQueryDevtools } from 'react-query/devtools';
export const Main = () => {

    const [pages, setPages] = useState('Planets')

  return (
    
    <>
      <div className='Main'>

        <h1>Star Wars Info</h1>
        <Navbar pages={pages} setPages={setPages} />

        <div className='content' >
          {pages === 'People' ? <People /> : <Planets />}

        </div>
      </div>
        <ReactQueryDevtools initialIsOpen={false} />
    </>
    
  )
}
