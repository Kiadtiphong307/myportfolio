export default function About() {
  return (
    <div>
      <div className="text-4xl font-bold pt-10 pb-4">About</div>
      <div className="text-2xl text-gray-300 p-4">
        &quot; A motivated and detail-oriented individual, committed to
        self-improvement by continuously seeking learning opportunities and new
        experiences to enhance my skills and knowledge across diverse fields.
        With a strong interest in the <strong>Full-Stack Developer</strong>{" "}
        role, I am confident that this position will provide opportunities for
        professional growth and allow me to apply my expertise effectively in
        future projects, delivering high-quality outcomes &quot;
      </div>

      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 w-1/2 mx-auto" />

      <div className="py-10 p-4">
        <div className="flex justify-between ">
          {/* Education */}
          <div className="relative pl-40">
            <div className="text-xl font-bold pb-6 text-white">Education</div>

            <div className="flex items-center justify-start mb-12">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center border-4 border-gray-900 shadow-lg">
                <span className="text-white font-semibold"></span>
              </div>

              <div className="ml-8">
                <h3 className="text-2xl font-bold text-white">
                  Maejo University
                </h3>
                <p className="text-xl text-gray-300">
                  Bachelor of Science, Computer Science
                </p>
                <p className="mt-2 text-gray-400">2022 - Present</p>
              </div>
            </div>

            <div className="flex items-center justify-start mb-12">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center border-4 border-gray-900 shadow-lg">
                <span className="text-white font-semibold"></span>
              </div>
              <div className="ml-8">
                <h3 className="text-2xl font-bold text-white">
                  DekdeePittayakom School
                </h3>
                <p className="text-xl text-gray-300">
                  Science - Mathematics Program
                </p>
                <p className="mt-2 text-gray-400">2019 - 2021</p>
              </div>
            </div>
          </div>

          <div className=" pr-10 mr-10">
            <p className="pl-40 pt-10">
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
