import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <span className="flex justify-end pr-40">
          <span className="pr-80 pt-40">
            <p className="text-4xl font-bold ">Kiadtiphong Wongmui</p>
            <p className="text-2xl text-gray-300 pt-2">
              Computer Science of Maejo University
            </p>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <div className="flex justify-center space-x-6  pt-4 pr-60">
              <span>
              <a href="https://www.facebook.com/profile.php?id=100011589696638" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/facebook-svgrepo-com.png"
                  className="hover:scale-150 transition duration-500 ease-in-out drop-shadow-2xl"
                  alt="facebook"
                  width={40}
                  height={32}
                />
                </a>
              </span>

              <span>
                <a href="https://www.instagram.com/kiadtiphong_192/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/instagram-1-svgrepo-com.png"
                  className="hover:scale-150 transition duration-500 ease-in-out drop-shadow-2xl"
                  alt="Instagram"
                  width={40}
                  height={32}
                />
                </a>
              </span>

              <span>
                <a href="https://www.linkedin.com/in/%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B8%95%E0%B8%B4%E0%B9%8C%E0%B8%95%E0%B8%B4%E0%B8%9E%E0%B8%87%E0%B8%A9%E0%B9%8C-%E0%B8%A7%E0%B8%87%E0%B8%A8%E0%B9%8C%E0%B8%A1%E0%B8%B8%E0%B9%88%E0%B8%A2-57977a329/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/linkedin-network-communication-connection-internet-online-svgrepo-com.png"
                  className="hover:scale-150 transition duration-500 ease-in-out drop-shadow-2xl"
                  alt="Instagram"
                  width={40}
                  height={32}
                />
                </a>
                 </span>

              <span>
                <a href="https://github.com/Kiadtiphong307" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/github-142-svgrepo-com.png"
                  className="hover:scale-150 transition duration-500 ease-in-out drop-shadow-2xl"
                  alt="Instagram"
                  width={40}
                  height={32}
                />
                </a>
              </span>
            </div>
          </span>
          <span>
            <div>
              <Image
                src="/images/Boss.png"
                className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
               hover:scale-110 transition duration-500 ease-in-out drop-shadow-2xl" 
                alt="boss"
                width={450}
                height={450}
              />
            </div>
          </span>
        </span>
      </div>
    </div>
  );
}
