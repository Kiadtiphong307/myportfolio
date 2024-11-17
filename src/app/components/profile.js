import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12 ">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">  
        
        <div className="w-full md:w-1/2 text-center md:text-left ">
          <h1 className="text-3xl md:text-4xl font-bold">
            Kiadtiphong Wongmui
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mt-2">
            Computer Science of Maejo University
          </p>

          <div className="flex justify-center md:justify-start space-x-6 pt-6">
            <SocialLink 
              href="https://www.facebook.com/profile.php?id=100011589696638"
              imageSrc="/images/facebook-svgrepo-com.png"
              alt="facebook"
            />
            <SocialLink 
              href="https://www.instagram.com/kiadtiphong_192/"
              imageSrc="/images/instagram-1-svgrepo-com.png"
              alt="Instagram"
            />
            <SocialLink 
              href="https://www.linkedin.com/in/%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B8%95%E0%B8%B4%E0%B9%8C%E0%B8%95%E0%B8%B4%E0%B8%9E%E0%B8%87%E0%B8%A9%E0%B9%8C-%E0%B8%A7%E0%B8%87%E0%B8%A8%E0%B9%8C%E0%B8%A1%E0%B8%B8%E0%B9%88%E0%B8%A2-57977a329/"
              imageSrc="/images/linkedin-network-communication-connection-internet-online-svgrepo-com.png"
              alt="LinkedIn"
            />
            <SocialLink 
              href="https://github.com/Kiadtiphong307"
              imageSrc="/images/github-142-svgrepo-com.png"
              alt="GitHub"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end ">
          <div className="w-64 md:w-96">
            <Image
              src="/images/Boss.png"
              className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                hover:scale-110 transition duration-500 ease-in-out drop-shadow-2xl"
              alt="boss"
              width={450}
              height={450}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
}



const SocialLink = ({ href, imageSrc, alt }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="transform hover:scale-150 transition duration-500 ease-in-out"
  >
    <Image
      src={imageSrc}
      alt={alt}
      width={40}
      height={32}
      className="drop-shadow-2xl"
    />
  </a>
);