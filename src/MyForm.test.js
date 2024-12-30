import { fireEvent, render, screen } from "@testing-library/react";
import MyForm from "./MyForm";

describe("MyForm", ()=>{
    test('renders from elements', ()=>{
        render(<MyForm/>);//render: Renders the component to the DOM.

        //check if input fields are rendered
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();//screen: Provides access to DOM nodes in the rendered output.
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByText(/submit/i)).toBeInTheDocument();
    });
    test('displays error messag when fields are empty and form is submitted', ()=>{
        render(<MyForm/>);
        // try to submit the form without filling it
        fireEvent.click(screen.getByTestId('submit-button')); // Simulates events such as click, change, etc., to trigger user interactions.
        // check if error message is displayed
        expect(screen.getByTestId("error-name-message")).toHaveTextContent("Name is required");
        expect(screen.queryByTestId("error-email-message")).toHaveTextContent("Email is required");
    });
    test('handles form input change correctly', ()=>{
        render(<MyForm/>);
        // Type in the input fields
        fireEvent.change(screen.getByTestId('name-input'), { target: { value: "Bijender" } });
        fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'react.bijender@gmail.com' } });

        // Check if the inpute fields have the correct value
        expect(screen.getByTestId('name-input').value).toBe('Bijender'); // Retrieves elements by data-testid attribute to target specific elements easily in tests.
        expect(screen.getByTestId('email-input').value).toBe('react.bijender@gmail.com');

    });
    test('submits the form correctly with valid input', ()=>{
        render(<MyForm/>);
        // fill the form
        fireEvent.change(screen.getByTestId('name-input'), { target: { value: 'Bijender' } });
        fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'react.bijender@gmailcom' } });
        // submit the form
        fireEvent.click(screen.getByTestId('submit-button'));
        // Here you could check the form submission logic, such as callingan API, 
        // For now, we will assume the form submission succeeds and no error message shoudl be displayed
        expect(screen.queryByTestId('error-message')).not.toBeInTheDocument(); // Similar to getByTestId, but it returns null if the element is not found, so you can check for the absence of an element.

    });
});
