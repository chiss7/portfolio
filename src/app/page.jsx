import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HOME */}
      <section className="flex flex-col items-center justify-center py-4 md:py-7 lg:py-20 xl:py-32">
        <article className="flex flex-col-reverse gap-8 lg:gap-9 xl:gap-16 items-center lg:flex-row lg:justify-center px-5 md:w-2/3 lg:w-3/4 xl:w-2/3 2xl:w-1/2">
          <div className="text-center lg:text-left sm:w-3/4 lg:w-full lg:pr-10">
            <h1 className="text-4xl sm:text-6xl font-bold">
              Hi, I&apos;m Christopher Trujillo
            </h1>
            <h3 className="text-2xl mt-4">Fullstack Developer</h3>
            <p className="text-xl mt-4">
              This is a website built with Next.js and Tailwind CSS. It is
              hosted on Vercel.
            </p>
          </div>
          <Image
            alt=""
            src={"/images/face.jpg"}
            width={350}
            height={350}
            priority
            className="shadow-2xl"
          />
        </article>
      </section>
      <section className="flex flex-col items-center justify-center py-4 md:py-7 lg:py-20 xl:py-32"></section>
      {/* ABOUT */}
      {/* PROJECTS */}
      {/* CONTACT */}
    </>
  );
}
