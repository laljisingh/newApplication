import React, { Component } from 'react'
import NewsItem from './NewsItem'


export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loadig: false,
            page:1,
            totalResult:0,
            dummyUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAja6c9Ip37JMYpOmIIe9JGv16LvccS2OoCpr2Evz5Gv2-ImNwePvBoxNWctyWlJwYmA&usqp=CAU"
        }
        console.log("constrauctiooss");
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3a6e3b91e4624a98bc393f6eaeb706ef&pageSize=10&page=${this.state.page}`;
        let d1 = await fetch(url);
        let d2 = await d1.json();
        console.log(d2.articles);
        this.setState({
            totalResult:d2.totalResult, 
            articles: d2.articles
         });
    }
    onClickPrevPage =async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3a6e3b91e4624a98bc393f6eaeb706ef&pageSize=10&page=${this.state.page - 1}`;
        let d1 = await fetch(url);
        let d2 = await d1.json();
        console.log(d2.articles);
        this.setState({ 
            page:this.state.page - 1,
            articles: d2.articles
         });
        console.log("prev");
    }

    onClickNextPage =async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3a6e3b91e4624a98bc393f6eaeb706ef&pageSize=10&page=${this.state.page + 1}`;
        let d1 = await fetch(url);
        let d2 = await d1.json();
        console.log(d2.articles);
        this.setState({ 
            page:this.state.page + 1,
            articles: d2.articles
         });
    }
    render() {
        return (
            <div className='container my-5 text-center mx-auto'>
                <h1 style={{ fontSize: "40px" }} className='my-3'>NewsMonkey - Top Headings</h1>
                <div className="row gy-3 mx-5" >
                    {this.state.articles.map((element) => {
                        return <div className="col-12 col-xs-12 col-sm-6 col-lg-4 my-1" key={element.url}>
                            <NewsItem title={element.title} desc={element.description} imageUrl={(element.urlToImage === null) ? this.state.dummyUrl : element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className='d-flex justify-content-between my-2'>
                    <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.onClickPrevPage}>&larr; Prev</button>
                    <button type="button"  className="btn btn-dark" onClick={this.onClickNextPage}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
