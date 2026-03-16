import React from 'react';
import './EventGallery.css';

const EventGallery = (props) => {
  return (
    <div className='event-gallery'>
      <div className="event-gallery-head">
        <h1>EVENT GALLERY</h1>
      </div>
      <div className="event-images">
        {props.images.map((url, index) => (
          <img key={index} src={url} alt={`Event ${index + 1}`} className="event-image" />
        ))}
      </div>
    </div>
  );
}

export default EventGallery;
