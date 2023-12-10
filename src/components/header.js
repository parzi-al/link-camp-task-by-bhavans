import React from 'react'

import Jaba from './../assets/ieee-logo.png'

const butt = () => {
  return (
       <div className="meta-nav">
       <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n\t\t\n\t\tbody {\n\t\t\tfont-family: Verdana, Arial, Helvetica, sans-serif;\n\t\t\tpadding: 0;\n\t\t\tmargin: 0;\n\t\t}\n\t\t\n\t\t.meta-nav {\n\t\t\tmin-height: 40px;\n    \t\tbackground: #000000;\n    \t\tcolor: #ffffff;\n\t\t\tpadding: 0px;\n\t\t\tmargin: 0px;\n\t\t}\n\t\t\n\t\t\n\t\t#meta-ieee-logo {\n  \t\t\tmargin: 0px;\n\t\t\tfloat:right;\n \t\t}\n\n\t\t#meta-ieee-logo .joinIEEE{\n\t\t\tfloat: right;\n\t\t\tcolor: #fff;\n \t\t\tpadding: 11px 16px;\n\t\t}\n\n\t\t#meta-ieee-logo .joinIEEE:link, #meta-ieee-logo .joinIEEE:visited, #meta-ieee-logo .joinIEEE:active {\n\t\t\tcolor: #fff;\n\t\t\ttext-decoration: none;\n\t\t}\n\n\t\t#meta-ieee-logo .joinIEEE:hover {\n\t\t\tcolor: #fff;\n\t\t\ttext-decoration: underline;\n\t\t}\n\n\t\t#meta-ieee-logo img{\n\t\t\tfloat: right;\n\t\t}\n\n\t\t#meta-ieee-logo img{\n\t\t\tpadding: 5px 36px 0px 0px;\n\t\t}\n\n\t\t \n\n\t\t \n\t\t\n\t\t@media (max-width: 800px) {\n\t\t.meta-nav {\n\t\t\tmin-height: 100px;\n    \t\tbackground: #000000;\n    \t\tcolor: #ffffff;\n\t\t\tpadding: 0px;\n\t\t\tmargin: 0px;\n\t\t}\n\t\t.meta-ieee-logo {\n  \t\t\tpadding: 20px 0px 0px 0px;\n\t\t\tfloat:right;\n\t\t\tmax-width: 100px;\n\t\t}\n\t\t}\n\t\t\n\t\tp {\n\t\t\tfont-family: inherit;\n\t\t\tfont-size: .9em;\n\t\t\tline-height: 125%;\n\t\t\tborder: 0;\n\t\t\tmargin: 0;\n\t\t}\n\n\t\t#ieee-meta-a {\n\t\t\tcolor: #fff;\n\t\t\ttext-align: left;\n\t\t\tpadding: 11px 36px;\n\t\t\tfloat: left;\n\t\t}\n\n\t\t#ieee-meta-a a:link, #ieee-meta-a a:visited, #ieee-meta-a a:active {\n\t\t\tcolor: #fff;\n\t\t\ttext-decoration: none;\n\t\t}\n\n\t\t#ieee-meta-a a:hover {\n\t\t\tcolor: #fff;\n\t\t\ttext-decoration: underline;\n\t\t}\n\n\t"
    }}
  />
  <div className="meta-nav">
    <p id="ieee-meta-a">
      <a href="https://www.ieee.org/index.html">IEEE.org</a> &nbsp;|&nbsp;{" "}
      <a href="https://www.ieeexplore.ieee.org/Xplore/guesthome.jsp">
        IEEE <em>Xplore</em> Digital Library
      </a>{" "}
      &nbsp;|&nbsp; <a href="https://standards.ieee.org/">IEEE Standards</a>{" "}
      &nbsp;|&nbsp; <a href="https://spectrum.ieee.org/">IEEE Spectrum</a>{" "}
      &nbsp;|&nbsp; <a href="https://www.ieee.org/sitemap.html">More Sites</a>
    </p>
    <p id="meta-ieee-logo">
      <a href="https://www.ieee.org/">
          
      </a>
      <a href="https://www.ieee.org/join" className="joinIEEE">
        Join IEEE
      </a>
    </p>
  </div>
    </div>
  )
}
export default butt;