import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      <h1 className="head__text">Tech News 😄</h1>
      <div className="all__news">
        {data ? (
          data.articles.map((news) => (
            <NewsArticle data={news} key={news.url} />
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
}

export default News;
