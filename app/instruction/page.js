import './instruction.css'
import ButtonSearch from "../components/ButtonSearch";
import Button from "../components/Button";
import SelectBox from '../components/SelectBox';
import ButtonSelect from '../components/ButtonSelect';
import LoadingArticle from "../components/LoadingArticle";
import { Suspense } from "react";
import Articles from '../components/Articles';

export default function Instruction() {
  return (
    <div className='main-container'>
        <div className='top-box'>
            <SelectBox />
            <ButtonSelect type={'instruction'}/>
            <ButtonSearch />
            <Button title={'Создать инструкцию'} type={'default'} nav={'/create/instruction'} imgPath={"/create.svg"} />
        </div>
        <Suspense fallback={<LoadingArticle />}>
            <Articles type={'instruction'} />
        </Suspense>
    </div>
  )
}