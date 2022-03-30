import React, { useState } from 'react'
import axios from 'axios'
import "./App.css"
function App() {

  const [news, setNews] = useState([])

  const fetchNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=IN&apiKey=0b20f183f4c94fba92447a89a44b0332")
      .then((response) => {
        console.log(response);
        setNews(response.data.articles)
      })
  }
  return (
    <>
        <div className="container">  
        <div className="row">
      <div className="col-4">
          
        <h1 className='heading'>Top Headings</h1>
            
            <button className='btn' onClick={fetchNews}>Click Here
            </button>
            
           </div>
         </div> 

      </div>

      <div className="container"> 
         <div className="row"> 
          {
            news.map((value,index) => {
          return (
                <div key={index} className="col-4">
          <div className="card" style={{ width: "200px 200px" }}>
            <img src={value.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                    
                <h5 className="card-title">{value.title}</h5>
                   <p className="card-text">{value.description}</p>
                 <a href= "#" className="btnl btn-primary"></a>
                 
                   
                    </div>
                    
                   </div>
                </div>
                );
            })
          }
           </div>
           </div> 
         </>
  )
}

export default App;