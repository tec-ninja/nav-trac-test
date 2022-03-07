import { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'

type InfoType = {
    name: string | undefined,
    phoneNumber: number,
    company: string,
    loadNumber: string,
    customerName: string,
    containerNumber: string
}

type ResType = {
    data: {
        hourly: {
            temperature_2m: number[],
            time: string[]
        }
    }
}

function useSaveInfo() {
    const [ info, setInfo ] = useState<InfoType | {}>()
    const [ message, setMessage ] = useState<string>('')
    const [ loading, setLoading ] = useState<boolean>(false)
    const [ pageIndex, setPageIndex ] = useState<number>(0)
    const [ dateTime, setDateTime ] = useState<string>('')
    const [ curTemp, setCurTemp ] = useState<number>(0)
    const [ minTemp, setMinTemp ] = useState<number>(0)
    const [ maxTemp, setMaxTemp ] = useState<number>(0)

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/forecast?latitude=34.05&longitude=-118.24&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FLos_Angeles`)
            .then((res: ResType) => {
                setDateTime(moment().format('LLLL'))
                let curDateTime = moment().format('YYYY-MM-DDTHH:00')
                let startOfDay = moment().format('YYYY-MM-DDT00:00')
                let endOfDay = moment().format('YYYY-MM-DDT23:00')
                const { temperature_2m, time } = res.data.hourly
                let startIndex = time.indexOf(startOfDay)
                let endIndex = time.indexOf(endOfDay)
                let curIndex = time.indexOf(curDateTime)
                let temps = temperature_2m.slice(startIndex, endIndex)
                setMinTemp(Math.min(...temps))
                setMaxTemp(Math.max(...temps))
                setCurTemp(temperature_2m[curIndex])
            })
    }, [])

    const showMessage = (msg: string) => {
        setMessage(msg)
        setTimeout(() => setMessage(''), 2000)
    }

    const saveInfo = () => {
        setLoading(true)
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkin`, info)
            .then(res => {
                showMessage('Sucessfully Saved!')
            })
            .catch(err => showMessage(`Save Error: ${err.toString()}`))
            .finally(() => setLoading(false))
    }

    const updateInfo = (e: any) => setInfo({ ...info, [e.target.name]: e.target.value })

    return {
        loading,
        message,
        pageIndex,
        setPageIndex,
        updateInfo,
        saveInfo,
        dateTime,
        curTemp,
        minTemp,
        maxTemp
    }
}

export {
    useSaveInfo,
}