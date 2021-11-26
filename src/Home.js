import React from 'react';
import Hard from './Hard';

class Home extends React.Component{
    constructor(){
        super();
        this.state={
            results:null,
            books:null,
        };
        this.onSubmit=this.onSubmit.bind(this);
    }

    getHardCover=async()=>{
        const api_call=await fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=DNJMhbE7nvYGhnLKcCcRfPIGRYqLKK22");
        const response=await api_call.json();
        console.log(response);
        this.setState({
            results:response.num_results,
            books:response.results.books,
        });
        console.log(this.state.books);
    }

    onSubmit(event){
        event.preventDefault();
        this.getHardCover();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <button className="btn btn-primary" type="submit">Click Me for Hard-Cover</button>
                </form>
                <br/>
                {this.state.books?
                <Hard books={this.state.books}/>
                :null}
            </div>
        )
    }
}
export default Home;