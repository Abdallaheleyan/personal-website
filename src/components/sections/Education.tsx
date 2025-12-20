'use client';

export function Education() {
  return (
    <section id="education" className="section-animate py-32 px-6 lg:px-16 relative bg-gradient-to-b from-[#2a2a3e] via-[#1f1f2f] to-[#26314e]">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-5xl lg:text-8xl font-black mb-20 text-center">
          <span className="bg-gradient-to-r from-white via-[#4BC7BD] to-[#7DD3C0] bg-clip-text text-transparent">Education</span>
        </h2>

        <div className="mb-20">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#4BC7BD]/10 to-[#7DD3C0]/10 backdrop-blur-sm border-2 border-[#4BC7BD]/30 rounded-3xl p-8 neon-glow hover:scale-105 transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="mb-4 lg:mb-0">
                <h3 className="text-3xl font-black text-white mb-2">Bachelor of Computer Science in Software Engineering</h3>
                <p className="text-xl text-[#4BC7BD] font-bold mb-2">Multimedia University</p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black bg-gradient-to-r from-[#4BC7BD] to-[#7DD3C0] bg-clip-text text-transparent">2022-2025</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-[#4BC7BD] bg-clip-text text-transparent">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-[#4BC7BD]/20 rounded-2xl p-6 hover:scale-105 hover:border-[#4BC7BD]/40 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4BC7BD] to-[#7DD3C0] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <img src="/projects/icons/python_logo.svg" alt="Python" className="w-8 h-8" />
                </div>
                <span className="text-[#7DD3C0] font-bold text-sm">2025</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">100 Days of Code Python</h4>
              <p className="text-gray-400 text-sm mb-4">Udemy - Dr. Angela Yu</p>
              <div className="space-y-2">
                <button 
                  onClick={() => window.open('/certificates/Python_Certificate.pdf', '_blank')}
                  className="w-full bg-[#4BC7BD] text-black py-2 rounded-lg font-medium hover:scale-105 transition-transform text-sm"
                >
                  View Certificate
                </button>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-[#4BC7BD]/20 rounded-2xl p-6 hover:scale-105 hover:border-[#4BC7BD]/40 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4BC7BD] to-[#7DD3C0] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform p-3">
                  <img src="/projects/icons/ibm.svg" alt="IBM" className="w-full h-full object-contain" />
                </div>
                <span className="text-[#7DD3C0] font-bold text-sm">2025</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">People and Soft Skills Assessment</h4>
              <p className="text-gray-400 text-sm mb-4">Coursera - IBM</p>
              <div className="space-y-2">
                <button 
                  onClick={() => window.open('/certificates/People and Soft Skills Assessment.pdf', '_blank')}
                  className="w-full bg-[#4BC7BD] text-black py-2 rounded-lg font-medium hover:scale-105 transition-transform text-sm"
                >
                  View Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;



