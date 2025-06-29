import React from 'react'
import ChefBot from '../components/ChefBot'; // adjust the path if needed

const Magic = () => {
  return (
    <div><div
  className="relative w-full min-h-screen px-4 py-20 text-white flex items-center justify-center overflow-hidden"
  style={{
    background: `
      radial-gradient(circle at top left, #B44100 0%, transparent 45%),
      radial-gradient(circle at bottom right, #B44100 0%, transparent 45%),
      repeating-linear-gradient(rgb(46 45 45) 1px, #00000000 2px, #00000000 33px),
      repeating-linear-gradient(to right, rgb(46 45 45) 1px, transparent 2px, transparent 33px),
      linear-gradient(#000000, rgb(0 0 0) 100%),
      rgb(0 0 0)
    `,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'repeat',
  }}
>
  {/* Your Magic section's content here */}
  <div className="relative z-10 w-full h-[31.2rem] top-[2rem] max-w-4xl bg-white/5 border border-[#B44100]/40 rounded-2xl p-6 backdrop-blur-lg shadow-[0_0_30px_#B4410055]">
    <h2 className="text-3xl bg-transparent font-bold mb-4 text-[#f59e0b]">ChefBot Magic 🧑‍🍳🍲 – Hot Pot</h2>
    <p className= " bg-transparent text-white/80">Tell us your cravings and ingredients... ChefBot does the rest!</p>
    {/* AI Chat UI Goes Here */}
    <ChefBot />
  </div>
</div>
</div>
  )
}

export default Magic