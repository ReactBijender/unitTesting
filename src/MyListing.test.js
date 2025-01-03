// import { render, screen } from "@testing-library/react";
// import axios from "axios";
// import MyListing from "./MyListing";
// jest.mock('axios');
// describe('MyListing', ()=>{
//    test('fetches data and renders it', async ()=>{
    // axios.get.mockResolvedValue({ data: { name: { title: "Mr.", first: "Rohan", last: "Singh" }, picture: { thumbnail: "/yest.png" } } });
   
    // render(<MyListing/>);
    // const nameElement = await screen.findByText('Rohan');
    // expect(nameElement).toBeInTheDocument();
//    });
// });
// src/components/MyListing.test.js
import { render, screen } from '@testing-library/react';
// import axios from 'axios';
import MyListing from './MyListing';

// Mocking axios
// jest.mock('axios');
global.fetch = jest.fn();
describe('MyListing', () => {
    test('shows loading text initially', () => {
        render(<MyListing />);
        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
      });
 

  test('fetches and displays user data', async () => {
    // Mock response data for a successful API call
    const mockUserData = {
      results: [
        {
          name: { title: 'Mr', first: 'John', last: 'Doe' },
          gender: 'male',
          picture: { thumbnail: 'https://randomuser.me/api/portraits/men/1.jpg' },
        }
        // {
        //   name: { title: 'Ms', first: 'Jane', last: 'Smith' },
        //   gender: 'female',
        //   picture: { thumbnail: 'https://randomuser.me/api/portraits/women/2.jpg' },
        // },
      ],
    };
    
    // Mocking axios.get to resolve with mockUserData
    // axios.get.mockResolvedValue({ data: mockUserData });
    fetch.mockResolvedValueOnce({ ok: true, json: async()=> mockUserData });

    render(<MyListing />);

    // Wait for the component to re-render with the fetched data
    await screen.findByText(/John Doe/i);

    // Check if the correct user information is displayed
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    // expect(screen.getByText(/Jane Smith/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();  // Check if images are displayed
    await screen.findByText(/List of prpduct/i);
    await expect(screen.getByText(/List of prpduct/i)).toBeInTheDocument();
  });
  /*test('renders loading state initially', async () => {
    render(<MyListing />);
    // Check if the table is rendered initially (could be any loading indicator)
    await screen.findByText(/List of prpduct/i);
    await expect(screen.getByText(/List of prpduct/i)).toBeInTheDocument();
  });*/

 /* test('displays error message when API call fails', async () => {
    // Mocking axios.get to reject with an error
    // axios.get.mockRejectedValue(new Error('Failed to fetch data'));

    render(<MyListing />);

    // Wait for the component to handle the error
    await screen.findByText(/List of prpduct/i);

    // Check if the error handling mechanism works
    expect(screen.queryByText(/John Doe/i)).not.toBeInTheDocument();  // Data shouldn't be rendered
  });*/
 /* test('displays error message on fetch failure', async () => {
    fetch.mockRejectedValueOnce(new Error('Failed to fetch data'));

    render(<MyListing />);

    await screen.findByText(/Failed to fetch data/i);

    expect(screen.getByText(/Failed to fetch data/i)).toBeInTheDocument();
  });*/
});
