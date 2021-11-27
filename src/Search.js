import React from 'react';
import Results from './Results';
import './Search.css';

class Search extends React.Component{
    constructor(){
        super();
        this.state={
            output:"",
            value:"",
            results:null,
        };
        this.onSubmit=this.onSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    getBooksData=async()=>{
        const api_call=await fetch(`https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?title=${this.state.value}&api-key=DNJMhbE7nvYGhnLKcCcRfPIGRYqLKK22`);
        const response=await api_call.json();
        console.log(response);
        this.setState({
            // title:response.results[0].title,
            // desc:response.results[0].description,
            // author:response.results[0].author,
            // publisher:response.results[0].publisher,
            // isbn:response.results[0].isbns[0].isbn10,
            // date:response.results[0].ranks_history[0].published_date,
            output:response.results,
            results:response.num_results,
        });
    }

    handleChange(event){
        this.setState({value:event.target.value});
    }

    onSubmit(event){
        event.preventDefault();
        this.getBooksData();
        console.log(this.state.value);
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <input type="text" className="form-control input" value={this.state.value} onChange={this.handleChange} placeholder="Enter Book Name"/>
                    <br/>
                    <button className="btn btn-primary" type="submit">Click Me</button>
                </form>
                <br/>
                <br/>
                {this.state.output?
                <div>
                    <h3>Results Found - {this.state.results}</h3>
                    <br/>
                    <Results output={this.state.output} search={this.state.value}/>
                </div>
                :null}
            </div>
        )
    }
}

export default Search;