import './App.css';
import ButtonUI from './ButtonUI';
import MyForm from './MyForm';
import PublisherComponent from './PublisherComponent';
import SubscriberComponent from './SubscriberComponent';
// import styles from "./button.module.css";


function App() {
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Form</h1>
        <MyForm/>
      <PublisherComponent />
      <SubscriberComponent />
        <ButtonUI/>
        </header>
        
    </div>
  );
}

export default App;
