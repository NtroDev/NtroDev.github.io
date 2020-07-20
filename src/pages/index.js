import React from "react"

// Media
import ntroLogo from "../images/ntro-logo.png" // The ntro logo

console.log(ntroLogo)

const HomePage = () => (
  <div>
    <div id="home-hero" className="bg-brand h-screen">
      <div className="p-5 sm:px-20 absolute border-b border-gray-200 w-full">
        <img src={ntroLogo} alt="Ntro" width="80" />
      </div>
      <div className="p-5 sm:px-20 flex items-center h-full">
        <div className="sm:w-3/4 text-gray-700">
          <h1 className="text-4xl sm:text-6xl leading-none mb-8 sm:mb-10">We connect new developers with real-world experience</h1>
          <p className="text-xl mr-20 sm:mr-0 sm:text-2xl font-light mb-20">To help them land their first job!</p>
          <a className="bg-gray-700 text-white px-5 py-3 rounded-lg cursor-pointer text-xs sm:text-lg sm:px-8 sm:py-4">Apply Now</a>
        </div>
      </div>
    </div>

    <div className="bg-gray-200 px-5 py-20 sm:px-20">
      
      <p>Securing your first coding job shouldn’t be that difficult. You’ve already spent hours, possibly years, consuming every online academy and tutorial you could get your browser on. But when junior developer positions require three years of experience, new developers, such as yourself ,find the barrier to entry nearly impossible.</p>
      <h2>Programming experience for new developers</h2>
      <p>“I’ve finished my bootcamp. Why can’t the company just train me to do the job?” -Every new developer</p>
      <p>While the current system has its flaws, it’s requirements actually make sense. While you need experience, the truth is, companies don’t have the time or resources to train you. Managing an apprenticeship requires companies to spend time away from their primary business.</p>
      <p>That’s why Ntro is your chance to finally add some real-word experience to your knowledge and land that first tech role!</p>
      <h2>Own or manage a Startup?</h2>
      <p>Your startup provides a publicly accessible repo to Ntro. Ntro then pairs you with a qualified new developer to fix (or even create new) Github issues. Those pull requests are then code reviewed by a senior engineer at Ntro who provides you with a ready-to-merge pull request. That’s it!</p>
      <p>Imagine your bootstrapped startup receiving notifications for twenty pull requests for your latest web property!</p>
      <p>Your company sets the price for pull requests and Ntro developers are paid 80% of the proceeds.</p>
      <p>Everyone wins! You get your time to focus on actually building your business, and Ntro developers build their resumes.</p>
      <p>Who knows? Maybe they’ll even be your next junior engineer?</p>
      <p>As partner of Ntro, your company will receive a digital badge of honor on our website to help promote your business as an official “Ntro Partner”.</p>
    </div>
  </div>
)

export default HomePage
