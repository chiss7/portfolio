import { ME } from "../constants";

export const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <div className="w-72 h-72 lg:w-96 lg:h-96 mix-blend-lighten">
        <img
          src={ME.photo}
          className="object-contain rounded-full"
          alt="dev photo"
        ></img>
      </div>
    </div>
  );
};
