import React from 'react';
import './Book.css';
const Book = ({ title, author, rating, tags, description, imageSrc, altText }) => {
    return (
        <td className="BookStyle">
            <div className="card">
                <div className="poster">
                    <img src={imageSrc} alt={altText} />
                </div>
                <div className="details">
                    <h1>{title}</h1>
                    <h2>{author}</h2>
                    <div className="rating">
                        <i className="fas fa-star"></i>
                        <span>{rating}</span>
                    </div>
                    <div className="tags">
                        {tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                    <p className="desc">{description}</p>
                </div>
            </div>
        </td>
    );
}

export default Book;
