import { useRef } from "react"
import axios from "axios";
function Content() {
    let userInput=useRef(null)
    function askChatgpt(){
        let msg=userInput.current.value;
        let apiUrl='https://api.openai.com/v1/chat/completions';
        let apiKey='process.env.OPENAI_API_KEY';
        const headers ={
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        }
        const requestBody={
           model: "gpt-5",
           messages: [
            {
                role: "user",
                content: msg
            }
        ]
        }
        axios.post(apiUrl,requestBody,{headers}).then(({data})=>{
            // setResponse(data.choices[0].message.content)
        })

    }

  return (
    <div>

        <div className="w-[700px] mt-34 mx-auto">
            {response}
        </div>

        <div className="">
            <h1 className="text-4xl font-bold text-blue-500 fixed top-20 left-10">CHATGPT⚡</h1>
        </div>


    <div className="w-[700px] p-3 bottom-30 left-1/2 -translate-x-1/2 fixed">
        <div className="flex ">
            <input ref={userInput} type="text" placeholder="Ask Chatgpt for your Diet meal and Exercises" className="w-full p-3 focus:outline-neutral-400 " />
            <button onClick={askChatgpt} className="bg-black text-white py-3 px-5">Send</button>
        </div>
        <p className="text-neutral-600 text-center">This is an AI tool can make mistakes</p>
    </div>


    </div>
  )
}

export default Content
