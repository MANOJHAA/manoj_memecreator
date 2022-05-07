import React, { useEffect, useState } from "react"
import  './App.css'

const Meme = () => {


    const [InputText, setInputText] = useState({
        firstValue: " ",
        secondValue: " "
    })

    const [randomImg, setRandomImg] = useState("https://i.imgflip.com/30b1gx.jpg");
    const [allImg, setallImg] = useState([])


    useEffect(() => {
        console.log("API Called")
        fetch("https://api.imgflip.com/get_memes").then(response => response.json()).then(response => setallImg(response.data.memes))
    }, [])

    const handleChange = (e) => {
        setInputText({
            ...InputText,
            [e.target.name]: e.target.value
        })
    }

    const handleSumbit = (e) => {
        e.preventDefault()
        console.log("submi is clicked")
        console.log("ImgCount", allImg.length)

        const randomnum = Math.random()
        console.log(randomnum)

        const imgpick = Math.floor(randomnum * allImg.length)
        console.log(imgpick)

        const rImg = allImg[imgpick].url
        console.log(rImg)

        setRandomImg(rImg)

    }
    return (
        <div className="meme-container">
            <form onSubmit={handleSumbit}>
                <input
                    type="text"
                    name="firstValue"
                    placeholder="Eneter the first text"
                    value={InputText.firstValue}
                    onChange={handleChange}
                />
                <input type="text"
                    name="secondValue"
                    placeholder="Eneter the second text"
                    value={InputText.secondValue}
                    onChange={handleChange}
                />
                <button> Generate Memes </button>
            </form>
            <div className="meme">
            <h3 className="top">{InputText.firstValue}</h3>
                <img src={randomImg} alt={""} />
                <h3 className="bottom">{InputText.secondValue}</h3>

            </div>

        </div>

    )
}

export default Meme