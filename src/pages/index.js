import React from "react"
import { Link } from "gatsby"

// Media
import ntroLogo from "../images/ntro-logo.png" // The ntro logo

console.log(ntroLogo)

const HomePage = () => (
  <div>
    <div id="home-hero" className="bg-brand h-screen">
      <div className="p-5 sm:px-20 border-b border-gray-200 w-full">
        <img src={ntroLogo} alt="Ntro" width="80" />
      </div>
      <div className="px-5 sm:px-20 flex items-center h-full">
        <div className="sm:w-3/4 text-gray-700">
          <h1 className="text-4xl sm:text-6xl leading-none mb-8 sm:mb-10">We connect new developers with real-world experience</h1>
          <p className="text-xl mr-20 sm:mr-0 sm:text-2xl font-light mb-20">To help them land their first job!</p>
          <a href="https://forms.gle/QJ1zHKnmmRskDq3P9" className="bg-gray-700 text-white px-5 py-3 rounded cursor-pointer sm:text-lg sm:px-8 sm:py-4 mr-4">Apply Now</a>
          <Link to="#about" className="bg-gray-200 px-5 py-3 rounded cursor-pointer sm:text-lg sm:px-8 sm:py-4">Learn More</Link>
        </div>
      </div>
    </div>

    <div id="about" className="bg-gray-700 px-5 sm:px-20 py-40 text-white leading-loose">
      <div className="sm:w-3/4">
        <h1 className="text-4xl mb-8 leading-none">An apprenticeship for new developers</h1>
        <p className="mb-6">Securing your first coding job shouldn’t be that difficult. You’ve already spent weeks, possibly years, consuming every online academy and tutorial you could get your browser on. But when junior developer positions require three years of experience, new developers such as yourself, find the barrier to entry nearly impossible.</p>
        <p className="mb-6">While the current system has its flaws, it’s requirements actually make sense. While you need experience, the truth is, companies don’t have the time or resources to train you. Managing an apprenticeship requires companies to spend time away from their primary business.</p>
        <p>That’s why Ntro is your chance to finally add some real-word experience to your knowledge and land that first tech role!</p>
      </div>
    </div>

    <div className="p-5 sm:px-20 text-xs">
      <p>&copy; 2020 Ntro. Questions? Email ntro at hey dot com</p>
    </div>
  </div>
)

export default HomePage
