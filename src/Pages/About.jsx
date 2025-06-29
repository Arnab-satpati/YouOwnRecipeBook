import React from "react";

const About = () => {
  return (
    <div
      className="relative w-full min-h-screen px-6 py-20 flex items-center justify-center text-white overflow-hidden bg-[#070707]"
    >
      {/* Glowing radial background */}
      <div className="absolute top-[-10%] left-[-15%] w-[35rem] h-[35rem] bg-chefOrange opacity-25 blur-[150px] rounded-full animate-blob-left z-0" />
      <div className="absolute bottom-[-10%] right-[-15%] w-[35rem] h-[35rem] bg-chefOrange opacity-25 blur-[150px] rounded-full animate-blob-right z-0" />

      {/* Faint grid lines for modern design */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            repeating-linear-gradient(#2e2d2d 1px, transparent 2px, transparent 33px),
            repeating-linear-gradient(to right, #2e2d2d 1px, transparent 2px, transparent 33px),
            linear-gradient(#000000, #000000)
          `,
        }}
      />

      {/* Content Container */}
      <div className="relative top-[3rem] z-10 max-w-5xl bg-white/5 border border-chefOrange/30 backdrop-blur-lg shadow-[0_0_40px_#B4410030] rounded-3xl p-10 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-500 mb-6 bg-transparent">
          🧑‍🍳 Meet ChefBot — Your Desi Kitchen Sidekick
        </h1>

        <p className="text-white/90 text-lg md:text-xl leading-relaxed bg-transparent">
          Ever stood in your kitchen, staring at onions, tomatoes, and half a pack of Maggi...
          and asked yourself: <span className="font-bold text-amber-500 bg-transparent">"Bhai, kya banau?"</span> <br />
          ChefBot gets it.
        </p>

        <p className="mt-6 text-white/80 bg-transparent">
          Born from the chaotic cravings of late-night hostellers, Indian moms with mood swings,
          and the timeless battle between laziness and hunger — ChefBot is here to make cooking a <span className="font-bold text-amber-500 bg-transparent">vibe</span>.
        </p>

        <p className="mt-6 text-white/70 bg-transparent">
          Feed it your ingredients, and boom — a recipe tailored to your mood, cravings,
          and maybe even your astrological sign (we're working on it 😄).
        </p>

        <div className="mt-8 bg-transparent grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "✨ Personalized Cooking",
              desc: "No generic YouTube videos — ChefBot understands ",
              span: "you",
            },
            {
              title: "🌶️ Built for Indian Tastes",
              desc: "Masala? Check. Andaaz? Of course. Desi vibes? ",
              span: "Overloaded.",
            },
            {
              title: "🚀 Lightweight & Fast",
              desc: "No logins. No wait. Just type and get your recipe before your stomach gets angrier.",
              span: "",
            },
            {
              title: "👩🏽‍🍳 For Everyone",
              desc: "From college rookies to moms who eyeball everything — ChefBot speaks your kitchen lingo.",
              span: "",
            },
          ].map(({ title, desc, span }, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-amber-500 transition-all duration-300 shadow-inner hover:shadow-amber-500/20"
            >
              <h2 className="text-xl font-semibold text-amber-400 bg-transparent">{title}</h2>
              <p className="mt-2 text-white/70 bg-transparent">
                {desc}
                {span && <span className="font-bold text-amber-500 bg-transparent">{span}</span>}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center italic text-amber-300 text-sm bg-transparent">
          Built in India 🇮🇳, cooked with code 🍲, served with love ❤️
        </p>
      </div>
    </div>
  );
};

export default About;
