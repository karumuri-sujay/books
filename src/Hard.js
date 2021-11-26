import React, { useState } from 'react';

function Hard({books}){
    let [count,setCount]=useState(0);
    return(
        <div>
            {books.map((value)=>{
                return <div>
                        <div class="card" style={{width: 15+"rem"}}>
                            <img class="card-img-top" src={value.book_image} alt="Book"/>
                                <div class="card-body">
                                    <h5 class="card-title">Title - {value.title}</h5>
                                    <p class="card-text">{value.description}</p>
                                    <p class="card-text">ISBN10 - {value.isbns[0].isbn10}</p>
                                    <p class="card-text">ISBN13 - {value.isbns[0].isbn13}</p>
                                    <a href={value.amazon_product_url} class="btn btn-primary">Buy this Book?</a>
                                </div>
                        </div>
                        <br/><br/>
                </div>
                // return count%3===0 ?
                // <div className="row">
                //     <div className="col-md-4">
                //         {setCount(count++)}
                //         <div class="card" style={{width: 15+"rem"}}>
                //             <img class="card-img-top" src={value.book_image} alt="Book"/>
                //                 <div class="card-body">
                //                     <h5 class="card-title">Title - {value.title}</h5>
                //                     <p class="card-text">{value.description}</p>
                //                     <p class="card-text">ISBN10 - {value.isbns[0].isbn10}</p>
                //                     <p class="card-text">ISBN13 - {value.isbns[0].isbn13}</p>
                //                     <a href={value.amazon_product_url} class="btn btn-primary">Buy this Book?</a>
                //                 </div>
                //         </div>
                //         <br/><br/>
                //     </div>
                // </div>
                // :
                // <div class="card" style={{width: 15+"rem"}}>
                //         {setCount(count++)}
                //     <img class="card-img-top" src={value.book_image} alt="Book"/>
                //     <div class="card-body">
                //         <h5 class="card-title">Title - {value.title}</h5>
                //         <p class="card-text">{value.description}</p>
                //         <p class="card-text">ISBN10 - {value.isbns[0].isbn10}</p>
                //         <p class="card-text">ISBN13 - {value.isbns[0].isbn13}</p>
                //         <a href={value.amazon_product_url} class="btn btn-primary">Buy this Book?</a>
                //     </div>
                // </div>
            })}
        </div>
    )
}

export default Hard;