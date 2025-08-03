import React,{useState} from 'react'
import './index.css';

function App() {
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [solved, setSolved] = useState([]); 

  const arr =  ['😚','😋','🤨','🥶','a','🤩','🥶','😚','🤨','🤓','👺','😋','🤓','👺','🤩'];

  const handleClick = (value, index) => {
    // prevent clicking solved or clicking the same card twice
    if (solved.includes(index) || (firstCard && firstCard.index === index)) return;

    if (firstCard === null) {
      setFirstCard({ value, index });
    } else if (secondCard === null) {
      setSecondCard({ value, index });

      if (firstCard.value === value) {
        setSolved([...solved, firstCard.index, index]);
      }

      // reset for next turn
      setTimeout(() => {
        setFirstCard(null);
        setSecondCard(null);
      }, 600);
    }
  };

  return (
    <div className="App">
      {arr.map((value, index) => (
        <button
          key={index}
          onClick={() => handleClick(value, index)}
          className={solved.includes(index) ? "matched" : ""}
        >
          {value}
        </button>

      ))}
    </div>
  );
}

export default App;
