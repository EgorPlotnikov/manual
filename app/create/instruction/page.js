'use client'
import '../create.css'
import TextArea from "@/app/components/TextArea";
import Button from "@/app/components/Button";
import Tiptap from "@/app/components/Tiptap";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import cars from "@/public/cars.json"
import Select from 'react-select'
import { AddData } from "@/app/functions/AddInstruction"

function CreateFailure() {
    const router = useRouter();

    const [selectedModelOption, setSelectedModelOption] = useState(null);
    const [selectedMakeOption, setSelectedMakeOption] = useState(null);
    const [modelBool, setModelBool] = useState(true);

    const makeOptions = [];

    cars.forEach(element => {
        makeOptions.push( {value: element.id, label: element.name} )
    });

    const [modelOptions, setModelOptions] = useState([]);

    const handleMakeChange = (option) => {
        setSelectedMakeOption(option);
        setMake(option.label);
        cars.forEach(element => {
            if (element.id == option.value) {
                let opt = [];
                element.models.forEach(elem => {
                    opt.push( {value: elem.id, label: elem.name} )
                });
                setModelOptions(opt);
            }
        });
        setModelBool(false);
        console.log(`Make:`, option);
    };


    const handleModelChange = (option) => {
        setSelectedModelOption(option);
        setModel(option.label);
        console.log(`Model:`, option);
    };

    const [heading, setHeading] = useState("");
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [error, setError] = useState("");
  
    async function handleSubmit() {
      let response = await AddData(heading, author, text, make, model);
      if (response == 'ok') {
        router.push('/instruction');
      } else {setError(response)}
    }
  
    return (
      <div className="main-container">
        <div className="slim-container">
          <h1>Создать инструкцию</h1>
          <div className="create-tutorial-box">
            <div className='buttons-select-box'>
                <Select
                    className="react-select-container"
                    placeholder={'Марка'}
                    value={selectedMakeOption}
                    onChange={handleMakeChange}
                    options={makeOptions}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 20,
                        colors: {
                            ...theme.colors,
                            primary: 'var(--blue)',
                            primary75: 'var(--inactive-blue)',
                            primary50: 'var(--background-blue)',
                        }
                    })}
                />
                <Select
                    isDisabled={modelBool}
                    className="react-select-container"
                    placeholder={'Модель'}
                    value={selectedModelOption}
                    onChange={handleModelChange}
                    options={modelOptions}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 20,
                        colors: {
                            ...theme.colors,
                            primary: 'var(--blue)',
                            primary75: 'var(--inactive-blue)',
                            primary50: 'var(--background-blue)',
                        }
                    })}
                />
            </div>
            <div className='create-tutorial-box-heading'>
              <TextArea title={'Заголовок инструкции'} inputData={setHeading}/>
              <TextArea title={'Автор'} inputData={setAuthor}/>
            </div>
              <Tiptap inputData={setText} />
              {error ? <div className="alert-error">{error}</div> : null}
              <Button title={'Опубликовать'} type={'default'} onClick={handleSubmit}/>
          </div>
        </div>
      </div>
    )
}

export default CreateFailure