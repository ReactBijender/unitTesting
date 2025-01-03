import { useEffect, useState } from 'react';
import './App.css';
import ButtonUI from './ButtonUI';
// import eventEmitter from './event';
import casino from './BonanzaCasino';
import Practice from './Practice';
// Publish GameReady
//Subscribe initGame
//publish gameLoaded
//subscribe gameStart
// Publish gameStarted

// roundStarted
// 
function App() {
  // const location = useLocation();
  const queryParams = new URLSearchParams(window.location.search);
  const pageParam = queryParams.get('test'); // Returns '2'
  const [eventName, setEventName] = useState([]);

   // Event listener functions
   const handleInitGame = (data) => {
    console.log(`initGame=>`, data);
    // setEventName((prevState) => [...prevState, data]);
    casino.publish('gameLoaded', "gameLoaded..."); // Publish 'gameLoaded'
  };

  const handleStartGame = (data) => {
    console.log(`startGame=>`, data);
    // setEventName((prevState) => [...prevState, data]);
    casino.publish('gameStarted', "gameStarted..."); // Publish 'gameStarted'
  };

  const handleRoundStarted = (data) => {
    console.log(`roundStarted=>`, data);
    // setEventName((prevState) => [...prevState, data]);
  };

  const handleBetAccepted = (data) => {
    console.log(`betAccepted=>`, data);
    setEventName(data);
  };
  useEffect(() => {
    // Publish the 'gameReady' event when the component mounts
    casino.publish('gameReady', "gameReady...");

    // Subscribe to events when the component mounts
    casino.subscribe('initGame', handleInitGame);
    casino.subscribe('startGame', handleStartGame);
    casino.subscribe('roundStarted', handleRoundStarted);
    casino.subscribe('betAccepted', handleBetAccepted);

    // Cleanup: Unsubscribe from events when the component unmounts
    return () => {
      casino.events.removeListener('initGame', handleInitGame);
      casino.events.removeListener('startGame', handleStartGame);
      casino.events.removeListener('roundStarted', handleRoundStarted);
      casino.events.removeListener('betAccepted', handleBetAccepted);
    };
  }, []); // Empty dependency array ensures the effect runs only once
   



// console.log("eventName=>", eventName)

  
  return (
    <div className="App">
      <header className="App-header">
      {/* <ul>{eventName && eventName.map((list, i)=>{
        return <li key={i}>{list}</li>
      })}</ul> */}
      <p>{JSON.stringify(eventName)}</p>
        <ButtonUI/>
        {pageParam && <Practice/>}
        </header>        
    </div>
  );
}

export default App;
