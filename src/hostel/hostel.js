import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import dataSource from '../api/data';
import HostelsHeader from "./hostelsHeader";


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
              <p>{hostel?.id}</p>
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