import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App.context";

interface NewsBoxProps {
  userId: number;
  id: number;
  title: string;
  body: string;
};

interface newsToDisplay {
  newsIdList: number[];
};

export function NewsCounter({ newsIdList }: newsToDisplay){

  const { setNewsToDisplay } = useContext(AppContext);

  return (
    <>
      <div className="mb-3">
        <label htmlFor="news_counter" className="form-label">News to Display ({ newsIdList.length })</label>
        <select className="form-select form-select-lg" name="news_counter" id="news_counter" onChange={(e) => setNewsToDisplay(e.target.value)}>
          { newsIdList.map(newsId => <option value={newsId}>{newsId}</option>)}
        </select>
      </div>
    </>
  )
}

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

  const { newsToDisplay } = useContext(AppContext);
  const [newsList, setNewsList] = useState<NewsBoxProps[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((res) => res.json())
      .then((data) => setNewsList(data));
  }, []);

  return (
    <>
      <NewsCounter newsIdList={newsList.map(news => news.id)} />
      { newsList && newsList.filter(news => news.id <= newsToDisplay).map(news => <NewsBox title={news.title} body={news.body} />)}
    </>
  )
}