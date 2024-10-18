import { Button } from "./Button";
import { Photo } from "./Photo";
import { Social } from "./Social";
import { ME } from "../constants";
import { FiDownload } from "react-icons/fi";

export const Home = () => {
  return (
    <section className="h-full text-white">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="capitalize">
              Hello I&apos;m&nbsp;
              <strong className="text-teal-400">{ME.name}</strong>
            </span>
            <h1 className="h1 mb-6 capitalize">{ME.role}</h1>
            <p className="max-w-screen-sm mb-9 text-white/80">{ME.about}</p>
            {/* btns and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant={"primary"} size="md">
                Download CV&nbsp;
                <FiDownload className="text-xl" />
              </Button>
              {/* socials */}
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 rounded-full flex justify-center items-center border hover:bg-slate-100 hover:text-slate-900 transition-all"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>

          {/* tech stack */}
        </div>
      </div>
    </section>
  );
};
