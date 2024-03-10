import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const API = import.meta.env.VITE_API_URL;

function VideoEditForm ()
{
	const {id} = useParams()
	const navigate = useNavigate();
	const [video, setVideo] = useState({
		src: "",
		category: "",
		topic: "",
	} );
	
	const handleSourceChange = (e) => {
		setVideo({ ...video, src: e.target.value });
	};

	const handleCategoryChange = (e) => {
		setVideo({ ...video, category: e.target.value });
	};

	const handleTopicChange = (e) => {
		setVideo({ ...video, topic: e.target.value });
	};

	useEffect(() => {
		fetch(`${API}/videos/${id}`)
			.then( ( response ) => response.json )
			.then( ( video ) => setVideo( video ) )
			.catch((error) => console.error(error))
	}, [ id ] );
	
		const httpOptions = {
			method: "PUT",
			body: JSON.stringify(video),
			headers: {
				"Content-Type": "application/json",
			},
		};

	const updateVideo = () => {
		console.log(video);

		fetch(`${API}/videos/${id}`, httpOptions)
			.then(() => {
				navigate(`/videos/${id}`);
			})
			.catch((error) => console.error(error));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		updateVideo();
	};

  return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='upload-video'>Source Location</label>
			<br />
			<input
				type='file'
				name='upload-video'
				id='upload-video'
				value={video.src}
				onChange={handleSourceChange}
			/>
			<br />
			<label htmlFor='category'>Category</label>
			<select
				name='category'
				id='category'
				value={video.category}
				onChange={handleCategoryChange}>
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
			<input
				type='text'
				name='topic'
				id='topic'
				value={video.topic}
				onChange={handleTopicChange}
			/>
		</form>
	);
}

export default VideoEditForm
