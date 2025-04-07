import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "./newsSlice";
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function NewsAggregator() {
      const dispatch = useDispatch();
      const {articles, status, error}= useSelector((state)=>state.news);
      // console.log("articles:"+articles+ "status:"+ status+"error:"+ error);

      const [currentPage, setCurrentPage] = useState(1);
      const articlesPerPage = 8;


      useEffect(()=>{
        dispatch(fetchNews());
      }, [dispatch]);
      if(status === "loading") return <p>Loading news.....</p>
      if(status === "failed") return <p>Error: {error}</p>
      const indexOfLastArticle = currentPage * articlesPerPage;
      const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

      const filteredArticles = articles.filter((article)=> article.title && article.url && article.urlToImage );

      const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
      console.log(currentArticles);
      const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
      //pagination function
      const nextPage = ()=>{
        if(currentPage < totalPages) setCurrentPage(currentPage + 1);
      }

      const prevPage = ()=>{
        if(currentPage > 1) setCurrentPage(currentPage - 1);
      }

      return (
  <>
      <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
         {
          
          currentArticles.map((article , index)=>{

            return(
              <Card key={index} style={{width: "18rem", margin: "10px"}} >
                <Card.Img variant="top" src={article.urlToImage} />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.description}</Card.Text>
                  <Button variant="primary"><a style={{color: "white", textDecoration: "none"}} target="_blank" href={article.url}>see more</a></Button>
                </Card.Body>
              </Card>
            )
          })
         }
         
    </div>
    <div>
    <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
    <span>page {currentPage} of {totalPages}</span>
    <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
   </div>
  </>
  )
}

export default NewsAggregator