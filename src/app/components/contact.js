import Imag from "next/image";

export default function Contact() {
  return (
    <div className=" text-white py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold pb-8">Contact</h2>

        {/* Contact Info */}
        <div className="pt-8">
            <div className="flex justify-center space-x-10  pb-8">
            {/* Email */}
            <div className="flex items-center space-x-3">
                <span>
                <Imag
                    src="/images/gmail-svgrepo-com.png"
                    alt="Email"
                    width={40}
                    height={40}
                />
                </span>
                <a href="mailto:ivandan@email.com" className="text-gray-300">
                kiadtiphongth192@gmail.com
                </a>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3 ">
                <span>
                <Imag
                    src="/images/telephone-phone-svgrepo-com.png"
                    alt="Phone"
                    width={32}
                    height={32}
                />
                </span>
                <a href="tel:+12015550124" className="text-gray-300">
                063-1298537
                </a>
            </div>

            <div className="flex items-center space-x-3">
                <span>
                <Imag
                    src="/images/location-pin-navigation-destination-maps-svgrepo-com.png"
                    alt="Phone"
                    width={32}
                    height={32}
                />
                </span>
                <p className="text-gray-300">
                169 Village No.2 Wiang, Thong, Chiang Rai, Thailand{" "}
                </p>
            </div>
            </div>
        </div>

        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 w-1/2 mx-auto" />

      </div>
    </div>
  );
}
