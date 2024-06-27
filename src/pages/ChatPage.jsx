import CatGirlBackground from "../assets/CatGirlBackground.png";
import AffectionProfile from "../assets/AffectionProfile.png";
import { motion } from "framer-motion";

const ChatPage = () => {
  

  return (
    <div className="w-screen h-screen relative">
      <div className="w-screen h-screen overflow-hidden relative">
        <div className="w-screen h-screen absolute blur-2xl top-0 right-0 bg-black opacity-30"></div>
        <img src={CatGirlBackground} className="w-screen h-auto" />
      </div>
      <div className="w-full h-full absolute top-0 right-0 flex">
        <div className="flex-1 w-auto flex justify-center">
          <div className="w-11/12 h-72 bg-pink-3 bg-opacity-70 rounded-3xl border-pink-4 border-4 self-end mb-8 p-5">
            <h1 className="text-white text-4xl">Player:</h1>
            <div className="w-full h-0.5 bg-white my-4"></div>
            <h1 className="text-white text-2xl">I really really like you. Please go out with me.</h1>
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
                height: `${(4 / 12) * 100}%`,
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
