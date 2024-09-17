import React, { useEffect, useState } from "react";
import type { Article, QiitaItemResponse, User } from "../../types";
import { users } from "../../users";
import type { ZennPost } from "../../types";
import TypeArticleComponent from "./articleComponent";
import './test.css'

const apiToken = import.meta.env.NEXT_PUBLIC_QIITA_TOKEN as string; 

const fetchAllArticles = async (user: User, token: string): Promise<Article[]> => {
  let articles: Article[] = [];

  try {
    const qiitaResponse = await fetch(`https://qiita.com/api/v2/users/${user.qiitaId}/items`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!qiitaResponse.ok) {
      const errorDetails = await qiitaResponse.text();
      console.error(`Error: ${qiitaResponse.status} - ${qiitaResponse.statusText}`);
      console.error(`Details: ${errorDetails}`);
    } else {
      const qiitaArticles = (await qiitaResponse.json()) as QiitaItemResponse[];
      articles = qiitaArticles.map((res) => ({
        user,
        title: res.title,
        published_at: res.created_at,
        updated_at: res.updated_at,
        classification: "qiita",
        articleUrl: res.url,
      }));
    }

    const zennResponse = await fetch(`https://zenn.dev/api/articles?username=${user.zennId}&order=latest`);
    if (zennResponse.ok) {
      const zennData = await zennResponse.json();
      if (zennData.articles) {
        articles = articles.concat(
          (zennData.articles as ZennPost[]).map((article) => ({
            user,
            title: article.title,
            published_at: article.published_at,
            updated_at: article.body_updated_at,
            classification: "zenn.dev",
            articleUrl: article.path,
          }))
        );
      }
    } else {
      const errorDetails = await zennResponse.text();
      console.error(`Error: ${zennResponse.status} - ${zennResponse.statusText}`);
      console.error(`Details: ${errorDetails}`);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }

  console.log("Fetched Articles:", articles);

  return articles;
};

const ArticlesPage: React.FC = () => {
  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const [displayedArticles, setDisplayedArticles] = useState<Article[]>([]);
  const [number, setNumber] = useState(1);

  useEffect(() => {
    const loadArticles = async () => {
      const articles = await Promise.all(users.map((user) => fetchAllArticles(user, apiToken)));
      const flatArticles = articles.flat().sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
      setAllArticles(flatArticles);
      setDisplayedArticles(flatArticles.slice(0, 30*number));
      console.log("Fetched Articles:", flatArticles);
    };

    loadArticles();
  }, []);

  return (
    <div style={{ display: "block" }}>
      <div className="top-container">
        <div className="container">
          <button type="button" onClick={() => setNumber(number+1)}>Load More</button>
          <h1>Articles</h1>
          <div className="articles-container">
            {displayedArticles.map((article, index) => (
              <div className={index % 2 === 0 ? "article-right" : "article-left"} key={index}>
                <TypeArticleComponent props={article} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ArticlesPage;
