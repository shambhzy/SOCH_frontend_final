import React, { useState } from 'react'
import './Dalle.css'
import InputBox from './InputBox'
import { Configuration,OpenAIApi } from "openai";
import Navbar from './Navbar';



function Dalle () {
  const [prompt, setPrompt] = useState("")
  const [result, setResult] = useState("")

  const configuration = new Configuration({
    apiKey: process.env.VITE_Open_AI_Key,
    organization: "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"
  })

  const openai = new OpenAIApi(configuration);
  
  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size : "512x512"
    })
    setResult(res.data.data[0].url)
  }

  return (
    <div>
     
      <h2 className='generate'>Generate AI images please</h2>
      
     
      <textarea className='inp' placeholder='lets generate AI'
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button className='btt' onClick={generateImage}>Generate an Image</button>

      <hr/>

      {result.length > 0 ? (
        <img src={result} alt={result} />
      ): (
        <p className='generate'>No Data!</p>

      )}
      

    </div>
  )
}

export default Dalle


