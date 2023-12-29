import React, { Component } from 'react';
import "./News.css"

class NewsItem extends Component {
    render() {
        let{title, desc, imageUrl, newsUrl} = this.props;
        return (
            <div className="card" style={{"width": "18rem"}} id='cards'>
                <img src={imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <a href={newsUrl} target='__blank' className="btn btn-primary btn-sm">Read More</a>
                    </div>
            </div>
        );
    }
}

export default NewsItem;