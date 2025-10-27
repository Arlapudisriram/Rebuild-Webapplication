import { useRef, useState } from "react";
import axios from "axios";

function Home() {
  const userInput = useRef(null);
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function askChatgpt() {
    const msg = userInput.current.value.trim();
    if (!msg) return;

    setLoading(true);
    setResponse("Thinking...");

    try {
      
      const { data } = await axios.post("/api/chat", { message: msg });
      setResponse(data.reply);
    } catch (err) {
      console.error(err);
      setResponse(" Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-800">
      <div className="w-full max-w-2xl mx-auto mt-10 p-4">
        <h1 className="text-2xl font-semibold text-center mb-6">
          ChatGPT Diet & Exercise Assistant 🥗🏋️‍♂️
        </h1>
        <div className="bg-white p-4 rounded-md shadow-sm min-h-[150px] whitespace-pre-wrap">
          {response || "Ask me anything about diet or fitness!"}
        </div>
      </div>

      <div className="w-full max-w-2xl mx-auto p-4 mb-6 fixed bottom-0 left-1/2 -translate-x-1/2 bg-white border-t border-gray-200">
        <div className="flex">
          <input
            ref={userInput}
            type="text"
            placeholder="Ask your i.e Diet meal ,Exercises..... "
            className="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={askChatgpt}
            disabled={loading}
            className="bg-blue-600 text-white px-5 py-3 rounded-r-md hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
        <p className="text-center text-sm text-gray-500 mt-2">
           This AI may make mistakes — verify important info.
        </p>
      </div>
    </div>
  );
}

export default Home;
