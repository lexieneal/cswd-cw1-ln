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
              <p>{hostel?.description}</p>
            </Col>
            <Col>
              <p>Has Cafe?</p>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3>Contact</h3>
              <a href={`mailto: ${hostel?.email}`}>{hostel?.email}</a>
              <p>{hostel?.phone}</p>
            </Col>

            <Col>
              <h3>Location</h3>
              <p>{hostel?.address}</p>
              <p>{hostel?.postcode}</p>
            </Col>
          </Row>

          <Row>
            <Col>
            <p>Total ratings: {hostel?.ratings.length}</p>
            </Col>
          </Row>
        </Container>

    </div>
  )
}

export default Hostel