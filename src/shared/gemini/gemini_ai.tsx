import { Button } from "@/components/ui/button"
import ChatHistory from "@/shared/gemini/chat_history"
import Loading from "@/shared/gemini/loading"   
import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useState } from "react"
export interface IChatBox {
  type: string
  message: string
}

const GeminiAi = () => {
  const [userInput, setUserInput] = useState<string>("")
  const [chatHistory, setChatHistory] = useState<IChatBox[]>([{ type: "bot", message: "Xin chào!Tôi có thể giúp gì cho bạn!" }])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const genAI = new GoogleGenerativeAI("AIzaSyAYv7cHfYj0EW_qgMFli-m-JqjbZU2mEJs")
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
  const sendMessage = async () => {
    if (userInput.trim() === "") return

    setIsLoading(true)
    try {
      // call Gemini Api to get a response
      const result = await model.generateContent(userInput)
      const response = await result.response
      console.log(response)
      // add Gemeni's response to the chat history
      setChatHistory([...chatHistory, { type: "user", message: userInput }, { type: "bot", message: response.text() }])
    } catch {
      console.error("Error sending message")
    } finally {
      setUserInput("")
      setIsLoading(false)
    }
  }
  return (
    <div>
      <div className='flex items-center justify-between border-b pb-2 mb-4'>
        <h2 className='text-lg font-semibold'>Chat với Shop</h2>
      </div>
      <div className='flex flex-col space-y-4 max-h-96 overflow-y-auto p-2'>
      <ChatHistory chatHistory={chatHistory} />
      <Loading isLoading={isLoading} />
      </div>
      <div className='flex items-center border-t pt-2 mt-4 space-x-2'>
        <input onChange={e => setUserInput(e.target.value)} type='text' placeholder='Nhập tin nhắn...' className='flex-1 p-2 border rounded-lg focus:outline-none' />
        <Button onClick={sendMessage} size='icon' variant='secondary'>
          Gửi
        </Button>
      </div>
    </div>
  )
}

export default GeminiAi
