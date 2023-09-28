import Lottie from "lottie-react";
import injection from "../../../assets/animation_ln3irf5a.json";

const Home = () => {
  return (
    <div className="h-[calc(100vh-70px)] lg:h-screen w-full flex items-center justify-center text-white">
      <Lottie animationData={injection} loop={true} />
    </div>
  );
};

export default Home;
