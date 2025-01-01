export default function About() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-3xl md:text-4xl font-bold pt-6 md:pt-10 pb-4">
        About
      </div>

      <div className="text-xl md:text-2xl text-gray-300 p-2 md:p-4">
        &quot; Third-year Computer Science student at Maejo University, a highly
        motivated and detail-oriented individual committed to continuous
        self-improvement through learning and seeking new experiences. My
        passion for Computer Science drives me to embrace challenges that foster
        growth in both academic and professional aspects. I am particularly
        interested in Full-stack Development and DevOps, which provide
        opportunities to explore both the technical and operational aspects of
        software development, enabling me to create efficient and scalable
        solutions &quot;
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
                    Factuly of Science, Computer Science
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
                    Science - Mathematics
                  </p>
                  <p className="mt-2 text-gray-400">2019 - 2021</p>
                </div>
              </div>
            </div>
          </div>

          {/* Focus */}
          <div className="w-full lg:w-1/2 p-4 md:p-8 lg:p-10">
            <div className="text-xl font-bold pb-6 text-white">
              Focus
            </div>
            <ul className="list-disc list-inside text-base md:text-lg text-gray-300">
              <li>Full-stack Development</li>
              <li>DevOps</li>
              <li>Efficient and scalable solutions</li>
              <li>Continuous self-improvement</li>
              <li>Embracing challenges</li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
}
