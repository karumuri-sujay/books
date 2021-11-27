import React from 'react';

function Hard({books,results}){
    return(
        <div>
            {books.map((value)=>{
                return <div className="row">
                    <div className="col-md-4">
                        <div className="card" style={{width: 15+"rem"}}>
                            <img className="card-img-top" src={value.book_image} alt="Book"/>
                                <div className="card-body">
                                    <h5 className="card-title">Title - {value.title}</h5>
                                    <p className="card-text">{value.description}</p>
                                    <p className="card-text">ISBN10 - {value.isbns[0].isbn10}</p>
                                    <p className="card-text">ISBN13 - {value.isbns[0].isbn13}</p>
                                    <a href={value.amazon_product_url} className="btn btn-primary">Buy this Book?</a>
                                </div>
                        </div>
                        <br/><br/>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Hard;