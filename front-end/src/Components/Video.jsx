import React, {useState, useEffect, useRef} from 'react'

function Video ()
{
  const [ playing, setPlaying ] = useState( false )
  const [videoTime, setVideoTime] = useState(0);
  const [ currentTime, setCurrentTime ] = useState( 0 );
  const [progress, setProgress] = useState(0);

  const videoRef = useRef( null )

  const { id, video_url, duration } = videos
  
  

  const videoHandler = ( 
    control ) =>
  {
    if ( control === "play" )
    {
      videoRef.current.play();
      setPlaying( true );
      var vid = document.getElementById("video1");
    } else if ( control === "pause" )
    {
      videoRef.current.pause();
      setPlaying(false)
    }
  };

  const fastForward = () =>
  {
    videoRef.current.currentTime += 5;
  };

  const revert = () =>
  {
    videoRef.current.currentTime -= 5;
  };

  window.setInterval(function () {
    setCurrentTime( videoRef.current?.currentTime );
    setProgress((videoRef.current?.currentTime / videoTime) * 100);

	}, 1000);

  
  return (
		<article>
			<video
				className='video'
				id={id}
				ref={videoRef}
				src={video_url}></video>
			<div className='controlsContainer'>
				<div className='controls'>
					<img
						className='controlsIcon'
						onClick={revert}
						alt=''
						src='/backward-5.svg'
					/>
					{playing ? (
						<img
							onClick={() => videoHandler("pause")}
							className='controlsIcon--small'
							alt=''
							src='/pause.svg'
						/>
					) : (
						<img
							onClick={() => videoHandler("play")}
							className='controlsIcon--small'
							alt=''
							src='/play.svg'
						/>
					)}

					<img
						className='controlsIcon'
						onClick={fastForward}
						alt=''
						src='/forward-5.svg'
					/>
				</div>
				<div className='timecontrols'>
					<p className='controlsTime'>1:02</p>
					<div className='time_progressbarContainer'>
						<div style={{ width: "40%" }} className='time_progressBar'></div>
					</div>
					<p className='controlsTime'>
						{" "}
						{Math.floor(currentTime / 60) +
							":" +
							("0" + Math.floor(currentTime % 60)).slice(-2)}
					</p>
				</div>
			</div>
		</article>
	);
}

export default Video
