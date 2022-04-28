import React, {useState} from "react";
import { videos } from '../data/videos';

function Video() {
  const [file, setFile] = useState(0);
  const {name, videoLink} = videos[file];

  const prevFile = () => {
    setFile((file => {
      file--;
      if (file < 0) {
        file = videos.length - 1;
      }
      return file;
    }))
  }

  const nextFile = () => {
    setFile((file => {
      file++;
      if (file > videos.length - 1) {
        file = 0;
      }
      return file;
    }))
  }

  return (
    <div>
      <h1>Videos of the Smushy Cat</h1>
      <div>
      <div className='slideshow'>
        <div className='slideshowSlider'>
          <div className='container'>
          <iframe className='slide' width='100%' height='400px' src={videoLink} title="YouTube video player" frameBorder='0' controlls='0'
            allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope;"
            ></iframe>
          </div>
          <div className='container' style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(250, 250, 250, 0.75)', padding: '1em', margin: '1em'}}>
            <button onClick={() => prevFile()}>Prev</button>
            <p style={{fontSize: '2em', fontWeight: 'bold', margin: '.5em'}}>{name}</p>
            <button onClick={() => nextFile()}>Next</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Video;