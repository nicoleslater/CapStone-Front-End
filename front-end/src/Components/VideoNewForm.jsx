import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function VideoNewForm() {
  const navigate = useNavigate();
  const [video, setVideo] = useState({
    title: "",
    summary: "",
    video_url: "",
    duration: 0,
    created_at: ""
  });

const addVideo = () => {
    fetch(`${API}/videos`, {
      method: "POST",
          body: JSON.stringify(video),
          headers: {
              "Content-Type": "application/json",
          },
    })
    .then(() => {
      navigate(`/videos`);
    })
    .catch((error) => console.error("catch", error));
  };

const handleTextChange = (event) => {
    setVideo({ ...video, [event.target.id]: event.target.value });
};


const handleSubmit = (event) => {
      event.preventDefault();
      addVideo();
  };

  return (
    <div>
      
    </div>
  )
}

export default VideoNewForm
