import { useEffect, useState } from "react";
import type { Article } from "../../types";
import './articleComponent.css';

const Component = (article: Article) => {
    const published = new Date(article.published_at);
    const updated = new Date(article.updated_at);

    const [windowWidth, setWindowWidth] = useState(0);


    useEffect(() => {
        setWindowWidth(window.innerWidth);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <html>
    <head>
        <meta charSet="UTF-8"/>
    </head>
    
        <div className="top_container" style={{width: `${(windowWidth*0.667-20)/2}px`}}>
            <div className="flex">
                <a href={(`/articles/user/${article.user.userName}`)}>
                    <img
                    src={article.user.userImgSrc}
                    width={50}
                    height={50}
                    alt=""
                    className="rounded-md"
                />
            </a>
                
                <div className="block ml-2">
                    <a className="text-lg" href={(`/articles/user/${article.user.userName}`)}>
                        {article.user.userName}
                    </a>
                    
                    <div className="flex text-zinc-400">
                        {(`${published.getFullYear()}.${String(published.getMonth() + 1).padStart(2, '0')}.${String(published.getDate()).padStart(2, '0')}`)}
                        {published.getTime() < updated.getTime()
                            ? <div className="container" style={{marginLeft: "10px", display:"flex", alignItems: "center"}}>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path></svg>
                                {(`${updated.getFullYear()}.${String(updated.getMonth() + 1).padStart(2, '0')}.${String(updated.getDate()).padStart(2, '0')}`)}
                                </div>
                            : <></>
                        }
                    </div>
                    
                </div>
            </div>
            <a href={article.classification === 'zenn.dev' ? (`https://zenn.dev${article.articleUrl}`) : article.articleUrl} className="my-5 h-20 inline-block">
                <h1 style={{width:"auto", border: "none", textAlign: 'start'}} className="text-xl">{article.title}</h1>
            </a>
        
            <div className="items-center" style={{display: "flex", alignItems: "center"}}>
                <img
                    src={(article.classification === 'zenn.dev' ? '/zenn.png' : article.classification === 'qiita.com' ? '/qiita.png' : '/favicon.svg')}
                    width={20}
                    height={20}
                    alt=""
                    className="rounded-md mr-2"
                />
                <div className="text-zinc-400">
                    {article.classification}
                </div>
                
            </div>
        </div>
        
    
</html>
    )
}

export default Component;