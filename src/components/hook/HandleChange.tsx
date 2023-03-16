import React, { useState } from 'react'
import { Travels } from '../interface'

const HandleChange = () => {

    const [FlyOrigin, setFlyValueOrigin] = useState<Travels>("COR")
    const [FlyDestiny, setFlyDestiny] = useState<Travels>("COR")

    const handleChangeOrigin = (event: any) => {
        setFlyValueOrigin(event.target.value as Travels)
    }

    const handleChangeDestiny = (event: any) => {
        setFlyDestiny(event.target.value as Travels)
    }

    return {
        FlyOrigin,
        FlyDestiny,
        handleChangeOrigin,
        handleChangeDestiny
    }
}

export default HandleChange