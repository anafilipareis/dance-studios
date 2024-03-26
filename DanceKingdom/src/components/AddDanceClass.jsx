import { useState } from "react";
import danceClassService from "../services/danceClass.services";
import { useNavigate } from 'react-router-dom';

function AddDanceClass(props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    teacher: "",
    day:"",
    time:"",
    spotsLeft: "",
    video: "",
    picture: null,
    favorites: "",
    comments: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    danceClassService.createDanceClass(formData)
      .then(() => {
        // Reset the form data
        setFormData({
          title: "",
          description: "",
          teacher: "",
          day:"",
          time:"",
          spotsLeft: "",
          video: "",
          picture: null,
          favorites: "",
          comments: ""
        })
        
        navigate("/dance-classes");
      })
      
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddClass">
      <h3>Add Dance Class</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <label>Teacher:</label>
        <input
          type="text"
          name="teacher"
          value={formData.teacher}
          onChange={handleChange}
        />

        <label>Schedule:</label>
        <input
          type="text"
          name="day"
          placeholder="Day"
          value={formData.day}
          onChange={handleChange}
        />
        <input
          type="text"
          name="time"
          placeholder="Time"
          value={formData.time}
          onChange={handleChange}
        />

       

        <label>Video (YouTube Embed Link):</label>
        <input
          type="text"
          name="video"
          value={formData.video}
          onChange={handleChange}
          placeholder="Paste YouTube embed link..."
        />
        {/* Display video preview */}
        {formData.video && (
          <div className="video-preview">
            <iframe
              width="560"
              height="315"
              src={formData.video}
              title="YouTube video preview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        <label>Picture:</label>
        <input
          type="file"
          name="picture"
          accept="image/*"
          onChange={(e) => setFormData({ ...formData, picture: e.target.files[0] })}
        />


        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddDanceClass;








































// import { useState } from "react";
// // import axios from "axios";
// import danceClassService from "../services/danceClass.services";

// function AddDanceClass(props) {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
// //   const [teacher, setTeacher] = useState("");
// //   const [schedule, setSchedule] = useState(day, time);
// //   const [spotsLeft, setspotsLeft] = useState("");
// //   const [video, setVideo] = useState("");
// //   const [picture, setPicture] = useState("");
// //   const [favorites, setFavorites] = useState("");
// //   const [comments, setComments] = useState("");
  

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const requestBody = { title, description, teacher, schedule, video, picture, favorites, comments };

//     danceClassService.createClass(requestBody)  
//     .then(() => {
//         // Reset the state
//         setTitle("");
//         setDescription("");
//         props.refreshDanceClassess();
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <div className="AddClass">
//       <h3>Add Dance Class</h3>

//       <form onSubmit={handleSubmit}>
//         <label>Title:</label>
//         <input
//           type="text"
//           name="title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <label>Description:</label>
//         <textarea
//           type="text"
//           name="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default  AddDanceClass;



