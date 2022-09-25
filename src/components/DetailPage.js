import { useState, useEffect } from 'react'
import { getApiData } from '../ApiRequests'
import './DetailPage.css';

function DeatialPage(props) {
const [ moves, setMoves] = useState();
const [ abilities, setabilities] = useState({name: null});

  const {
    info,
  } = props

  useEffect(() => {
    if(info.moves)
    setMoves(info.moves.map(move => <div>{move.move.name}</div>))
    getApiData(info.abilities[0].ability.url).then((response) => {
      setabilities(response)
    })
  }, [info])

  return (
    <div>
        <img src={info.sprites.front_default} />
        <div>Name: {info.name}</div>
        <div>Ability: {abilities.name}</div>
        <div className={'moves'}>Moves: {moves}</div>
    </div>
  );
}

export default DeatialPage;
