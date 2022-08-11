import 'bootstrap/dist/css/bootstrap.css';
import './hostels.css';
import HostelsHeader from './hostelsHeader'
import React, {useState} from 'react';
import {Col, Container, ListGroup, Row, InputGroup, FormControl} from 'react-bootstrap';
import ListItem from './hostelListItem';

const Hostels = ({hostels}) => {
    const [searchString, setSearchString] = useState('')
    return (
      <div>
        <HostelsHeader></HostelsHeader>
        <Container>
        <Row> 
          <Col>
            <h1 className="custom">Hostels</h1>
          </Col>
        </Row>

        <Row>
          <Col>
          <p>Choosing to stay in hostels is one of the best ways to meet new people, keep costs low and lesson your impact 
            on the planet. It can enrich your travel experience without costing any extra money and provides heaps of other benefits 
            such as having somewhere to do laundry, somewhere to make meals and social events to meet people as you travel.
          </p>
          <p>Please find below a list of hostels to choose from, each with their current rating. Selecting a hostel 
            will display more information including amentities, locations, contact information and reviews from other travellers.
          </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
              <FormControl
                placeholder="Find a specific hostel here..."
                type='text'
                onChange={e => setSearchString(e.target.value)}
              />
            </InputGroup>
          </Col>
        </Row>

        <ListGroup>
          {hostels.filter(hostel => {
            if (searchString === '') {
              return hostel
            } else if (hostel.address.toLowerCase().includes(searchString.toLowerCase())) {
              return hostel
            } else {
              return null
            }
          }).map(hostel => <ListItem className='ListItem' key={hostel.id} hostel={hostel}/>)}
        </ListGroup>

        </Container>
      </div>
    )
  }

export default Hostels;