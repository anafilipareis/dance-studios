// DanceClassDetailsPage.jsx
import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DanceClassDetails from '../components/DanceClassDetails';
import { AuthContext } from '../context/auth.context';
import CommentSection from '../components/commentSection'; // Import the CommentSection component
import danceClassService from '../services/danceClass.services';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/danceDetailsPageStyles.css';
import Footer from '../components/footer';

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
      <div className='background-color'>
        <>
          <Container className="d-flex flex-column min-vh-100">
            <Row>
              <Col md={6} className="pt-3">
                <div className="details-box">
                  <DanceClassDetails isTeacher={isTeacher} danceClass={danceClass} loading={loading} user={user} setDanceClass={setDanceClass} />
                </div>
              </Col>
              <Col md={6} className="pt-3">
                <div className="comments-box">
                  <CommentSection danceClass={danceClass} setDanceClass={setDanceClass} />
                  {/* Render comments here */}
                  {danceClass?.comments?.map((comment) => (
                    <div key={comment._id}>
                      <h5>{comment.user.username} says:</h5>
                      <p>{comment.text}</p>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
          <Footer />
        </>
      </div>
    );
  }

export default DanceClassDetailsPage;


