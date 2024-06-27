import CatGirlBackground from "../assets/CatGirlBackground.png";
import AffectionProfile from "../assets/AffectionProfile.png";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
// import AnimatedText from "../components/AnimatedText";
import GetCompletion from "../util/GetCompletion";

const ChatPage = () => {
  const [affectionLevel, setAffectionLevel] = useState(2);
  const [messages, setMessages] = useState([]);
  const [lastMessage, setLastMessage] = useState("I love you, Tom!");
  const userInput = useRef(null);
  const [turn, setTurn] = useState("ai");

  const onFinishReading = (e) => {
    setTurn("player");
  };

  const textSubmitHandler = async (e) => {
    const message = userInput.current.value;

    const [newHistory, jsonified] = await GetCompletion(message, messages).catch(e => alert(e));

    if (jsonified["affection level"] >= 14) {
        alert("You have reached the maximum affection level! YOU WIN!");
        window.close()
    }

    console.log(newHistory)
    console.log(jsonified)

    setMessages(newHistory);
    setAffectionLevel(jsonified["affection level"]);
    setLastMessage(jsonified["content"]);

    setTurn("ai");
  }

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <div className="w-screen h-screen overflow-hidden relative">
        <div className="w-screen h-screen absolute blur-2xl top-0 right-0 bg-black opacity-30"></div>
        <img src={CatGirlBackground} className="w-screen h-auto" />
      </div>
      <div className="w-full h-full absolute top-0 right-0 flex">
        <div className="flex-1 w-auto flex justify-center">
          <div
            className="w-11/12 h-72 bg-pink-3 bg-opacity-70 rounded-3xl border-pink-4 border-4 self-end mb-8 p-5 relative"
          >
            <div className="flex justify-between">
              <h1 className="text-white text-4xl">
                {turn === "player" ? "Player:" : "Adam:"}
              </h1>
              {turn === "player" && (
                <button onClick={textSubmitHandler} className="outline-none border-none bg-pink-1 text-xl py-2 px-6 rounded text-white bg-opacity-60">
                  Send!
                </button>
              )}
            </div>
            <div className="w-full h-0.5 bg-white my-4"></div>
            {turn === "ai" && (
              //   <motion.span
              //     initial="hidden"
              //     animate="visible"
              //     transition={{ staggerChildren: 0.1 }}
              //     aria-hidden
              //     className="text-white text-2xl overflow-scroll h-full"
              //   >
              //     {lastMessage.split("").map((c) => (
              //       <motion.span className="inline-block" variants={textVariants}>{c}</motion.span>
              //     ))}
              //   </motion.span>
              //   <AnimatedText text={lastMessage} />
              <h1 onClick={onFinishReading} className="text-white text-2xl overflow-scroll h-1/2">
                {lastMessage}
              </h1>
            )}
            {turn === "ai" && (
              <motion.svg
                initial={{ y: -2 }}
                animate={{ y: 2 }}
                transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: 'rgba(255, 255, 255, 1)' }}
                className="absolute bottom-0 right-0 mb-6 mr-6"
              >
                <path d="m11.998 17 7-8h-14z"></path>
              </motion.svg>
            )}
            {turn === "player" && (
              <textarea
                placeholder="Enter your message here"
                ref={userInput}
                type="text"
                className="w-full h-full bg-transparent bg-opacity-80 rounded-2xl resize-none outline-none text-white text-2xl p-0"
              />
            )}
          </div>
        </div>
        <div className="w-48 flex-row content-center">
          <img
            src={AffectionProfile}
            className="rounded-full w-28 h-30 mx-auto"
          />
          {/* <p>Affection level</p> */}
          <div className="overflow-hidden h-4/5 w-28 bg-pink-1 bg-opacity-80 mx-auto mt-4 rounded-2xl relative">
            <motion.div
              animate={{
                height: `${(affectionLevel / 14) * 100}%`,
              }}
              className="w-full bg-pink-2 absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
