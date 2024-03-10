import React, { useState, useEffect } from "react";
import Video from "../Components/Video";
import "./VideoGrid.css";

const API = import.meta.env.VITE_API_URL;
function VideoGrid ()
{
	const [ videos, setVideos ] = useState( null );

	
	useEffect( () =>
	{
		fetch( `${ API / videos }` )
			.then((response) => response.json)
			.then( ( videos ) =>
			{ 
				setVideos(videos)
			} )
			.catch((error) => console.error(error)) 
	}, [])

	return (
	
		<section className='video-grid'>
			<div>
				{videos?.map((video, id) => {
					<Video key={id} video={video_url} id={id} />;
				})}
			</div>
		</section>
	);
}

export default VideoGrid;
