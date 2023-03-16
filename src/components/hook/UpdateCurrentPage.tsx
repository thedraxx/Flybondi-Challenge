import React, { useState } from 'react'

const UpdateCurrent = () => {

    const [currentPage, setCurrentPage] = useState<number>(1)

    const updatePage = (action: string) => {

        if (action === 'next') {
            if (currentPage >= 10) return
            setCurrentPage(currentPage + 1)
        }

        if (action === 'prev') {
            if (currentPage <= 1) return
            setCurrentPage(currentPage - 1)
        }

    }

    return {
        currentPage,
        setCurrentPage,
        updatePage
    }
}

export default UpdateCurrent