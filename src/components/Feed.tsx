import { useEffect, useState } from "react";

interface NewsBoxProps {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export function NewsBox(newsProps: Pick<NewsBoxProps, "title" | "body">){
  return (
    <>
      <div className="card mt-3">
        <div className="card-header">
          <strong>
            { newsProps.title }
          </strong>
        </div>

        <div className="card-body">
          <p>
            { newsProps.body }
          </p>
        </div>
      </div>
    </>
  )
}

export default function Feed(){

  const [newsList, setNewsList] = useState<NewsBoxProps[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((res) => res.json())
      .then((data) => setNewsList(data));
  }, []);

  return (
    <>
      { newsList && newsList.filter(news => news.id <= 5).map(news => <NewsBox title={news.title} body={news.body} />)}
    </>
  )
}