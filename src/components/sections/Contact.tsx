'use client';

interface ContactProps {
  email: string;
}

export function Contact({ email }: ContactProps) {
  return (
    <section id="contact" className="py-32 px-6 lg:px-16 relative bg-gradient-to-b from-[#0a0a0a] via-[#111125] to-[#0f1a2e]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="contact-content">
          <h2 className="text-5xl lg:text-8xl font-black mb-20 leading-tight">
            <span className="bg-gradient-to-r from-white via-[#4BC7BD] to-[#7DD3C0] bg-clip-text text-transparent">
              Let&apos;s Create Magic
            </span>
          </h2>
          <div className="mb-20 relative">
            <div className="text-3xl lg:text-5xl font-light text-[#4BC7BD] mb-8 cursor-pointer hover:scale-105 transition-transform p-8 rounded-2xl border border-[#4BC7BD]/20 backdrop-blur-sm neon-glow">
              {email}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;


