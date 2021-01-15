import React, {useState} from 'react'


export const Payday = () => {

    const [salary, setSalary] = useState('');

    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')

    const onPayday = () => {

    }


    return (
        <div>
            <label htmlFor="from">From</label>
            <input
                type="text"
                id={'from'}
                value={from}
                onChange={event => setFrom(event.target.value)}
            />

            <label htmlFor="to">To</label>
            <input
                type="text"
                id={'to'}
                value={to}
                onChange={event => setTo(event.target.value)}
            />

            <div
                onClick={onPayday}
            >Кнопка</div>

            {
                (salary !== '')
                ? <div>Зарплата за периуд составляет: <span>{salary}</span></div>
                : null
            }
        </div>
    )
}