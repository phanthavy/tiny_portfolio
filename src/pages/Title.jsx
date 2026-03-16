import { useEffect, useState } from 'react'

const Title = () => {

    return (
        <div>
            <h1
                className="text-4xl font-bold flex gap-2 text-gray-800 justify-center mt-9 text-shadow-2xs">
                <p className="italic flex gap-1">WE <span className="not-italic">B</span></p>
                <p className="text-orange-400 flex gap-1">DE<span className="italic">S</span>IGN</p>
            </h1>

            <div className="flex flex-col items-center">
                <h4 className="mt-4 font-semibold tracking-widest px-15">
                    ຮັບເຮັດເວບໄຊ ອອກແບບເວັບໄຊ ທັງຮູບແບບອົງກອນ SME ແລະ Ecommerce
                </h4>
            </div>
        </div>
    )
}
export default Title