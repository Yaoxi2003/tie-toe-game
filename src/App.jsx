import {useState, useRef} from 'react'
import useToggle from './hooks/useToggle'
import data from './data.json'

import Pad from './UI/Pad'
import EndTable from './UI/EndTable'
import GameMenu from './pages/GameMenu'
import GameStart from './pages/GameStart'
import ToggleBtn from './UI/ToggleBtn'
import ScoreBoard from './UI/ScoreBoard'


export default function App() {

  // State value
  const [pad, setPad] = useState(data)
  const [on, toggle] = useToggle(false, checkWin)
  const [end, toggleEnd] = useToggle(false)
  const [mode, setMode] = useState({startGame: false, isSolo: null})
  const [winer, setWiner] = useState(null)
  const [score, setScore] = useState({x: 0, o: 0, tie: 0})
  const [firstPlayer, setFirstPlayer] = useState('x')

  // static value
  const winSet = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]

  // derive value
  const pads = pad.map(
    item => <Pad key={item.id} on={on} changePad={changePad} id={item.id} isCircle={item.isCircle} isClicked={item.isClicked} highlight={item.highlight} />
  )
  

  // functions

  function playerMark(id) {
    if (id === 'o') {
      setFirstPlayer(id)
      toggle()
    }
    else if (id === 'x' && firstPlayer !== 'x') {
      setFirstPlayer(id)
      toggle()
    }
  }

  function changePad(id) {
    setPad(prev => prev.map(
      item => item.id === id && !item.isClicked ?
        {...item, isCircle: on, isClicked: true}
        : item
    ))
    toggle()
  }

  function handleGameStart(gameMode) {
    if (gameMode === 'multiplayer')
    setMode(
      {startGame: true, isSolo: false}
    )
    else {
      setMode(
        {startGame: true, isSolo: true}
      )
    }
  }

  function checkWin() {
      const circleIds = pad
      .filter(item => item.isClicked && item.isCircle)
      .map(item => item.id) 

      const xIds = pad
      .filter(item => item.isClicked && !item.isCircle)
      .map(item => item.id)

      const circleWinRow = winSet.find(winRow => 
          winRow.every(num => circleIds.includes(num))
      )
      const xWinRow = winSet.find(winRow => 
          winRow.every(num => xIds.includes(num))
      )

      if (circleWinRow) {
          setPad(prev => prev.map(
            item => circleWinRow.includes(item.id)
            ? {...item, highlight: true} 
            : item
          ))
          toggleEnd()
          // determine the winner
          setWiner('o')
          // Add point
          setScore(prev => ({...prev, o: prev.o + 1}))
          
      } else if (xWinRow) {
          setPad(prev => prev.map(
            item => xWinRow.includes(item.id)
            ? {...item, highlight: true}
            : item
          ))
          toggleEnd()
          setWiner('x')
          setScore(prev => ({...prev, x: prev.x + 1})) }

      else {
        checkTies()
      }
  }

  function checkTies() {
    const isTies = pad.every(
      item => item.isClicked
    )

    if (isTies) {
      toggleEnd()
      setWiner(null)
      setScore(prev => ({...prev, tie: prev.tie + 1}))
  }
}

  function nextRound() {
    setPad(data)
    toggleEnd()
  }

  function restart() {
    setPad(data)
  }

  function quit() {
    setMode({startGame: false, isSolo: null})
    setScore({x: 0, o: 0, tie: 0})
    toggleEnd()
    setPad(data)
    setWiner(null)
    setFirstPlayer('x')
    if (on) {
      toggle()
    }
  }

  return (
    <main className='relative w-full h-screen'>

      <GameMenu id={firstPlayer} mode={mode} handleGameStart={handleGameStart}>
        <ToggleBtn playerMark={playerMark} firstPlayer={firstPlayer} />
        <GameStart on={on} restart={restart}>
          {pads}
          <ScoreBoard firstplayer={firstPlayer} player='x'>{score.x}</ScoreBoard>
          <ScoreBoard firstplayer={firstPlayer} player='ties'>{score.tie}</ScoreBoard>
          <ScoreBoard firstplayer={firstPlayer} player='o'>{score.o}</ScoreBoard>
        </GameStart>
      </GameMenu>

      <EndTable firstPlayer={firstPlayer} end={end} currentWiner={winer} nextRound={nextRound} quit={quit}/>

    </main>
  )
}

