import React from 'react';

import doc from '../assets/docs/Daniel Laloush Resumen.pdf';

export default function HeroName() {
  return (
    <div className="main-container">
      <div className="hero-title">
        <div>
          <span>Daniel Laloush</span>
          <span>&nbsp;</span>
        </div>
      </div>
      <div className="hero-description col-1">
        <div>
          {/* eslint-disable-next-line max-len */}
          I am a developer studying for a Full Stack Developer Certification at Microverse. I&#39;m a simple guy, and I
          like to use simple things, therefore my passion became to solve problems that would
          make our lives easier.
        </div>
        <div>
          Check out my
          {' '}
          <a href="#projects">side-project</a>
          {' '}
          below.
        </div>
      </div>
      <div className="console col-1">
        <div className="console-header col-1">
          <div className="x" />
        </div>
        <div className="console-content col-1">
          <div><span className="console-input">Daniel.current_location</span></div>
          <div><span className="console-output">&quot;Panama, Panama City&quot;</span></div>
          <div><span className="console-input">Daniel.contact_info</span></div>
          <div>
            <span className="console-output">
              [&quot;
              <span>
                <a
                  href="mailto:d.laloush@outlook.com"
                >
                  E-Mail
                </a>
              </span>
              &quot;,
              &quot;
              <span>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/daniel-laloush"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </span>
              &quot;,
              &quot;
              <span>
                <a
                  target="_blank"
                  href="https://github.com/Dandush03"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </span>
              &quot;,
              &quot;
              <span>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/d_laloush"
                >
                  Twitter
                </a>
              </span>
              &quot;]
            </span>
          </div>
          <div><span className="console-input">Daniel.resume</span></div>
          <div>
            <span className="console-output">
              &quot;
              <a
                href={doc}
                download
              >
                daniel_laloush.pdf
              </a>
              &quot;
            </span>
          </div>
          <div><span className="console-input">Daniel.interest</span></div>
          <div><span className="console-output">[&quot;programming&quot;, &quot;cooking&quot;, &quot;gym&quot;, &quot;WoW&quot;]</span></div>
          <div><span className="console-input">Daniel.skill</span></div>
          <div>
            <span className="console-output">
              [&quot;Sass&quot;, &quot;CSS&quot;,
              &quot;HTML&quot;, &quot;React&quot;,
              &quot;JavaScrip&quot;, &quot;git&quot;,
              &quot;Vim&quot;, &quot;Ruby&quot;,
              &quot;Ruby on Rails&quot;,
              &quot;Linux&quot;, &quot;Microsoft Office&quot;]
            </span>
          </div>
          <div><span className="console-input"><span className="typing">&nbsp;</span></span></div>
        </div>
      </div>
    </div>
  );
}
