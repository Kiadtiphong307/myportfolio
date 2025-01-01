export default function About() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-3xl md:text-4xl font-bold pt-6 md:pt-10 pb-4">
        About
      </div>

      <div className="text-xl md:text-2xl text-gray-300 p-2 md:p-4">
        &quot; 
        ผมมีความสนใจในการแสวงหาประสบการณ์ใหม่ ๆ เพื่อพัฒนาทักษะและเสริมสร้างความรู้หลากหลายด้าน ด้วยความสนใจอย่างยิ่งในตำแหน่ง
        <strong> Full-Stack Developer และ DevOps </strong> ซึ่งเชื่อมั่นว่าตำแหน่งนี้จะเป็นโอกาสสำคัญในการเติบโตในสายอาชีพ Developer 
        พร้อมทั้งเปิดโอกาสและพัฒนาทักษะให้กับผมในอนาคต 
        &quot;
      </div>

      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 w-full md:w-1/2 mx-auto" />

      <div className="py-6 md:py-10 p-2 md:p-4">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
          {/* Education Section */}
          <div className="w-full lg:w-1/2">
            <div className="text-xl font-bold pb-6 text-white pl-4 md:pl-8 lg:pl-16">
              Education
            </div>

            <div className="flex flex-col space-y-8">
              {/* Maejo University */}
              <div className="flex items-start space-x-4 md:space-x-6 pl-4 md:pl-8 lg:pl-16">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-yellow-500 rounded-full flex items-center justify-center border-4 border-gray-900 shadow-lg">
                  <span className="text-white font-semibold"></span>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    มหาวิทยาลัยแม่โจ้
                  </h3>
                  <p className="text-lg md:text-xl text-gray-300">
                    วิทยาศาสตรบัณฑิต, วิทยาการคอมพิวเตอร์
                  </p>
                  <p className="mt-2 text-gray-400">2022 - ปัจจุบัน</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 md:space-x-6 pl-4 md:pl-8 lg:pl-16">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-yellow-500 rounded-full flex items-center justify-center border-4 border-gray-900 shadow-lg">
                  <span className="text-white font-semibold"></span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    โรงเรียนเด็กดีพิทยาคม
                  </h3>
                  <p className="text-lg md:text-xl text-gray-300">
                    แผนวิทยาศาสตร์ - คณิตศาสตร์
                  </p>
                  <p className="mt-2 text-gray-400">2019 - 2021</p>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Description */}
          <div className="w-full lg:w-1/2 p-4 md:p-8 lg:p-10">
            <p className="text-base md:text-lg">
              &quot; 
              
              สวัสดีครับ ผมชื่อเกียรติ์ติพงษ์ วงศ์มุ่ย ปัจจุบันเป็นนักศึกษาชั้นปีที่ 3 สาขาวิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้ 
              ผมชอบมุ่งมั่นพัฒนาตนเอง และการแสวงหาโอกาสในการเรียนรู้และหาประสบการณ์ใหม่ ๆ  เพื่อเสริมสร้างทักษะและความรู้ในหลากหลายด้าน
              ผมเชื่อมั่นว่าความพยายามในการพัฒนาตนเอง จะช่วยให้สามารถประยุกต์ใช้ความรู้ที่มีอย่างมีประสิทธิภาพในงานต่าง ๆ 
              โดยเฉพาะการเขียนโปรแกรม และการหาเทคโนโลยีใหม่ๆมาใช้
              ซึ่งเป็นสิ่งที่ชื่นชอบในการที่จะเรียนรู้ และ เผชิญกับความท้าทายใหม่ ๆ 
              ที่จะช่วยผลักดันให้ผมเติบโตในสายงานของ Developer
              
              &quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
