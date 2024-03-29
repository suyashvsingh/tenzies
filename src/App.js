import { useEffect, useState } from "react";
import Header from "./components/Header";
import Blocks from "./components/Blocks";
import Button from "./components/Button";
import Confetti from "react-confetti";
import AppContext from "./components/context";

function App() {
  let createRandomDice = () => {
    let data = [];
    for (let i = 0; i < 10; i++) {
      let number = Math.floor(Math.random() * 6) + 1;
      data.push({ id: i + 1, number: number, on: false });
    }
    return data;
  };

  const [data, setData] = useState([...createRandomDice()]);
  const [over, setOver] = useState(false);
  //count
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!over) {
      setData([...createRandomDice()]);
      setCount(0);
    }
  }, [over]);

  useEffect(() => {
    let count = 0,
      last = 0;
    data.forEach((box) => {
      if (box.on === true && last === 0) {
        last = box.number;
        count++;
      } else if (box.on === true && last === box.number) {
        count++;
      }
    });
    if (count === 10) {
      setOver(true);
    }
  }, [data]);

  function toggle(id) {
    setData((prevData) => {
      let newData = prevData.map((box) => {
        if (box.id === id) {
          box.on = !box.on;
        }
        return box;
      });
      return newData;
    });
  }

  function onClick() {
    if (!over) {
      setCount(count + 1);
      setData((prevData) => {
        let newData = prevData.map((box) => {
          if (!box.on) box.number = Math.floor(Math.random() * 6) + 1;
          return box;
        });
        return newData;
      });
    } else {
      setData(data);
      setOver(false);
    }
  }

  return (
    <AppContext.Provider value={{ data, toggle, onClick, over, count }}>
      <div className="App">
        <Header />
        <Blocks />
        <Button />
        {over && <Confetti />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
