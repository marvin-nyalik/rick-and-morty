import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Welcome to Home",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <>
    <main className="my-5 p-5 h-screen md:h-[95vh] container max-w-[95%] border-2 border-emerald-300 rounded-lg mx-auto lg:max-w-4xl xl:max-w-6xl flex flex-col md:flex-row justify-evenly items-center">
      <div className="w-full md:w-7/24 my-auto flex flex-col items-center justify-center md:my-0">
        First Div
        <Image 
        src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
        width={100}
        height={100}
        className="w-full max-w-[85%] mx-auto"
        alt="A girl like GT"
        />
      </div>
      <div className="w-full bg-white shadow-2xl rounded-xl max-w-[90%] md:w-7/24 my-auto mx-auto items-center flex justify-center">
        <p className="p-3 text-justify text-sm leading-loose font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Ipsum, cumque veritatis architecto laudantium excepturi 
        voluptates, cupiditate quaerat voluptatem modi tempore quae,
        facilis nemo delectus inventore non iusto numquam dolore harum. 
        Similique.
        </p>
      </div>
      <div className="w-full cursor-pointer hover:text-teal-500 hover:border-red-300 hover:border-2 border-2 rounded-full md:w-7/24 my-4 items-center flex justify-center m-2">
        Marvin Vegas
      </div>
    </main>
    <div className="container mx-auto max-w-[90%] h-auto my-4">
    <div className="flex flex-col space-y-5 max-w-[95%] mx-auto md:grid md:grid-cols-3 md:gap-6 md:my-auto md:h-full">
      <div className="shadow-2xl border-t border-pink-300 bg-white rounded-lg flex justify-center items-center space-x-4 p-2">
        <Image 
        src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="some staff guy"
        width={100}
        height={70}
        className="w-1/4 h-24 rounded-full md:rounded-full mx-auto"
        />
         <div className="w-3/4">
          <blockquote>
            <p className="text-sm leading-snug">
              “Tailwind CSS is the only framework that I have seen scale
                on large teams. It is easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-semibold mt-2 text-xs">
            <div className="text-sky-500">
              James Kitana
            </div>
            <div className="text-slate-700">
              Staff Engineer, Angolia
            </div>
          </figcaption>
         </div>
      </div>
      <div className="shadow-2xl border-t border-gray-300 bg-white rounded-lg flex justify-between items-center p-2 space-x-4">
      <Image 
        src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="some staff guy"
        width={100}
        height={70}
        className="w-1/4 h-24 rounded-full md:rounded-full mx-auto"
        />
         <div className="w-3/4">
          <blockquote>
            <p className="text-sm leading-snug">
              “Tailwind CSS is the only framework that I have seen scale
                on large teams. It is easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-semibold mt-2 text-xs">
            <div className="text-sky-500">
              James Kitana
            </div>
            <div className="text-slate-700">
              Staff Engineer, Angolia
            </div>
          </figcaption>
         </div>
      </div>
      <div className="shadow-2xl border-t border-orange-300 bg-white rounded-lg flex justify-between items-center p-2 space-x-4">
      <Image 
        src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="some staff guy"
        width={100}
        height={70}
        className="w-1/4 h-24 rounded-full md:rounded-full mx-auto"
        />
         <div className="w-3/4">
          <blockquote>
            <p className="text-sm leading-snug">
              “Tailwind CSS is the only framework that I have seen scale
                on large teams. It is easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-semibold mt-2 text-xs">
            <div className="text-sky-500">
              James Kitana
            </div>
            <div className="text-slate-700">
              Staff Engineer, Angolia
            </div>
          </figcaption>
         </div>
      </div>
    </div>
    </div>
    <div className="bottom-0 mt-5 bg-emerald-500 mt-2 h-12 md:h-24 w-full flex justify-center items-center">
      <p className="text-sm md:text-base text-white font-medium md:font-semibold">&copy; 2024. All Rights Reserved</p>
    </div>
</>
  );
}
