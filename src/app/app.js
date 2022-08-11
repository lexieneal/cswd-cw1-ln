import React, {useState, useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Hostels from "../hostel/hostels";
import Homepage from "../homepage/homepage";
import dataSource from '../api/data';
import Hostel from '../hostel/hostel';
import NavBar from '../navbar/nav';

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
      <div className="Navigation">
        <NavBar/>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="hostels/*" element={<Hostels hostels={hostels} />}/>
            <Route path="hostels/:id" element={<Hostel hostels={hostels} />}/>
            <Route path=':id' element={<p>Page not found: Please try again</p>}/>
          </Routes>
      </div>
    </BrowserRouter>

  );
  }
