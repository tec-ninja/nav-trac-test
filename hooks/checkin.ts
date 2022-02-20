import { useState } from 'react'
import axios from 'axios'

type InfoType = {
    name: string | undefined,
    phoneNumber: number,
    company: string,
    loadNumber: string,
    customerName: string,
    containerNumber: string
}

function useSaveInfo() {
    const [ info, setInfo ] = useState<InfoType | {}>()
    const [ message, setMessage ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [ pageIndex, setPageIndex ] = useState(0)

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
        saveInfo
    }
}

export {
    useSaveInfo,
}