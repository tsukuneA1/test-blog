import React from "react"; 
import type { Article } from "../../types"; 
import './typeArticleComponent.css';

interface ArticleProps {
  props: Article;
}

const TypeArticleComponent: React.FC<ArticleProps> = ({ props }) => {
  const published = new Date(props.published_at);
  const updated = new Date(props.updated_at);

  return (
    <div className="top_container">
      <div className="flex">
        <a href={`/articles/user/${props.user.userName}`}>
          <img
            src={props.user.imgSrc}
            width={50}
            height={50}
            alt=""
            className="rounded-md"
          />
        </a>
        <div className="block ml-2">
          <a className="text-lg" href={`/articles/user/${props.user.userName}`}>
            {props.user.userName}
          </a>
          <div className="flex text-zinc-400">
            {`${published.getFullYear()}.${String(published.getMonth() + 1).padStart(2, "0")}.${String(
              published.getDate()
            ).padStart(2, "0")}`}
            {published.getTime() < updated.getTime() ? (
              <div className="container" style={{ marginLeft: "10px" }}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path>
                </svg>
                {`${updated.getFullYear()}.${String(updated.getMonth() + 1).padStart(2, "0")}.${String(
                  updated.getDate()
                ).padStart(2, "0")}`}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <a
        href={
          props.classification === "zenn.dev"
            ? `https://zenn.dev${props.articleUrl}`
            : props.articleUrl
        }
        className="my-5 h-20 inline-block"
      >
        <h1 style={{ width: "auto" }} className="text-xl">
          {props.title}
        </h1>
      </a>
      <div className="items-center">
        <img
          src={props.classification === "zenn.dev" ? "/zenn.png" : "/favicon.svg"}
          width={20}
          height={20}
          alt=""
          className="rounded-md mr-2"
        />
        <div className="text-zinc-400">{props.classification}</div>
      </div>
    </div>
  );
};

export default TypeArticleComponent;
