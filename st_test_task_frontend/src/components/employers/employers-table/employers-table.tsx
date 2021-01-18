import axios from "axios"
import { createHash } from "crypto"
import React, {useEffect, useState} from "react"
import './employers-table.css'

interface EmployersTableData {
    id: number,
    name: string,
    login: string,
    group: string,
    salary: number,
    workedAt: string
}


export const EmployersTable = () => {
    const rowSelected = (id: number) => {
        setRowCheckedId(id)
    }

    const fetchData = () => {
        axios.get('https://localhost:5001/api/employer')
            .then(res => {
                setData([])

                console.log(res.data);
                const d = res.data
                for (let i = 0; i < d.length; i++) {
                    const response: EmployersTableData = {
                        id: d[i].id,
                        group: d[i].group,
                        login: 'null',
                        name: d[i].name,
                        salary: d[i].salary,
                        workedAt: d[i].workedAt
                    }

                    setData(old => [...old, response])
                }
            })
    }

    useEffect(fetchData, [])

    const [data, setData] = useState<EmployersTableData[]>([])
    const [rowCheckedId, setRowCheckedId] = useState<number>(-1)


    return (
        <div className={'EmployersTable'}>

            <div className={'row-header'}>
                <div className={'item number'}>№</div>
                <div className={'item id'}>Id</div>
                <div className={'item name'}>Имя</div>
                <div className={'item login'}>Логин</div>
                <div className={'item group'}>Тип</div>
                <div className={'item salary'}>Ставка</div>
                <div className={'item workedAt'}>Дата принятия на работу</div>
            </div>

            {
                (data.length == 0)
                ? <p>Таблица пуста</p>
                : data.map(i => {
                        let stlRowChecked = 'row'
                        if (i.id == rowCheckedId)  stlRowChecked += ' ' + 'checked'

                        return (
                            <div
                                className={stlRowChecked}
                                onClick={() => {rowSelected(i.id)}}
                            >
                                <div className={'item number'}>1</div>
                                <div className={'item id'}>{i.id}</div>
                                <div className={'item name'}>{i.name}</div>
                                <div className={'item login'}>{i.login}</div>
                                <div className={'item group'}>{i.group}</div>
                                <div className={'item salary'}>{i.salary}</div>
                                <div className={'item workedAt'}>{i.workedAt}</div>
                            </div>
                        )
                    })
            }

        </div>
    )
}