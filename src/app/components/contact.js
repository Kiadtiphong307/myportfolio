import Image from "next/image";

export default function Contact() {
  return (
    <div className="text-white py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold pb-4 md:pb-8">Contact</h2>

        {/* Contact Info */}
        <div className="pt-4 md:pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-6 md:space-y-0 md:space-x-10 pb-6 md:pb-8">
            {/* Email */}
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <span>
                <Image
                  src="/images/gmail-svgrepo-com.png"
                  alt="Email"
                  width={32}
                  height={32}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </span>
              <a 
                href="mailto:kiadtiphongth192@gmail.com" 
                className="text-gray-300 text-sm md:text-base hover:text-white transition-colors duration-300"
              >
                kiadtiphongth192@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <span>
                <Image
                  src="/images/telephone-phone-svgrepo-com.png"
                  alt="Phone"
                  width={28}
                  height={28}
                  className="w-7 h-7 md:w-8 md:h-8"
                />
              </span>
              <a 
                href="tel:063-1298537" 
                className="text-gray-300 text-sm md:text-base hover:text-white transition-colors duration-300"
              >
                063-1298537
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <span>
                <Image
                  src="/images/location-pin-navigation-destination-maps-svgrepo-com.png"
                  alt="Location"
                  width={28}
                  height={28}
                  className="w-7 h-7 md:w-8 md:h-8"
                />
              </span>
              <p className="text-gray-300 text-sm md:text-base">
                169 Village No.2 Wiang, Thong, 
                <br className="hidden sm:block" />
                Chiang Rai, Thailand
              </p>
            </div>
          </div>
        </div>

        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 w-full md:w-1/2 mx-auto" />
      </div>
    </div>
  );
}