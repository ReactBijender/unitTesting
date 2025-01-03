import { lazy, Suspense } from 'react';
import './App.css';
import ButtonUI from './ButtonUI';
// import PublisherComponent from './PublisherComponent';
// import SubscriberComponent from './SubscriberComponent';
// import styles from "./button.module.css";
// import eventEmitter from './event';
// import MyComponent from './MyComponent';
import MyForm from './MyForm';
import MyListing from './MyListing';
const MyComponent = lazy(()=>import('./MyComponent'));
const withHoc = (WrappedComponent)=>{
  return (props)=>{
    return <WrappedComponent {...props}/>;
  }
}

const Heading = (props) =>{
  return <h1>{props.title}</h1>
}
const HocCall = withHoc(Heading);
function Practice() {
  
  // const callEvent = (data) => {
  //   console.log(`Hello,`, data);
  // }

  // eventEmitter.on('callEvent', callEvent);
  
  return (
    <div className="App">
      <header className="App-header">
        <HocCall title={`Simple Form`}/>
        {/* <h1>Simple Form</h1> */}
        <MyForm/>
      {/* <PublisherComponent />
      <SubscriberComponent /> */}
        <ButtonUI/>
        <Suspense fallback={<h1>Loading... </h1>}>
        <MyComponent/>
        </Suspense>
        
        <MyListing/>
        </header>
        
    </div>
  );
}

export default Practice;
