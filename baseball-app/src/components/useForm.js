import React from "react";
import { useInput } from "./useInput.js";

const CustomForm = () => {
    const [strike, setStrike] = useInput(0);
    const [ball, setBall] = useInput(0);
    const [foul, setFoul] = useInput(0);
    const [hit, setHit] = useInput(0);


    const handleStrikes = () => {
        if (strike < 3)
        {
          setStrike(strike + 1);
        }
        else if (strike === 3){
          setStrike(0);
          setFoul(0);
          setBall(0);
        }
      }

      const handleBalls = () => {
        if (ball < 4)
        {
          setBall(ball + 1);
        }
        else if (ball === 4){
          setStrike(0);
          setFoul(0);
          setBall(0);
        }
      }

      const handleFouls = () => {
        if (strike < 2)
        {
          setStrike(strike + 1);
          setFoul(foul + 1)
        }
        else if (strike === 2){
          setStrike(2);
          setFoul(foul + 1);
        }
      }

      const handleHits = () => {
        setHit(hit + 1, setStrike(0), setBall(0), setFoul(0))
      }
  
    return (
        <div className="container">
            <div className="home">
              <div> Strikes: {strike}</div>
              <div> Balls: {ball}</div>
              <div> Fouls: {foul}</div>
              <div> Hits: {hit}</div>
            </div>
        <section>
          <div className="buttons">
            <button onClick={handleStrikes}>Strike</button>
            <button onClick={handleBalls}>Ball</button>
            <button onClick={handleFouls}>Foul</button>
            <button onClick={handleHits}>Hit</button>
          </div>
        </section>
      </div>
    );
  };

  export default CustomForm;