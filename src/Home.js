import React from 'react';
import Hard from './Hard';

class Home extends React.Component{
    constructor(){
        super();
        this.state={
            results:null,
            hardResult:null,
            paperback:null,
            eBook:null,
        };
        this.onHard=this.onHard.bind(this);
        this.onPaper=this.onPaper.bind(this);
    }

    getHardCover=async()=>{
        const api_call=await fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=DNJMhbE7nvYGhnLKcCcRfPIGRYqLKK22");
        const response=await api_call.json();
        console.log(response);
        this.setState({
            results:response.num_results,
            hardResult:response.results.books,
        });
        console.log(this.state.hardResult);
    }

    getPaperBack=async()=>{
        const api_call=await fetch("https://api.nytimes.com/svc/books/v3/lists/current/paperback-nonfiction.json?api-key=DNJMhbE7nvYGhnLKcCcRfPIGRYqLKK22");
        const response=await api_call.json();
        console.log(response);
        this.setState({
            results:response.num_results,
            paperback:response.results.books,
        });
        console.log(this.state.paperback);
    }

    onHard(event){
        event.preventDefault();
        this.getHardCover();
    }

    onPaper(event){
        event.preventDefault();
        this.getPaperBack();
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.onHard}>
                            <button className="btn btn-primary" type="submit">Click Me for Hard-Cover</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <form onSubmit={this.onPaper}>
                            <button className="btn btn-primary" type="submit">Click Me for PaperBack Non-fiction</button>
                        </form>
                    </div>
                </div>
                <br/>
                {this.state.hardResult?
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <Hard books={this.state.hardResult} result={this.state.results}/>
                        </div>
                    </div>
                </div>
                :null}
                {this.state.paperback?
                <div>
                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6">
                            <Hard books={this.state.paperback} result={this.state.results}/>
                        </div>
                    </div>
                </div>
                :null}
            </div>
        )
    }
}
export default Home;