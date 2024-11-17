export default function About() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-3xl md:text-4xl font-bold pt-6 md:pt-10 pb-4">
        About
      </div>

      <div className="text-xl md:text-2xl text-gray-300 p-2 md:p-4">
        &quot; A motivated and detail-oriented individual, committed to
        self-improvement by continuously seeking learning opportunities and new
        experiences to enhance my skills and knowledge across diverse fields.
        With a strong interest in the <strong>Full-Stack Developer</strong>{" "}
        role, I am confident that this position will provide opportunities for
        professional growth and allow me to apply my expertise effectively in
        future projects, delivering high-quality outcomes &quot;
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
                    Maejo University
                  </h3>
                  <p className="text-lg md:text-xl text-gray-300">
                    Bachelor of Science, Computer Science
                  </p>
                  <p className="mt-2 text-gray-400">2022 - Present</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 md:space-x-6 pl-4 md:pl-8 lg:pl-16">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-yellow-500 rounded-full flex items-center justify-center border-4 border-gray-900 shadow-lg">
                  <span className="text-white font-semibold"></span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    DekdeePittayakom School
                  </h3>
                  <p className="text-lg md:text-xl text-gray-300">
                    Science - Mathematics Program
                  </p>
                  <p className="mt-2 text-gray-400">2019 - 2021</p>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Description */}
          <div className="w-full lg:w-1/2 p-4 md:p-8 lg:p-10">
            <p className="text-base md:text-lg">
              &quot; Hello, my name is Kiattipong Wongmui, a third-year student
              in the Computer Science program at Maejo University. I am a
              motivated and detail-oriented individual who is committed to
              continuously improving myself by seeking learning opportunities
              and new experiences to enhance my skills and knowledge in various
              fields. I believe that the effort to develop myself will allow me
              to apply my knowledge effectively in different tasks, especially
              in the field of Computer Science, which I am particularly
              passionate about. I am ready to face new challenges that will push
              me to grow both academically and professionally. &quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
