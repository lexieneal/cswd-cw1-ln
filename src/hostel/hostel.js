import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import dataSource from '../api/data';
import HostelsHeader from "./hostelsHeader";
import { Loader } from "@googlemaps/js-api-loader";
import AddNewRating from '../ratings/ratings';
import Reviews from '../reviews/reviews';

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

  // Start of Google Maps Integration

  const loader = new Loader({
    apiKey: "AIzaSyD7hs3VktlDqZzLhytKxcnokE6p2Vq5FkI",
    version: "weekly"
  });

  const location = hostel?.location //gets the location from the api
  const lat = location?.lat //separates the latitude
  const lng = location?.long //separates the longitude
  
  console.log(location)
  console.log(lat)
  console.log(lng)

  const mapOptions = {
    center: {
      lat: Number(+lat), //uses the latitude from the api 
      lng: Number(+lng)  //uses the longitude from the api 
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
              <h1 className="custom2">Contact Details</h1>
              <p><b>Email:</b> <a href={`mailto: ${hostel?.email}`}>{hostel?.email}</a><br></br>
              <b>Phone No:</b> {hostel?.phone}</p>
              <h1 className="custom2">Location</h1>
              <p><b>Address:</b> {hostel?.address}<br></br>
              <b>Postcode:</b> {hostel?.postcode}</p>
            </Col>
            <Col>              
              <h1 className="custom2">Map</h1>
              <div id="map" style={{width: '100%', height:'400px'}}></div>
            </Col>
          </Row>

          <hr></hr>

          <Row>
            <Col>
            <h1 className="custom2">Amenities</h1>
            <table style={{width: '100%'}}>
              <tbody>
              <tr>
                <td style={{width: '50%'}}>Cafe on site</td>
                <td>{ hostel?.cafe ? '✔️' : '❌' }</td>
              </tr>
              <tr>
                <td>Private rooms</td>
                <td>{ hostel?.private ? '✔️' : '❌' }</td>
              </tr>
              <tr>
                <td>Laundry facilities</td>
                <td>{ hostel?.laundry ? '✔️' : '❌' }</td>
              </tr>
              <tr>
                <td>Kitchen facilities</td>
                <td>{ hostel?.kitchen ? '✔️' : '❌' }</td>
              </tr>
              <tr>
                <td>Wifi available</td>
                <td>{ hostel?.wifi ? '✔️' : '❌' }</td>
              </tr>
              <tr>
                <td>Free breakfast</td>
                <td>{ hostel?.breakfast ? '✔️' : '❌' }</td>
              </tr>
              <tr>
                <td>Curfew enforced</td>
                <td>{ hostel?.curfew }</td>
              </tr>
              </tbody>
            </table>

            </Col>
            <Col>
              <h1 className="custom2">Ratings</h1>
              <p>So far <b>{hostel?.ratings.length}</b> ratings have been left for this hostel.</p>
              <p>The average rating is:<br></br>
              {'⭐️ '.repeat(avg)} {avg}/5 stars</p>
            </Col>
          </Row>

          <hr></hr>

          <Row>
          <Col>
          <h1 className="custom2">Reviews</h1>
          <p>Put reviews here</p>
          </Col>
          </Row>

<hr></hr>


        </Container>

    </div>
  )
}

export default Hostel;