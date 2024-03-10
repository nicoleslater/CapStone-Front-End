import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
	

const API = import.meta.env.VITE_API_URL;

function VideoNewForm ()
{
	const navigate = useNavigate();
	const [video, setVideo] = useState({
		src: "",
		category: "",
		topic: "",
	});

	const httpOptions = {
		method: "POST",
		body: JSON.stringify(video),
		headers: {
			"Content-Type": "application/json",
		},
	};

	const addVideo = () => {
		console.log(video);

		fetch(`${API}/upload`, httpOptions)
			.then((response) => {
				alert(`${video.topic} was added to the database!`);
				navigate(`/videos`);
			})
			.catch((error) => console.error(error));
	};

	const handleSourceChange = (e) => {
		setVideo({ ...video, src: e.target.value });
	};

	const handleCategoryChange = (e) => {
		setVideo({ ...video, category: e.target.value });
	};

	const handleTopicChange = (e) => {
		setVideo({ ...video, topic: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(video);
		addVideo();
	};

  return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='upload-video'>Source Location</label>
			<br />
			<input type='file' name='upload-video' id='upload-video' value={video.src} onChange={handleSourceChange}/>
			<br />
			<label htmlFor='category'>Category</label>
			<select name='category' id='category' value={video.category} onChange={handleCategoryChange}>
				<option value=''>------</option>
				<option value='astrology'>Astrology</option>
				<option value='economics'>Economics</option>
				<option value='fried-cooking'>Fried Cooking</option>
				<option value='gaming'>Gaming</option>
				<option value='gardening'>Gardening</option>
				<option value='hunting'>Hunting</option>
				<option value='latin-dance'>Latin Dance</option>
				<option value='literature'>Literature</option>
				<option value='painting'>Painting</option>
				<option value='pastries'>Pastries</option>
				<option value='tech'>Tech</option>
				<option value='wood-work'>Wood Work</option>
			</select>
			<br />
			<label htmlFor='topic'>Topic</label>
			<input type='text' name='topic' id='topic' value={video.topic} onChange={handleTopicChange} />
		</form>
	);
}

export default VideoNewForm
