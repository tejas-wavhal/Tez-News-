import React, { useState, useEffect } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const NewsComponent = (props) => {

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)

    const updateNews = async () => {
        props.setprogress(20);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4b9f5883c37e4795add50a446dffba41&page=${page}&pageSize=${props.pageSize}`
        setloading(true)
        let scan = await fetch(url)
        props.setprogress(40);
        let result = await scan.json()
        props.setprogress(60);
        setarticles(result.articles)
        setloading(false)
        props.setprogress(100);
    }

    useEffect(() => {
        document.title = `TezNews - ${capitalizeFirstLetter(props.category)}`
        updateNews();
        // eslint-disable-next-line
    }, [])

    const handlePrevBtn = async () => {
        setpage(page - 1)
        updateNews();
    }

    const handleNextBtn = async () => {
        setpage(page + 1)
        updateNews();
    }

    return (
        <div className='container'>
            <h1 className='text-center my-5'>TezNews - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner />}
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {!loading && articles.map((value) => {
                    return <div className="col-md-4 my-4" key={value.url}>
                        <NewsItems title={value.title ? value.title.slice(0, 50) + "....." : ""} description={value.description ? value.description.slice(0, 150) + "....." : "______________________________________________________________________________________________________________________________________________________"} imgURL={value.urlToImage ? value.urlToImage :
                            "https://i.postimg.cc/hvhFPYWf/Picsart-22-09-10-10-29-48-827.jpg"} newsURL={value.url} date={value.publishedAt} author={value.author ? value.author : 'Unknown'} source={value.source.name} />
                    </div>
                })}
            </div>
            {!loading && <div className="d-flex justify-content-around">
                <button disabled={page === 1} type="button" className="btn btn-dark" onClick={handlePrevBtn}>&larr; Previous</button>
                <button disabled={articles.length < props.pageSize} type="button" className="btn btn-dark" onClick={handleNextBtn}>Next &rarr;</button>
            </div>}
        </div>
    )
}

NewsComponent.defaultProps = {
    country: 'in',
    category: 'general',
    pageSize: 15
}
NewsComponent.propTypes = {
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired
}

export default NewsComponent