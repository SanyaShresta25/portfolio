const education = [
  {
    degree: "Bachelor of Technology - BTech, Information Science And Engineering",
    institution: "NMAM Institute of Technology",
    location: "Udupi",
    duration: "2022 – 2026",
    grade: "9.08",
    activities: "VISTA | AURA CLUB | NSS IT WING",
    skills: ["Core Java", "Python", "Agile Methodologies"],
  },
  {
    degree: "Senior Secondary, Biology, General",
    institution: "Poornaprajna College, Udupi - 576102",
    duration: "2020 – 2022",
    grade: "95.3%",
   activities: "",
    skills: [],
   
  },
  {
    degree: "CBSE, High School",
    institution: "St.Mary's English Medium School, Udupi",
    duration: "2018 – 2020",
    grade: "91.2%",
    activities: "Science Club",
    skills: ["Communication","Leadership"],
  },
  {
    degree: "CBSE",
    institution: "Indian School, Ras Al Khaimah UAE",
    duration: "2008 – 2018",
    grade: "10 CGPA",
    activities: "Debates • Elocution • Music • Quizes • Science Club",
    skills: ["Leadership","Speaking","Music"],
  }
];

// List of certifications (item + date, date in italics)
const certifications = [
  { title: "AWS Educate Introduction to Cloud 101", date: "March 2025" },
  { title: "AWS Getting Started with Compute", date: "April 2025" },
  { title: "AWS Getting Started with Storage", date: "April 2025" },
  { title: "AWS Getting Started with Databases", date: "April 2025" },
  { title: "AWS Getting Started with Networking", date: "April 2025" },
  { title: "Python for Data Science, AI & Development by IBM through Coursera", date: "Jun 27, 2024" },
  { title: "Introduction to Microsoft Excel | Coursera Project Network", date: "Jun 12, 2023" },
  { title: "Android App Development from Internshala", date: "Jun 9, 2024" },
  { title: "Diploma in C/C++ and Advanced Java", date: "Jan 2024" },
  { title: "Participated in Smart India Hackathon Qualifiers", date: "Sept 2024" },
  { title: "Finance Committee Member, Incridea’25", date: "Feb 2025" },
  { title: "Pronite Committee Member, Incridea’25", date: "Feb 2025" },
];

const Education = () => (
  <section className="relative bg-[#d72660] min-h-screen flex flex-col items-center justify-center overflow-hidden">

    {/* Top Bumps */}
    <div className="absolute top-0 left-0 w-full z-10 pointer-events-none">
      <svg viewBox="0 0 1440 60" className="w-full h-[48px]" preserveAspectRatio="none">
        <path
          d="
            M0,35
            Q120,60 240,35
            Q360,10 480,35
            Q600,60 720,35
            Q840,10 960,35
            Q1080,60 1200,35
            Q1320,10 1440,35
            V0 H0 Z
          "
          fill="#fff"
        />
      </svg>
    </div>

    {/* Bottom Bumps */}
    <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
      <svg viewBox="0 0 1440 60" className="w-full h-[48px] rotate-180" preserveAspectRatio="none">
        <path
          d="
            M0,35
            Q120,60 240,35
            Q360,10 480,35
            Q600,60 720,35
            Q840,10 960,35
            Q1080,60 1200,35
            Q1320,10 1440,35
            V0 H0 Z
          "
          fill="#fff"
        />
      </svg>
    </div>

    {/* Left Bumps */}
    <div className="absolute left-0 top-0 h-full z-10 pointer-events-none">
      <svg viewBox="0 0 60 1440" className="h-full w-[48px]" preserveAspectRatio="none">
        <path
          d="
            M35,0
            Q60,120 35,240
            Q10,360 35,480
            Q60,600 35,720
            Q10,840 35,960
            Q60,1080 35,1200
            Q10,1320 35,1440
            H0 V0 Z
          "
          fill="#fff"
        />
      </svg>
    </div>

    {/* Right Bumps */}
    <div className="absolute right-0 top-0 h-full z-10 pointer-events-none">
      <svg viewBox="0 0 60 1440" className="h-full w-[48px] rotate-180" preserveAspectRatio="none">
        <path
          d="
            M35,0
            Q60,120 35,240
            Q10,360 35,480
            Q60,600 35,720
            Q10,840 35,960
            Q60,1080 35,1200
            Q10,1320 35,1440
            H0 V0 Z
          "
          fill="#fff"
        />
      </svg>
    </div>

    <div className="max-w-6xl mx-auto relative z-20 pt-[48px] pb-[48px] py-20 px-4 sm:px-6 lg:px-8 w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeInUp">
          Education
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Education Section */}
        <div>
          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-pink-50/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-pink-200"
              >
                <h3 className="text-lg font-bold text-[#d72660] mb-1">{edu.institution}</h3>
                <div className="text-gray-700 mb-1">{edu.degree}</div>
                <div className="text-gray-500 text-sm mb-1">{edu.duration}</div>
                <div className="text-gray-800 text-sm mb-1">
                  Grade: <span className="font-semibold">{edu.grade}</span>
                </div>
                {edu.activities && (
                  <div className="text-gray-600 text-sm mb-1">
                    Activities and societies: {edu.activities}
                  </div>
                )}
                {edu.skills.length > 0 && (
                  <div className="mt-1">
                    <span className="font-bold text-gray-700">Skills:</span>{" "}
                    <span className="text-gray-700">{edu.skills.join(" | ")}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Certifications & Achievements</h3>
          <div className="bg-pink-50/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-pink-200">
            <ul className="space-y-2">
              {certifications.map((cert, idx) => (
                <li key={idx} className="flex justify-between items-center text-gray-700">
                  <span>{cert.title}</span>
                  <span className="italic text-gray-500 text-sm whitespace-nowrap ml-3">{cert.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
