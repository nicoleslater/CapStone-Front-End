import React from 'react'

function VideoNewForm() {
  return (
		<form>
			<label htmlFor='upload-video'>Source Location</label>
			<br />
			<input type='file' name='upload-video' id='upload-video' />
			<br />
			<label htmlFor='category'>Category</label>
			<select name='category' id='category'>
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
			<input type='text' name='topic' id='topic' />
		</form>
	);
}

export default VideoNewForm
