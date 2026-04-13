import profile from "./assets/Foto Resmi Compress.jpg";
import { motion } from "framer-motion";

function TechCard({ name, icon }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
      }}
      whileHover={{ scale: 1.1, rotate: 2 }}
      className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col items-center justify-center transition"
    >
      <img src={icon} className="w-10 h-10 mb-3" />
      <p className="text-sm text-gray-300">{name}</p>
    </motion.div>
  );
}
export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-black border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-lg font-semibold">Jubilio</h1>

          <div className="space-x-6 text-sm">
            <a href="#home" className="hover:text-gray-400">Home</a>
            <a href="#about" className="hover:text-gray-400">About</a>
            <a href="#tech" className="hover:text-gray-400">Tech Stack</a>
            <a href="#project" className="hover:text-gray-400">Project</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="max-w-6xl mx-auto px-6 pt-32 pb-20 grid md:grid-cols-2 gap-10 items-center">

        {/* FOTO */}
        <div className="flex justify-center">
          <motion.img
            src={profile}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-64 h-64 object-cover rounded-full border border-gray-700"
          />
        </div>

        {/* TEXT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >  
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-white">Jubilio Karuna</span>
            </h1>
              
            <p className="text-gray-400 mb-6 leading-relaxed">
              I build web applications using ASP.NET Core and currently learning React 
              to create modern and interactive user interfaces.
            </p>

          </motion.div>


          {/* BUTTON */}
          <div className="flex gap-4">
            <motion.a
              href="/CV_Jubilio Karuna.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-5 py-2 rounded-md font-medium"
            >
              Download CV
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-600 px-5 py-2 rounded-md hover:border-white hover:bg-white hover:text-black transition duration-300"
            >
              Contact Me
            </motion.a>
          </div>
        </div>

      </section>

      <section id="about" className="max-w-5xl mx-auto px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-lg"
        >
            {/* TEXT */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 leading-relaxed mb-8"
            >
              <p className="text-gray-300 leading-relaxed mb-8">
                I am a fresh graduate in the IT field with a strong interest in web development.

                I have experience working with ASP.NET Core, Laravel, and SQL Server, and I am currently learning React to build modern and interactive user interfaces.

                I am eager to grow, learn new technologies, and contribute to real-world projects.
              </p>
            </motion.p>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center gap-16 text-center mt-6"
            >
              <div>
                <h3 className="text-3xl font-bold text-white">4</h3>
                <p className="text-gray-400 text-sm">Projects</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">1+</h3>
                <p className="text-gray-400 text-sm">Years Learning</p>
              </div>
            </motion.div>
        </motion.div>

      </section>

      <section id="tech" className="max-w-6xl mx-auto px-6 py-20">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Tech Stack
        </motion.h2>

        {/* FRONTEND */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl font-semibold mb-6 text-gray-300"
          >
            Frontend
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-2 md:grid-cols-5 gap-6"
          >
            <TechCard 
              name="HTML" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
            />

            <TechCard 
              name="CSS" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
            />

            <TechCard 
              name="JavaScript" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
            />

            <TechCard 
              name="React" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
            />

            <TechCard 
              name="Tailwind" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" 
            />
          </motion.div>
        </div>

        {/* BACKEND */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl font-semibold mb-6 text-gray-300"
          >
            Backend
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-2 md:grid-cols-5 gap-6"
          >
            <TechCard 
              name="ASP.NET" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" 
            />

            <TechCard 
              name="Laravel" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" 
            />

            <TechCard 
              name="C#" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" 
            />
          </motion.div>
        </div>

        {/* DATABASE */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl font-semibold mb-6 text-gray-300"
          >
            Database
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-2 md:grid-cols-5 gap-6"
          >
            <TechCard 
              name="SQL Server" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" 
            />

            <TechCard 
              name="MySQL" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
            />
          </motion.div>
        </div>

        {/* TOOLS */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl font-semibold mb-6 text-gray-300"
          >
            Tools
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-2 md:grid-cols-5 gap-6"
          >
            <TechCard 
              name="GitHub" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
            />

            <TechCard 
              name="VS Code" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" 
            />

            <TechCard 
              name="Visual Studio" 
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" 
            />
          </motion.div>

          {/* DESIGN TOOLS */}
          <div className="mt-12">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl font-semibold mb-6 text-gray-300"
            >
              Design Tools
            </motion.h3>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="grid grid-cols-2 md:grid-cols-5 gap-6"
            >
              <TechCard 
                name="Figma" 
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" 
              />

              <TechCard 
                name="Canva" 
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" 
              />
            </motion.div>
          </div>
        </div>

      </section>

      <section id="project" className="max-w-6xl mx-auto px-6 py-20">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>

        {/* FEATURED PROJECT */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden mb-10"
        >
            {/* IMAGE */}
            <img 
              src="/Jobfair.png"
              alt="Job Fair"
              className="w-full h-56 object-cover object-top"
            />

            <div className="p-8">

                <h3 className="text-2xl font-semibold mb-3">
                  Job Fair Recommendation System
                </h3>

                <p className="text-gray-400 mb-4">
                  A web-based job fair platform with content-based filtering using ML.NET 
                  to recommend jobs based on user preferences.
                </p>

                <p className="text-sm text-gray-500 mb-4">
                  ASP.NET Core MVC • SQL Server • ML.NET
                </p>

                <div className="flex gap-4">
                  <a 
                    href="LINK_DEMO_LU"
                    target="_blank"
                    className="bg-white text-black px-4 py-2 rounded-md text-sm hover:bg-gray-200"
                  >
                    View Project
                  </a>

                  <a 
                    href="https://github.com/Jubilio14/Jobfair.git"
                    target="_blank"
                    className="border border-gray-600 px-4 py-2 rounded-md text-sm hover:border-white"
                  >
                    GitHub
                  </a>
                </div>

            </div>
        </motion.div>
        {/* OTHER PROJECTS */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Goro Adventure */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.03 }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden mb-10"
          >
            <img 
              src="/goro.png"
              className="w-full h-40 object-cover transition duration-300 hover:scale-110"
            />

            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Goro Adventure</h3>

              <p className="text-gray-400 text-sm mb-3">
                Company profile website built with HTML and CSS.
              </p>

              <p className="text-xs text-gray-500 mb-4">
                HTML • CSS
              </p>

              <div className="flex gap-3">
                <a href="https://goroadventures.com/" target="_blank"
                  className="text-sm bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200">
                  View
                </a>

                <a href="https://github.com/Jubilio14/GoroAdventures.git" target="_blank"
                  className="text-sm border border-gray-600 px-3 py-1 rounded-md hover:border-white">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* Laksana Catering */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.03 }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden mb-10"
          >
            <img 
              src="/laksana.png"
              className="w-full h-40 object-cover transition duration-300 hover:scale-110"
            />

            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Laksana Catering</h3>

              <p className="text-gray-400 text-sm mb-3">
                Company profile website with interactive UI using JavaScript.
              </p>

              <p className="text-xs text-gray-500 mb-4">
                HTML • CSS • JavaScript
              </p>

              <div className="flex gap-3">
                <a href="LINK_DEMO" target="_blank"
                  className="text-sm bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200">
                  View
                </a>

                <a href="LINK_GITHUB" target="_blank"
                  className="text-sm border border-gray-600 px-3 py-1 rounded-md hover:border-white">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </section>

      <section id="contact" className="max-w-4xl mx-auto px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            Contact Me
          </h2>

          <p className="text-gray-400 mb-8">
            I'm currently open to job opportunities and collaborations.  
            Feel free to reach out!
          </p>

          {/* EMAIL BUTTON */}
          <motion.a 
            href="mailto:kjubilio@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 mb-8"
          >
            Send Email
          </motion.a>

          {/* SOCIAL ICON */}
          <div className="flex justify-center gap-8">

            {/* GitHub */}
            <motion.a 
              href="https://github.com/Jubilio14"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                className="w-6 h-6 invert"
              />
            </motion.a>

            {/* LinkedIn */}
            <motion.a 
              href="https://linkedin.com/in/jubiliokaruna"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                className="w-6 h-6"
              />
            </motion.a>

            {/* WhatsApp */}
            <motion.a 
              href="https://wa.me/62881082149579"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <img 
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
                className="w-6 h-6 invert"
              />
            </motion.a>

          </div>
        </motion.div>

      </section>

      <footer className="border-t border-zinc-800 py-6 text-center text-gray-500 text-sm">

        <p>
          © 2026 Jubilio Karuna. All rights reserved.
        </p>

      </footer>
    </div>
  );
}