import React from 'react';

import { logo,linkedin,github } from '../assets';

const Hero = React.memo(() => {
  return (
    <React.Fragment>
      <header className='w-full flex justify-center items-center flex-col' >
        <nav className='flex justify-between items-center w-full mb-10 pt-3' >
          <img src={ logo } alt="sumz_logo" className='w-52 object-contain' />

          <button  className='flex gap-4 justify-between' >
             <img src={github} alt="github_button"  className='w-7 text-white' onClick={() => window.open('https://github.com/theviveks/')} />
             <img src={linkedin} alt="linkedin_button"  className='w-7' onClick={() => window.open('https://www.linkedin.com/in/theviveks')}/>


          </button>

        </nav>

        <h1 className='head_text' >
          Summarize Articles with <br
          className='max-md:hidden' />
          <span className='orange_gradient' >OpenAI GPT-4</span>
        </h1>
        <h2 className='desc' >
        Summarize article via Retraverse, an open-source summarization tool condensing lengthy articles into concise summaries.    </h2>
      </header>
    </React.Fragment>
  )
})

export default Hero;