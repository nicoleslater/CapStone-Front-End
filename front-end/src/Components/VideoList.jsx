import React, { useState, useEffect } from "react";
import VideoCard from "../Components/VideoCard";

export default function VideoList() {
	const [videos, setVideos] = useState(null);

	useEffect(() => {
		fetch(`${API / videos}`)
			.then((response) => response.json)
			.then((videos) => {
				setVideos(videos);
			})
			.catch((error) => console.error(error));
	}, []);

	return (
		<section className='video-list'>
			<div>
				{videos?.map((video, id) => {
					<VideoCard key={id} thumbnail={thumbnailUrl} id={id} />;
				})}
			</div>
		</section>
	);
}
