import React from 'react'
import './Character.css'

const Character = (character) => {
  const [turned, setTurned] = React.useState(false)

  return (
    <div className='characterCard '>
      <h2>{character.character.name}</h2>
      <p className={character.character.status}>
        {character.character.species} - {character.character.status}
      </p>
      <img
        className={turned ? 'turned' : 'img'}
        src={character.character.image}
        alt={character.character.name}
        onClick={() => {
          setTurned(!turned)
        }}
      />
    </div>
  )
}

export default Character
