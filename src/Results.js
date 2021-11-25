import React from 'react';

function Results({output,search}){
    return(
        <div>
            {console.log(output)}
            {output ?
            <div>
                {output.map((value)=>{
                    return <div id="accordion">
                        <div className="card">
                            <div className="card-header" id="headingOne">
                                <h2 className="mb-0">
                                    <button type="button" className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Title - {value.title.toUpperCase()}
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                <div className="card-body">
                                    <h4>Author - {value.author}</h4>
                                    {value.description ?
                                    <p>Description - {value.description}</p>
                                    :
                                    <p>Description - Not Found in the database</p>}
                                    <p>ISBN - {value.isbns[0].isbn13}</p>
                                    {value.publisher?
                                        <p>Publisher - {value.publisher}</p>
                                        :<p>Name of the publisher not found in the database</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            :null}
        </div>
    )
}

export default Results;