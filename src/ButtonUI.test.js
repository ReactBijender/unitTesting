import { render, screen, fireEvent } from '@testing-library/react';
import ButtonUI from "./ButtonUI";
import App from "./App";
describe("Button pannel test case", ()=>{
    test("ButtonUI test", ()=>{
        render(<ButtonUI/>);
        const gettext = screen.getByText(/Play/);
        expect(gettext).toBeInTheDocument();
    });
    test("Play Spin", ()=>{
        render(<ButtonUI/>);
        // const handleClick = jest.fn();// Create a mock function for onClick
        // Render the Button component with the mock function passed as onClick
//   render(<Button label="Click Me" onClick={handleClick} />);
        const button = screen.getByText(/Play spin/i);//This queries the DOM to find the button with the text "Play spin". The i flag makes the search case-insensitive.
        fireEvent.click(button); // Simulate a click event
        // render(<App/>);
        const play = screen.getByText(/round started/i);
        expect(play).toBeInTheDocument();
        expect(button).toBeInTheDocument();//This checks that the button with the specified text is present in the document.
        // expect(handleClick).toHaveBeenCalledTimes(0); //— This checks that the handleClick function was called exactly once when the button was clicked.

         // Spy on the handleClick function
//   const spy = jest.spyOn(ButtonUI.prototype, 'handleClick');
        // expect(spy).toHaveBeenCalledTimes(0);// Check that handleClick was called exactly once
        // Cleanup the spy
//   spy.mockRestore();
    });

    
})

/*
// Button.js
import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
*/