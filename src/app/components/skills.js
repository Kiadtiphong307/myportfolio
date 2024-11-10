import Image from "next/image";

export default function Skills() {
  return (
    <div className=" py-12 sm:py-12">
      <div className="mx-auto">
        <div className="text-4xl font-bold pt-2 pb-4 flex justify-end pr-20">
          Skills
        </div>
        <div className=" mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-2 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {/* HTML */}
          <div className="pr-6 hover:scale-110 transition duration-500 ease-in-out drop-shadow-xl ">
            <div className="max-w-sm rounded-3xl overflow-hidden bg-zinc-900 ">
              <div className="px-6 py-4 flex justify-center">
                <Image
                  src="/images/html-5-svgrepo-com.png"
                  alt="HTML5"
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1 "
                  width={500}
                  height={500}
                />
              </div>
              <div className="px-6 py-4 font-bold text-sm  text-center ">
                <span className="font-bold text-xl mb-2 text-gray-200 pb-4 ">
                  HTML5
                </span>
              </div>
            </div>
          </div>
          {/* JS */}
          <div className="pr-6 hover:scale-110 transition duration-500 ease-in-out drop-shadow-xl ">
            <div className="max-w-sm rounded-3xl overflow-hidden bg-zinc-900">
              <div className="px-6 py-4 flex justify-center">
                <Image
                  src="/images/js-svgrepo-com.png"
                  alt="JS"
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                  width={500}
                  height={500}
                />
              </div>
              <div className="px-6 py-4 font-bold text-sm  text-center ">
                <span className="font-bold text-xl mb-2 text-gray-200 pb-4 ">
                  JavaScript
                </span>
              </div>
            </div>
          </div>
          {/* CSS */}
          <div className="pr-6 hover:scale-110 transition duration-500 ease-in-out drop-shadow-xl ">
            <div className="max-w-sm rounded-3xl overflow-hidden bg-zinc-900">
              <div className="px-6 py-4 flex justify-center">
                <Image
                  src="/images/css-3-svgrepo-com.png"
                  alt="CSS"
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                  width={500}
                  height={500}
                />
              </div>
              <div className="px-6 py-4 font-bold text-sm  text-center ">
                <span className="font-bold text-xl mb-2 text-gray-200 pb-4 ">
                  CSS
                </span>
              </div>
            </div>
          </div>
          {/* PYTHON */}
          <div className="pr-6 hover:scale-110 transition duration-500 ease-in-out drop-shadow-xl ">
            <div className="max-w-sm rounded-3xl overflow-hidden bg-zinc-900">
              <div className="px-6 py-4 flex justify-center">
                <Image
                  src="/images/python-svgrepo-com.png"
                  alt="PYTHON"
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                  width={500}
                  height={500}
                />
              </div>
              <div className="px-6 py-4 font-bold text-sm  text-center ">
                <span className="font-bold text-xl mb-2 text-gray-200 pb-4 ">
                  Python
                </span>
              </div>
            </div>
          </div>
          {/* GO */}
          <div className="pr-6 hover:scale-110 transition duration-500 ease-in-out drop-shadow-xl ">
            <div className="max-w-sm rounded-3xl overflow-hidden bg-zinc-900">
              <div className="px-6 py-4 flex justify-center">
                <Image
                  src="/images/go-svgrepo-com.png"
                  alt="Go"
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                  width={500}
                  height={500}
                />
              </div>
              <div className="px-6 py-4 font-bold text-sm  text-center ">
                <span className="font-bold text-xl mb-2 text-gray-200 pb-4 ">
                  Go
                </span>
              </div>
            </div>
          </div>
          {/* React.js */}
          <div className="pr-6 hover:scale-110 transition duration-500 ease-in-out drop-shadow-xl ">
            <div className="max-w-sm rounded-3xl overflow-hidden bg-zinc-900">
              <div className="px-6 py-4 flex justify-center">
                <Image
                  src="/images/react-svgrepo-com.png"
                  alt="React.js"
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                  width={500}
                  height={500}
                />
              </div>
              <div className="px-6 py-4 font-bold text-sm  text-center ">
                <span className="font-bold text-xl mb-2 text-gray-200 pb-4 ">
                  React.js
                </span>
              </div>
            </div>
          </div>
          {/* Next.js */}
          <div className="pr-6 hover:scale-110 transition duration-500 ease-in-out drop-shadow-xl ">
            <div className="max-w-sm rounded-3xl overflow-hidden bg-zinc-900">
              <div className="px-6 py-4 flex justify-center">
                <Image
                  src="/images/next-dot-js-svgrepo-com.png"
                  alt="Next.js "
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                  width={500}
                  height={500}
                />
              </div>
              <div className="px-6 py-4 font-bold text-sm  text-center ">
                <span className="font-bold text-xl mb-2 text-gray-200 pb-4 ">
                  Next.js
                </span>
              </div>
            </div>
          </div>
          {/* Vue.js */}
          <div className="pr-6 hover:scale-110 transition duration-500 ease-in-out drop-shadow-xl ">
            <div className="max-w-sm rounded-3xl overflow-hidden bg-zinc-900">
              <div className="px-6 py-4 flex justify-center">
                <Image
                  src="/images/vue-svgrepo-com.png"
                  alt="Vue.js"
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                  width={500}
                  height={500}
                />
              </div>
              <div className="px-6 py-4 font-bold text-sm  text-center ">
                <span className="font-bold text-xl mb-2 text-gray-200 pb-4 ">
                  Vue.js
                </span>
              </div>
            </div>
          </div>
          {/* Node.js */}
          <div className="pr-6 hover:scale-110 transition duration-500 ease-in-out drop-shadow-xl ">
            <div className="max-w-sm rounded-3xl overflow-hidden bg-zinc-900">
              <div className="px-6 py-4 flex justify-center">
                <Image
                  src="/images/node-js-svgrepo-com.png"
                  alt="Node.js"
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                  width={500}
                  height={500}
                />
              </div>
              <div className="px-6 py-4 font-bold text-sm  text-center ">
                <span className="font-bold text-xl mb-2 text-gray-200 pb-4 ">
                  Node.js
                </span>
              </div>
            </div>
          </div>
          {/* Tailwind */}
          <div className="pr-6 hover:scale-110 transition duration-500 ease-in-out drop-shadow-xl ">
            <div className="max-w-sm rounded-3xl overflow-hidden bg-zinc-900">
              <div className="px-6 py-4 flex justify-center">
                <Image
                  src="/images/tailwind-svgrepo-com.png"
                  alt="Tailwind"
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                  width={500}
                  height={500}
                />
              </div>
              <div className="px-6 py-4 font-bold text-sm  text-center ">
                <span className="font-bold text-xl mb-2 text-gray-200 pb-4 ">
                  Tailwind
                </span>
              </div>
            </div>
          </div>
          {/* Bootstrap */}
          <div className="pr-6 hover:scale-110 transition duration-500 ease-in-out drop-shadow-xl ">
            <div className="max-w-sm rounded-3xl overflow-hidden bg-zinc-900">
              <div className="px-6 py-4 flex justify-center">
                <Image
                  src="/images/bootstrap-svgrepo-com.png"
                  alt="Bootstrap"
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                  width={500}
                  height={500}
                />
              </div>
              <div className="px-6 py-4 font-bold text-sm  text-center ">
                <span className="font-bold text-xl mb-2 text-gray-200 pb-4 ">
                  Bootstrap
                </span>
              </div>
            </div>
          </div>
          {/* Mysql */}
          <div className="pr-6 hover:scale-110 transition duration-500 ease-in-out drop-shadow-xl ">
            <div className="max-w-sm rounded-3xl overflow-hidden bg-zinc-900">
              <div className="px-6 py-4 flex justify-center">
                <Image
                  src="/images/mysql-logo-svgrepo-com.png"
                  alt="Mysql"
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                  width={500}
                  height={500}
                />
              </div>
              <div className="px-6 py-4 font-bold text-sm  text-center ">
                <span className="font-bold text-xl mb-2 text-gray-200 pb-4 ">
                  Node.js
                </span>
              </div>
            </div>
          </div>
          {/* MongoDB */}
          <div className="pr-6 hover:scale-110 transition duration-500 ease-in-out drop-shadow-xl ">
            <div className="max-w-sm rounded-3xl overflow-hidden bg-zinc-900">
              <div className="px-6 py-4 flex justify-center">
                <Image
                  src="/images/mongodb-svgrepo-com.png"
                  alt="MongoDB"
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                  width={500}
                  height={500}
                />
              </div>
              <div className="px-6 py-4 font-bold text-sm  text-center ">
                <span className="font-bold text-xl mb-2 text-gray-200 pb-4 ">
                  Node.js
                </span>
              </div>
            </div>
          </div>
          {/* Github */}
          <div className="pr-6 hover:scale-110 transition duration-500 ease-in-out drop-shadow-xl ">
            <div className="max-w-sm rounded-3xl overflow-hidden bg-zinc-900">
              <div className="px-6 py-4 flex justify-center">
                <Image
                  src="/images/github-color-svgrepo-com.png"
                  alt="Github"
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                  width={500}
                  height={500}
                />
              </div>
              <div className="px-6 py-4 font-bold text-sm  text-center ">
                <span className="font-bold text-xl mb-2 text-gray-200 pb-4 ">
                  Github
                </span>
              </div>
            </div>
          </div>
          {/* Gitlab */}
          <div className="pr-6 hover:scale-110 transition duration-500 ease-in-out drop-shadow-xl ">
            <div className="max-w-sm rounded-3xl overflow-hidden bg-zinc-900">
              <div className="px-6 py-4 flex justify-center">
                <Image
                  src="/images/gitlab-svgrepo-com.png"
                  alt="Gitlab"
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                  width={500}
                  height={500}
                />
              </div>
              <div className="px-6 py-4 font-bold text-sm  text-center ">
                <span className="font-bold text-xl mb-2 text-gray-200 pb-4 ">
                  Gitlab
                </span>
              </div>
            </div>
          </div>
          {/* Docker */}
          <div className="pr-6 hover:scale-110 transition duration-500 ease-in-out drop-shadow-xl ">
            <div className="max-w-sm rounded-3xl overflow-hidden bg-zinc-900">
              <div className="px-6 py-4 flex justify-center">
                <Image
                  src="/images/docker-svgrepo-com.png"
                  alt="Docker"
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                  width={500}
                  height={500}
                />
              </div>
              <div className="px-6 py-4 font-bold text-sm  text-center ">
                <span className="font-bold text-xl mb-2 text-gray-200 pb-4 ">
                  Docker
                </span>
              </div>
            </div>
          </div>
          {/* Kubernetes */}
          <div className="pr-6 hover:scale-110 transition duration-500 ease-in-out drop-shadow-xl ">
            <div className="max-w-sm rounded-3xl overflow-hidden bg-zinc-900">
              <div className="px-6 py-4 flex justify-center">
                <Image
                  src="/images/kubernetes-svgrepo-com.png"
                  alt="Kubernetes"
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                  width={500}
                  height={500}
                />
              </div>
              <div className="px-6 py-4 font-bold text-sm  text-center ">
                <span className="font-bold text-xl mb-2 text-gray-200 pb-4 ">
                  Kubernetes
                </span>
              </div>
            </div>
          </div>
          {/* Figma */}
          <div className="pr-6 hover:scale-110 transition duration-500 ease-in-out drop-shadow-xl ">
            <div className="max-w-sm rounded-3xl overflow-hidden bg-zinc-900">
              <div className="px-6 py-4 flex justify-center">
                <Image
                  src="/images/figma-svgrepo-com.png"
                  alt="Figma"
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                  width={500}
                  height={500}
                />
              </div>
              <div className="px-6 py-4 font-bold text-sm  text-center ">
                <span className="font-bold text-xl mb-2 text-gray-200 pb-4 ">
                  Figma
                </span>
              </div>
            </div>
          </div>
          {/* Linux */}
          <div className="pr-6 hover:scale-110 transition duration-500 ease-in-out drop-shadow-xl ">
            <div className="max-w-sm rounded-3xl overflow-hidden bg-zinc-900">
              <div className="px-6 py-4 flex justify-center">
                <Image
                  src="/images/Linux-svgrepo-com.png"
                  alt="Linux"
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                  width={500}
                  height={500}
                />
              </div>
              <div className="px-6 py-4 font-bold text-sm  text-center ">
                <span className="font-bold text-xl mb-2 text-gray-200 pb-4 ">
                  Linux
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
