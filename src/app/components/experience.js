import Image from "next/image";

export default function Experience() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-3xl md:text-4xl font-bold pt-6 md:pt-10 pb-4">
        Experience
      </div>

      <div className="py-6 md:py-10">
        {/* ROV Science Week */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Image Container */}
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="/images/rov-web-com.png"
                alt="Website"
                className="w-full h-auto rounded-lg transform transition duration-500 group-hover:scale-105"
                width={1000}
                height={1000}
                priority
              />
            </div>
          </div>

          {/* Content Container */}
          <div className="w-full md:w-1/2 lg:w-3/5">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                E-Sport Science Week67
              </h3>
              
              <p className="text-lg md:text-xl text-gray-300">
                Web Developer & UX/UI
              </p>
              
              <p className="text-base md:text-lg text-gray-400">
              ผมทำหน้าที่และรับผิดชอบ เป็น Frontend และ UX/UI สำหรับการแข่งขัน E-Sport Science Week67 
              เพื่อประชาสัมพันธ์การแข่งขันระหว่าง ROV และรายเอียดการแข่งขันทั้งหมด
              </p>

              <div className="pt-4 md:pt-6">
                <a
                  href="https://www.cs.mju.ac.th/e-sports_sciweek/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-zinc-900 px-6 py-3 rounded-xl text-base md:text-lg
                    transform transition duration-300 hover:scale-105 hover:text-yellow-500
                    hover:shadow-lg hover:shadow-yellow-500/20"
                >
                  เข้าสู่เว็บไซต์
                </a>
              </div>
            </div>
          </div>

          

          
        </div>

        {/* COMCAMP 23 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 pt-10">

                    {/* Content Container */}
                    <div className="w-full md:w-1/2 lg:w-3/5">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                COMCAMP 23
              </h3>
              
              <p className="text-lg md:text-xl text-gray-300">
                Feature Enhancement & Bug Fixing
              </p>
              
              <p className="text-base md:text-lg text-gray-400">
              ผมทำหน้าที่ ดูแล ปรับปรุงฟังก์ชันและแก้ไขข้อผิดพลาดต่างๆ เพื่อปรับปรุงประสิทธิภาพของเว็บไซต์ ที่มีปัญหาในการใช้งาน 
              และได้รับโค้ดจากเพื่อนที่เป็น Developer ของเว็บไซต์
              </p>

              <div className="pt-4 md:pt-6">
                <a
                  href="https://www.cs.mju.ac.th/comcamp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-zinc-900 px-6 py-3 rounded-xl text-base md:text-lg
                    transform transition duration-300 hover:scale-105 hover:text-yellow-500
                    hover:shadow-lg hover:shadow-yellow-500/20"
                >
                  เข้าสู่เว็บไซต์
                </a>
              </div>
            </div>
          </div> 

          {/* Image Container */}
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="/images/CC23.png"
                alt="Website"
                className="w-full h-auto rounded-lg transform transition duration-500 group-hover:scale-105"
                width={1000}
                height={1000}
                priority
              />
            </div>
          </div>



          

          
        </div>

      </div>
    </div>
  );
}