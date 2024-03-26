// DanceClassDetailsPage.jsx
import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DanceClassDetails from '../components/DanceClassDetails';
import { AuthContext } from '../context/auth.context';
import CommentSection from '../components/commentSection'; // Import the CommentSection component
import danceClassService from '../services/danceClass.services';
import { Container, Row, Col } from 'react-bootstrap';

function DanceClassDetailsPage() {
  const { user } = useContext(AuthContext);
  const isTeacher = user && user.status === 'teacher';
  const [loading, setLoading] = useState(true);
  const [danceClass, setDanceClass] = useState({
    title: "",
    description: "",
    teacher: "",
    day: "",
    time: "",
    video: "",
    picture: null,
    comments: []
  });

const params=useParams()
console.log(params)

  useEffect(() => {
    const fetchDanceClassDetails = async () => {
      try {
        const response = await danceClassService.getSingleClass(params.id);
        setDanceClass(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dance class details:', error);
        setLoading(false);
      }
    };

    fetchDanceClassDetails();
  }, [params.id]);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className="title-wrapper">
            <h2 className="pt-3">Dance Class Details</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="pt-3">
          <div className="details-box">
            <DanceClassDetails isTeacher={isTeacher} danceClass={danceClass} loading={loading} user={user} setDanceClass={setDanceClass}/>
          </div>
        </Col>
        <Col md={6} className="pt-3">
          <div className="comments-box">
            <CommentSection danceClass={danceClass} setDanceClass={setDanceClass}/> 
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DanceClassDetailsPage;


