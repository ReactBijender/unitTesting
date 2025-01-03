/*import React, { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);  // Create a reference

  const handleFocus = () => {
    inputRef.current.focus();  // Access the DOM node directly and focus
    console.log("inputRef=>", inputRef)
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
}

export default MyComponent;
*/
/*
import React, { useEffect, useState } from 'react';

function MyComponent() {
  const [items, setItems] = useState(['apple', 'banana']);

  // useEffect will run on every render, even if `items` didn't change
  useEffect(() => {
    console.log('Effect triggered');
  }, [items]); // Dependency on `items`

  const handleClick = () => {
    // Only update the state if the new value is different
    setItems(prevItems => {
      const newItems = ['apple', 'banana'];
      // Check if the state is actually different before updating
      if (JSON.stringify(prevItems) !== JSON.stringify(newItems)) {
        return newItems;
      }
      return prevItems; // Avoid unnecessary state update
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Set Same Items</button>
    </div>
  );
}

export default MyComponent;
*/
/*import React, { useCallback, useState } from 'react';

const ChildComponent = React.memo(({ onClick }) => {
  console.log('ChildComponent rendered');
  return <button onClick={onClick}>Click me</button>;
});

function MyComponent() {
  const [count, setCount] = useState(0);

  // Using useCallback to memoize the callback
  const memoizedHandleClick = useCallback(() => {
    console.log('Button clicked');
    setCount(prevCount => prevCount + 1);
  }, []);  // No dependencies means this function will stay the same across renders

  return (
    <div>
      <ChildComponent onClick={memoizedHandleClick} />
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;

*/
import React, { useCallback, useState } from 'react';

function ChildComponent({ handleClick }) {
  console.log("ChildComponent re-rendered");
  return <button onClick={handleClick}>Click me!</button>;
}

function MyComponent() {
  const [count, setCount] = useState(0);

 /* const handleClick = () => {
    setCount(count + 1);
  };*/
  // Memoize the callback function
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
}

export default MyComponent;
