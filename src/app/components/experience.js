import Image from "next/image";

export default function Experience() {
  return (
    <div>
      <div className="text-4xl font-bold pt-10 pb-4">Experience</div>
      <div className="py-10 p-4">
        <div className="flex flex-row pl-12 ">
          <div className="hover:scale-110 transition duration-500 ease-in-out">
            <Image
              src="/images/rov-web-com.png"
              alt="Website"
              className="rounded-lg"
              width={1000}
              height={1000}
            />
          </div>

          <div className="">
            <div className="p-8 pl-20">
              <h3 className="text-3xl font-bold text-white">
                E-Sport Science Week67
              </h3>
              <p className="text-xl mt-2 text-gray-300">
                Web Developer & UX/UI
              </p>
              <p className="mt-2 text-gray-400">
                I was a web developer and UX/UI designer for the E-Sport
                Science Week67 event. I was responsible for creating the website
                and designing the user interface and user experience.
              </p>

              <div className="pt-6 p-2">
                <button className="hover:scale-125 transition  duration-500 ease-in-out bg-zinc-900 p-2 rounded-xl hover:text-yellow-500">
                  <a
                    href="https://www.cs.mju.ac.th/e-sports_sciweek/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


