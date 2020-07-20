import React from "react"
import { Link } from "gatsby"

// Media
import ntroLogo from "../images/ntro-logo.png" // The ntro logo

const AboutPage = () => (
  <div>
    <div className="p-5 sm:px-20 border-b border-gray-200 w-full">
      <img src={ntroLogo} alt="Ntro" width="80" />
    </div>
  </div>
)

export default AboutPage
