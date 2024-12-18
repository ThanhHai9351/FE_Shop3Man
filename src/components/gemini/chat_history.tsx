import { IChatBox } from "@/components/gemini/gemini_ai"
import ReactMarkdown from "react-markdown"
const ChatHistory = ({ chatHistory }: { chatHistory: IChatBox[] }) => {
  return (
    <>
      {chatHistory.map((message, index) => (
        <div
          key={index}
          className={`flex items-start py-2 px-4 rounded-lg ${
            message.type === "user" ? "bg-gray-100 text-gray-800" : "bg-blue-100 text-blue-800"
          }`}
        >
          {message.type === "user" && <span className='mr-2 font-bold text-gray-600'>You:</span>}

          <div>
            <ReactMarkdown>{message.message}</ReactMarkdown>
          </div>
        </div>
      ))}
    </>
  )
}

export default ChatHistory
