import { useState, useEffect } from 'react'
import axios from 'axios'
import { ITEMS_PER_PAGE } from '../constants'

function fetchList() {
    const [ page, setPage ] = useState(1)
    const [ list, setList ] = useState([])
    const [ error, setError ] = useState(null)

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/exhibitions?page=${page}&limit=${ITEMS_PER_PAGE}`)
            .then(res => {
                setList(list.concat(res.data.data))
                setError(null)
            })
            .catch(err => setError(err.toString()))
    }, [page])

    const fetchMore = () => {
        setPage(page + 1)
    }

    return {
        error,
        list,
        fetchMore, 
        page
    }
}

export {
    fetchList,
}