import React, { useState, useEffect } from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Hostels from "./Hostels";
import Homepage from "./Homepage";
import dataSource from './data';

export default function App() {
  const [hostels, setHostels] = useState([])

  useEffect(() => {
    const fetchedHostels = async () => {
      try {
        const response = await fetch(`${dataSource.baseURL}hostels`, {
        method: 'GET',
        headers: dataSource.headers
      })
        const json = await response.json()
        setHostels(json)
      } catch (error) {
        console.error(error)
        return null
      }
    }
    fetchedHostels()
  }, [])

  return (
    <BrowserRouter>
    <div>
      <Link to="/">Homepage</Link>
      <Link to="/hostels">Hostels</Link>
    
    

    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/hostels" element={<Hostels />} />
      <Route path=':id' element={<p>Page not found: Please try again</p>}/>
    </Routes>
    </div>
    </BrowserRouter>

  );
  }
