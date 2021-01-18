import React, {useEffect, useState} from 'react'
import { Button } from '../../ui/button/button';
import axios from "axios";



export const Payday = () => {
    const [salary, setSalary] = useState('');

    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')


    const [employers, setEmployers] = useState<string[]>([])
    const [employersSelector, setEmployersSelector] = useState<string>()


    const fetchEmployers = () => {
        axios.get('https://localhost:5001/api/employer')
            .then(res => {
                const data = res.data
                for (let i = 0; i < data.length; i++) {
                    setEmployers(old => [...old, data[i].id + '. ' + data[i].name])
                }
            })
    }

    useEffect(fetchEmployers, [])

    const fetchSalary = () => {

        // @ts-ignore
        // const id = employersSelector.split('.')
        const id = 1

        if (employersSelector === 'Все') {
            axios.get(`https://localhost:5001/api/payday/getAll?from=${from}&to=${to}`)
                .then(res => {
                    const data = res.data
                    for (let i = 0; i < data.length; i++) {
                        setEmployers(old => [...old, data[i].id + '. ' + data[i].name])
                    }
                })
        } else {
            axios.get(`https://localhost:5001/api/payday/get?id=${id}&from=${from}&to=${to}`)
                .then(res => {
                    const data = res.data
                    setSalary(data)
                })
        }
    }


    return (
        <div className={'Payday'}>
            <div className={'input'}>
                <label htmlFor="from">From</label>
                <input
                    type="text"
                    id={'from'}
                    value={from}
                    onChange={event => setFrom(event.target.value)}
                />
            </div>


            <div className={'input'}>
                <label htmlFor="to">To</label>
                <input
                    type="text"
                    id={'to'}
                    value={to}
                    onChange={event => setTo(event.target.value)}
                />
            </div>


            <div className={'input'}>
                <select
                    onChange={e => {
                        const selectedIndex = e.target.options.selectedIndex

                        setEmployersSelector(e.target.options[selectedIndex].value)
                    }}
                >
                    <option selected={true}>Все</option>
                    {
                        (employers.length === 0)
                        ? null
                        : employers.map(i => (
                                <option>{i}</option>
                            ))
                    }
                </select>
            </div>


            <Button
                onHandler={fetchSalary}
            >Кнопка</Button>

            {
                (salary !== '')
                    ? <div>Зарплата за периуд составляет: <span>{salary}</span></div>
                    : null
            }
        </div>
    )
}