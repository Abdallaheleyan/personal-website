'use client';

interface AboutProps {
  skills: string[];
}

export function About({ skills }: AboutProps) {
  return (
    <section id="about" className="section-animate py-32 px-6 lg:px-16 relative bg-gradient-to-b from-[#0a0a0a] via-[#111125] to-[#0f1a2e]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-title text-5xl lg:text-8xl font-black mb-16">
          <span className="bg-gradient-to-r from-white via-[#4BC7BD] to-[#7DD3C0] bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
          I&apos;m a passionate software engineer with experience in full-stack and mobile development, always driven by curiosity and a love for learning
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span key={skill} className="skill-tag bg-gradient-to-r from-[#4BC7BD]/20 to-[#7DD3C0]/20 text-white px-6 py-3 rounded-full font-bold border border-[#4BC7BD]/30 hover:scale-110 transition-transform cursor-pointer neon-glow">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;








