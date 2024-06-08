import { FetchData } from "../functions/FetchData";
import ArticlePreview from "./ArticlePreview";

async function Articles( {type} ) {
    let data = await FetchData('getPosts', type);
    let articles = [];
    data.forEach(element => {
        articles.push(
            <ArticlePreview
                data={element}
                type={type}
                key={element._id}
            />
        );
    });

    return articles;
}

export default Articles