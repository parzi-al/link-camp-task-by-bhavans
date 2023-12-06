import React from 'react'

export const Foot = () => {
  return (
    <div><style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n\nbody {\n\tfont-family: Verdana, Arial, Helvetica, sans-serif;\n\tfont-size: 100%;\n\tcolor: #666;\n\tbackground: #fff;\n\tpadding: 0;\n\tborder-top: 3px solid #999;\n\tmargin: 0;\n\ttext-align: center;\n}\n\np {\n\tfont-size: .9em;\n\tline-height: 120%;\n\tpadding: 0 0 10px 0;\n\tborder: 0;\n\tmargin: 0;\n}\n\n\n\n#util {\n\tcolor: #000;\n\ttext-align: left;\n\tpadding: 11px 36px;\n}\n\n#util a:link, #util a:visited, #util a:active {\n\tcolor: #000;\n\ttext-decoration: none;\n}\n\n#util a:hover {\n\tcolor: #000;\n\ttext-decoration: underline;\n}\n\n"
    }}
  />
  <div id="footer">
    <p id="util">
      <a href="http://www.ieee.org/index.html" id="u-home">
        Home
      </a>{" "}
      &nbsp;|&nbsp;{" "}
      <a href="http://www.ieee.org/sitemap.html" id="u-home">
        Sitemap/More Sites
      </a>{" "}
      &nbsp;|&nbsp;{" "}
      <a
        href="http://www.ieee.org/about/contact_center/index.html"
        id="u-contact"
      >
        Contact
      </a>{" "}
      &nbsp;|&nbsp;{" "}
      <a
        href="http://www.ieee.org/accessibility_statement.html"
        id="u-accessibility"
      >
        Accessibility
      </a>{" "}
      &nbsp;|&nbsp;{" "}
      <a href="http://www.ieee.org/p9-26.html" id="u-non">
        Nondiscrimination Policy
      </a>{" "}
      &nbsp;|&nbsp;{" "}
      <a href="http://ieee-ethics-reporting.org/" id="u-ethics-reporting">
        IEEE Ethics Reporting
      </a>{" "}
      &nbsp;|&nbsp;{" "}
      <a href="http://www.ieee.org/security_privacy.html" id="u-privacy">
        IEEE Privacy Policy
      </a>{" "}
      &nbsp;|&nbsp;{" "}
      <a
        href="https://www.ieee.org/about/help/site-terms-conditions.html"
        id="u-terms"
      >
        Terms
      </a>
    </p>
    <p id="util">
      © Copyright IEEE - All rights reserved. A not-for-profit organization,
      IEEE is the world's largest technical professional organization dedicated
      to advancing technology for the benefit of humanity.
      <br />
      <br />
    </p>
  </div></div>
  )
}
export default Foot;