import React, { useState } from 'react'
import { Travels } from '../interface'

const HandleChange = () => {

    const [FlyOrigin, setFlyValueOrigin] = useState<Travels>("COR")
    const [FlyDestiny, setFlyDestiny] = useState<Travels>("COR")
    const [valueSlider, setValueSlider] = useState(0)

    const handleChangeOrigin = (event: any) => {
        setFlyValueOrigin(event.target.value as Travels)
    }

    const handleChangeDestiny = (event: any) => {
        setFlyDestiny(event.target.value as Travels)
    }


    const handleChangeSlider = (event: any, newValue: number | number[]) => {
        setValueSlider(newValue as number)
    }


    return {
        FlyOrigin,
        FlyDestiny,
        handleChangeOrigin,
        handleChangeDestiny,
        handleChangeSlider,
        valueSlider
    }
}

export default HandleChange