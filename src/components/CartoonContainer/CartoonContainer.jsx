import React, { useState, useEffect } from 'react'
import Character from '../Character/character'
import './cartoonContainer.css'

const CartoonContainer = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    // const getData = async () => {
    //   const data = await fetch(`https://rickandmortyapi.com/api/character/`)
    //   const dataJSon = await data.json()
    //   return dataJSon
    // }
    // getData().then((dataJSon) => setCharacters(dataJSon.results))
    fetch(`https://rickandmortyapi.com/api/character/`)
      .then((response) => response.json())
      .then((res) => setCharacters(res.results))
  }, [])

  return (
    <div className='cartoonContainer'>
      {characters?.map((char) => (
        <Character character={char} />
      ))}
    </div>
  )
}

export default CartoonContainer

// {characters.map((c) => (
//   <Character
//     name={c.name}
//     species={c.species}
//     status={c.status}
//     image={c.image}
//   />
// // ))}
