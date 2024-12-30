import styles from './button.module.css';
import eventBus from './eventBus'
import {useState} from "react";
const ButtonUI = () =>{
    const [name, setName] = useState("");
    const handleClick = ({onClick}) => {
        // Publish an event with some data
        console.log("round started=>")
        eventBus.publish('newMessage', "round started");
        // onClick();
        setName("round started");
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
  <div className={styles.spinBtn}>{name}
    <button name='playSpin' onClick={handleClick}>Play Spin</button>
  </div>
  </div>
}

export default ButtonUI;