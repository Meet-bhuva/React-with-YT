"use client"
import axios from 'axios'
import React, { useState } from 'react'

const fun = () => {
    const [images, firstSet] = useState([]);  //this is the use of printing code, first return blank[], on second click return value of erray 

    const getImages = async () => {
        try {
            const url = await axios.get("https://picsum.photos/v2/list")
            const data = url.data;
            firstSet(data)
            // console.log(images)
        } catch (error) {
            console.error("error fetching images")
        }
    }
    return (
        <div>
            <button onClick={getImages} className='px-5 py-3 bg-green-500 text-white font-bold'>Get images</button>
            <div className='p-10'> {/* use of map == to print a  code on page, so we can use map method*/}
             {images.map((elem, i) => {
                return <img src={elem.download_url}
                width={300}
                height={300}
                className='m-10 rounded inline-block'
                />
             })}

            </div>
        </div>
    )
}

export default fun;
