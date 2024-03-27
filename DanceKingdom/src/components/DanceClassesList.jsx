import React, { useState, useEffect } from 'react';
import { getAllDanceClasses, subscribeToClass } from '../services/auth.service';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function DanceClassesList() {
  const [danceClasses, setDanceClasses] = useState([]);

  useEffect(() => {
    const fetchDanceClasses = async () => {
      try {
        const classes = await getAllDanceClasses();
        setDanceClasses(classes);
      } catch (error) {
        console.error('Error fetching dance classes:', error);
      }
    };

    fetchDanceClasses();
  }, []);

  const handleSubscribe = async (classId) => {
    try {
      // Instead of subscribing directly here, let's navigate to the class details page
      // You can use the classId to construct the URL
      window.location.href = `/dance-classes/class/${classId}`;
    } catch (error) {
      console.error('Error navigating to class details:', error);
    }
  };

  return (
    <div style={{ padding: '50px' }}>
    
      <h1>Dance Classes</h1>
      <Container>
      <Row xs={1} md={2} lg={2}>
        {danceClasses.map((danceClass) => (
          <Col key={danceClass._id} className="mb-4">
            <Card className="dance-class">
              <Card.Body>
                <Card.Title>{danceClass.title}</Card.Title>
                <Card.Text>📅 Day: {danceClass.day}</Card.Text>
                <Card.Text>⏰ Time: {danceClass.time}</Card.Text>
                <Card.Text>👩‍🏫 Teacher: {danceClass.teacher.firstName}</Card.Text>
                <button className="btn btn-primary mr-2" onClick={() => handleSubscribe(danceClass._id)}>More Information</button>
                <button className="btn btn-success" onClick={() => alert('You successfully subscribed for the class')}> Subscribe </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
}

export default DanceClassesList;




