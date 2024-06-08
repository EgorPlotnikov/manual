'use client'

import React, { useState } from 'react'
import Select from 'react-select'
import cars from "@/public/cars.json"
import './selectbox.css'

function SelectBox() {
    const [selectedModelOption, setSelectedModelOption] = useState(null);
    const [selectedMakeOption, setSelectedMakeOption] = useState(null);
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [modelBool, setModelBool] = useState(true);

    const makeOptions = [];

    cars.forEach(element => {
        makeOptions.push( {value: element.id, label: element.name} )
    });

    const [modelOptions, setModelOptions] = useState([]);

    const handleMakeChange = (option) => {
        setSelectedModelOption(null);
        setModel('');
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


  return (
    <div className='select-box'>
        {selectedMakeOption ? <h1>{make + ' ' + model}</h1> : <h1>Все автомобили</h1>}
        <div className='buttons-dropdown-box'>
            <Select
                className="react-select-container"
                classNamePrefix="react-select"
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
                classNamePrefix="react-select"
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
    </div>
  )
}

export default SelectBox