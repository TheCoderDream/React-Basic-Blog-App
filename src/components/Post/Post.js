import React from 'react';
import './Post.css';

const post = (
    {
        title,
        clicked,
        author
    }
) => (
    <div className="card" onClick={clicked}>
        <div className="card-body">
            <blockquote className="blockquote mb-0">
                <p>{title}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>
        </div>
    </div>
);

export default post;