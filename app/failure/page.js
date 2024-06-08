import './failure.css'
import ButtonSearch from "../components/ButtonSearch";
import Button from "../components/Button";
import SelectBox from '../components/SelectBox';
import Articles from '../components/Articles';
import ButtonSelect from '../components/ButtonSelect';
import LoadingArticle from "../components/LoadingArticle";
import { Suspense } from "react";

function Failure() {
  return (
    <div className='main-container'>
        <div className='top-box'>
            <SelectBox />
            <ButtonSelect type={'failure'} />
            <ButtonSearch />
            <Button title={'Рассказать о неисправности'} type={'default'} nav={'/create/failure'} imgPath={'/create.svg'} />
        </div>
        <Suspense fallback={<LoadingArticle/>}>
            <Articles type={'failure'} />
        </Suspense>
    </div>
  )
}

export default Failure