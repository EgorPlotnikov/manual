import { Suspense } from "react";
import Button from "../components/Button";
import ButtonSearch from "../components/ButtonSearch";
import LoadingArticle from "../components/LoadingArticle";
import Articles from "../components/Articles";

export default async function Home() {
  
  return (
    <div className="main-container">
      <div className="top-box">
        <h1>Учебник</h1>
        <ButtonSearch />
        <Button title={'Создать статью'} type={'default'} nav={'/create/tutorial'} imgPath={'/create.svg'} />
      </div>
      <Suspense fallback={<LoadingArticle />}>
        <Articles type={'tutorial'} />
      </Suspense>
    </div>
  );
}
