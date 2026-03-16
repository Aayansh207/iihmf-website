// import React from 'react';
// import "./EventBlog.css";

// export const EventBlog = (props) => {
//     return (
//         <div className='event-blog'>
//             <div className="event-blog-head"><h1>Other events</h1></div>
//             <div className="container">
//                 {props.events.map((event, index) => (
//                     <div key={index} className="event-item">
//                         <div className="img">
//                             <img src= {event.url} alt={`Event ${index + 1}`} className="event-image" />
//                         </div>
//                         <div className="desc">
//                             <p>{event.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }



import React, { useState, useEffect } from 'react';
import "./EventBlog.css";

export const EventBlog = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') setSelectedImage(null); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    const openImage = (url) => setSelectedImage(url);
    const closeModal = () => setSelectedImage(null);

    return (
        <div className='event-blog'>
            <div className="event-blog-head"><h1>News/Events</h1></div>
            <div className="container">
                {props.events.map((event, index) => (
                    <div key={index} className="event-item">
                        <div className="img">
                            <img src={event.url} alt={`Event ${index + 1}`} className="event-image" onClick={() => openImage(event.url)} />
                        </div>
                        <div className="desc">
                            <p>{event.description}</p>
                        </div>
                        <div className="date">
                            {event.date}
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="image-modal" onClick={closeModal} role="dialog" aria-modal="true" aria-label="Image preview">
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeModal} aria-label="Close image preview">×</button>
                        <div className="img-wrap">
                            <img src={selectedImage} alt="Preview" />
                        </div>
                        <div className="action-btns">
                            <a href={selectedImage} download>Download</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
