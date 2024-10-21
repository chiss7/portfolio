import { useState } from "react";
import { Button } from "./Button";
import { STACK } from "../constants";

export const Stack = () => {
  const [value, setValue] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const category = STACK[value];

  return (
    <section className="h-full text-white pb-12 xl:pb-0">
      <div className="container mx-auto h-full xl:pt-8 xl:pb-16">
        <h2 className="h2 text-center">Tech Stack</h2>
        <div className="flex justify-center py-6">
          {STACK.map((item, index) => {
            return (
              <Button
                size={"md"}
                variant={"underline"}
                key={index}
                onClick={() => setValue(index)}
                className={`${
                  index === value && "border-teal-400 text-teal-400"
                }`}
              >
                {item.title}
              </Button>
            );
          })}
        </div>
        <div className="flex justify-center gap-12 flex-wrap">
          {/* icon */}
          {category.items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="relative">
                <i
                  className="text-4xl"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <IconComponent color={item.color} />
                </i>
                {hoveredIndex === index && (
                  <span className="absolute top-12 left-12 transform -translate-x-1/2 px-2 py-1 bg-zinc-800 text-white text-sm rounded-xl">
                    {item.name}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
