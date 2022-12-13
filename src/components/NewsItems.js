import React from 'react'


const NewsItems = (props) => {

    const { title, description, imgURL, newsURL, date, author, source } = props;
    return (
        <div>
            <div className="col">
                <div className="card h-100 ">
                    <span className="position-absolute badge bg-danger" style={{ right: '2%', top: '2%', justifyContent: 'flex-end', }}>
                        {source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <img src={imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p><small className="text-muted">By-{author}  On-{new Date(date).toGMTString()}</small></p>
                        <a href={newsURL} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsItems