import styles from './button.module.css';
// import eventBus from './eventBus'
import { useEffect, useState } from 'react';
import casino from './BonanzaCasino';
import Modal from './Modal';
import modalStyles from './modal.module.css';
const ButtonUI = () =>{
  const [isModalOpen, setIsModalOpen] = useState(false);
   const handleClick = (e) => {
      e.preventDefault();
      console.log("test")
      casino.publish('roundStarted', "roundStarted...");   
      setTimeout(() => {
        betAccepted(); 
      }, 500);
    };
    
     useEffect(()=>{
      const handleGameReady = (data) => {
        console.log("gameReady=>", data);
        setTimeout(() => {
          casino.publish('initGame', "initGame....");
        }, 500);
      };
      const handleGameLoaded = (data) => {
        console.log("gameLoaded=>", data);
        casino.publish('startGame', "startGame....");
      };
      const handleGameStarted = (data) => {
        console.log("gameStarted=>", data);
      };
      // Subscribe to events when the component mounts
      casino.subscribe('gameReady', handleGameReady);
      casino.subscribe('gameLoaded', handleGameLoaded);
      casino.subscribe('gameStarted', handleGameStarted);
      // Cleanup the subscriptions when the component unmounts
      return () => {
        casino.events.removeListener('gameReady', handleGameReady);
        casino.events.removeListener('gameLoaded', handleGameLoaded);
        casino.events.removeListener('gameStarted', handleGameStarted);
      };
     }, [])
   
   
   
     const betAccepted = () =>{  
      casino.publish('betAccepted',  {betAccepted: { bet:50, balance:5000}});
    }

    const toggleInfo = () =>{
      setIsModalOpen(!isModalOpen);
    };
    return <div className={styles.buttonUI}>
    <div className={styles.demopriceDiv}>
    <span>Balance</span>
    <span>$5000</span>
    </div>
    <div className={styles.demopriceDiv}>
    <span>Win</span>
    <span>$50</span>
    </div>
  
  <div className={styles.betAction}>
    <span>Bet</span>
    <button name='decrease'>-</button>
    <span>$2.00</span>
    <button name='increase'>+</button>
  </div>
  <div className={styles.spinBtn}>
    <button name='playSpin' onClick={handleClick}>Play Spin</button>
  </div>
  <div className={styles.spinBtn}>
    <button name='info' onClick={toggleInfo}>Info</button>
  </div>
  {isModalOpen && (<Modal>
    <h1>Game Info</h1>
    <button onClick={toggleInfo} className={modalStyles.close}>Close</button>
  </Modal>)}
  </div>
}

export default ButtonUI;