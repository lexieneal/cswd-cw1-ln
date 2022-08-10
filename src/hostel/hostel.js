import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import dataSource from '../api/data';
import HostelsHeader from "./hostelsHeader";
import { Loader } from "@googlemaps/js-api-loader";

const Hostel = () => {
  const { id } = useParams()
  const [hostel, setHostel] = useState()

  useEffect(() => {
    const fetchedHostel = async () => {
      try {
        const response = await fetch(`${dataSource.baseURL}hostels/${parseInt(id)}`, {
        method: 'GET',
        headers: dataSource.headers
      })
        const json = await response.json()
        setHostel(Object(json)[0])
      } catch (error) {
        console.error(error)
        return null
      }
    }
    fetchedHostel()
  }, [id])

  const sum = hostel?.ratings.reduce((a, b) => a + b, 0)
  const avg = (sum / hostel?.ratings.length) || 0

  // Google Maps Integration

  const loader = new Loader({
    apiKey: "AIzaSyB74kBdsBRDHl8sGiOgIK8F2j9rN2cXyH4",
    version: "weekly"
  });

  const location = hostel?.location //gets the location from the api
  const lat = location?.lat //separates the latitude
  const lng = location?.lng //separates the longitude

  const mapOptions = {
    center: {
      lat: Number(lat), //uses the latitude from the api 
      lng: Number(lng)  //uses the longitude from the api 
    },
    zoom: 17
  }
  
  loader.load().then(google => {
    new google.maps.Map(document.getElementById('map'), mapOptions);
  })
  .catch(e => console.log(e))

  
  return (


    <div>
      <HostelsHeader></HostelsHeader>

        <Container>
          <Row>
            <Col>
            <h1 className="custom">{hostel?.name}</h1>
            </Col>
          </Row>

          <Row>
            <Col>
              <h1 className="custom2">Description</h1>
              <p>{hostel?.description}</p>
            </Col>
            <Col>
              {/* <div id="map"></div> */}
            </Col>
          </Row>

          <Row>
            <Col>
              <h1 className="custom2">Contact Details</h1>
              Email: <a href={`mailto: ${hostel?.email}`}>{hostel?.email}</a><br></br>
              Phone No: {hostel?.phone}
            </Col>

            <Col>
            <h1 className="custom2">Location</h1>
              Address: {hostel?.address}<br></br>
              Postcode: {hostel?.postcode}
            </Col>
          </Row>

          <Row>
            <Col>
            <h1 className="custom2">Ratings</h1>
            <span>Avg. Rating: {'⭐️ '.repeat(avg)}</span><br></br>
            Total Ratings: {hostel?.ratings.length}
            </Col>
            <Col>
            <h1 className="custom2">Amenities</h1>
            Cafe: { hostel?.cafe ? 'Yes' : 'No' }
            </Col>
          </Row>
        </Container>

    </div>
  )
}

export default Hostel