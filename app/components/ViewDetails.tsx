'use client'
import {useState} from 'react'

interface prop {
    price: number;
    category: string;
}

export const ViewDetails = ({price, category}: prop) => {
    const [isVisisble, setIsVisible] = useState(false);

    const showDetails = () => {
        setIsVisible(!isVisisble)
    }

    return (
        <div >
            <button onClick={showDetails}>View Details</button>
            <div>
                {isVisisble && (
                    <div>
                    <p>
                        Price is : {price}
                    </p>
                    <p>
                        Category is : {category}
                    </p>
                    </div>
                )}
            </div>
        </div>
    )
}