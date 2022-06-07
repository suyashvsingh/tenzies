import { useEffect, useState } from "react";
import Header from "./components/Header";
import Blocks from "./components/Blocks";
import Button from "./components/Button";
import Confetti from 'react-confetti'

import dataJS from "./data"

let datatemp = structuredClone(dataJS);

function App() {

  console.log(`App rendered`)

  const [data, setData] = useState(datatemp)
  const [over, setOver] = useState(false)

  useEffect(() => {
    let count = 0, last = 0
    data.forEach((box) => {
      if (box.on === true && last === 0) {
        last = box.number
        count++
      }
      else if (box.on === true && last === box.number) {
        count++;
      }
    })
    if (count === 10) {
      setOver(true)
    }
  }, [data])

  function toggle(id) {
    setData(prevData => {
      let newData = prevData.map((box) => {
        if (box.id === id) {
          box.on = !box.on
        }
        return box
      })
      return newData
    })
  }

  function onClick() {
    if (!over) {
      setData(prevData => {
        let newData = prevData.map((box) => {
          if (!box.on) box.number = Math.floor(Math.random() * 6) + 1
          return box
        })
        return newData
      })
    }
    else {
      setData(dataJS)
      setOver(false)
    }
  }

  return (
    <div className="App">
      <Header />
      <Blocks data={data} toggle={toggle} />
      <Button onClick={onClick} over={over} />
      {over && <Confetti />}
    </div>
  );
}

export default App;