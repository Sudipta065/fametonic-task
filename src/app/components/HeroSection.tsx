export default function HeroSection() {
  return (
    <section className="relative bg-black text-white px-6 md:px-16 pb-4 pt-0 lg:pt-16 flex flex-col-reverse md:flex-row items-center justify-center overflow-hidden md:px-16 lg:px-32 ">
      <div className="flex-1 space-y-2 z-12 mr-0 lg:mr-[-140px] text-center md:text-left">
        <h2 className="text-[25px] lg:text-[35px] font-bold font-urbanist leading-tight lg:max-w-[516px]">
          Want to Turn Social Media <br className="lg:hidden block" /> Into a
          Profitable Career?
        </h2>

        <h3
          className="lg:text-[35px] text-[25px] text-[#00E7F9] text-shadow-[0px 0px 4px #FC004E] font-urbanist font-semibold leading-snug lg:max-w-[550px]"
          style={{ textShadow: "2px 2px 4px #FC004E" }}
        >
          Discover your way to success <br className="" />
          with Fametonic:
        </h3>
        <ul className="space-y-4 text-white text-base md:text-lg font-figtree max-w-[546px]">
          {[
            "Start growing your influence right away—no waiting required!",
            "Create viral TikToks and Reels step by step with easy-to-follow lessons",
            "Use a Personal AI Worker to boost your content",
            "Learn from expert-led courses designed for aspiring influencers",
          ].map((text, idx) => (
            <li key={idx} className="flex items-center  gap-3 ">
              <span className="text-2xl ">✨</span>
              <span className="flex-1 text-left">{text}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col-reverse lg:flex-col items-center lg:items-start pt-8 gap-6">
          <div className="lg:pt-8 flex flex-col items-center md:items-start ">
            <button className="bg-[#FC004E] transition text-[20px] text-white font-bold py-2 rounded-xl min-w-[313px] shadow-[2px_2px_10px_0px_#00E7F9] font-urbanist text-lg">
              GET STARTED →
            </button>
            <p className="text-sm text-white mt-2 font-figtree flex items-center justify-center w-[313px] ">
              1-minute quiz for personalized insights
            </p>
          </div>
          <div>
            <p className="text-[12px] text-[#ABABAB] lg:pt-8 font-figtree pb-4 lg:max-w-[full] max-w-[280px]">
              By clicking “Get Started”, you agree with Terms and Conditions,
              Privacy Policy, Subscription Terms
            </p>
            <p className="text-[10px] text-[#ABABAB] font-figtree">
              Fametonic ©2025 All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="flex z-10">
        <img
          src="./phone.jpg"
          alt="Mobile dashboard"
          className="w-full max-h-[679px]"
        />
      </div>
    </section>
  );
}
