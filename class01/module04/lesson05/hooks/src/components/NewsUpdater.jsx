import { useEffect, useState } from "react";

function NewsUpdater() {
  const [news, setNews] = useState(null);
  const [count, setCount] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    // Função para obter a contagem total de posts
    const fetchTotalPosts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
      const data = await response.json();
      setTotalPosts(data.length);
    };

    fetchTotalPosts();
  }, []);

  useEffect(() => {
    if (totalPosts === 0) return; // Aguarda até que tenhamos o total de posts

    const interval = setInterval(() => {
      const newsIdRand = Math.floor(Math.random() * totalPosts) + 1; // Gera um ID aleatório dentro do intervalo
      setCount(newsIdRand);
    }, 500);
      console.log(count);
    const fetchUpdateNews = (setInterval = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${count}`
      );
      const newsUpdated = await response.json();
      setNews(newsUpdated);
    });
    fetchUpdateNews();

    return () => setNews(null);
  }, [count, totalPosts]);


  return (
    <div>
      {news ? (
        <>
          <h1>{news.title}</h1>
          <p>{news.body}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default NewsUpdater;
