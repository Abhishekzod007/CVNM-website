import React, { useEffect } from 'react'

const aboutPoints = ['Co-segmentation', 'Person re-identification', 'Data sensing and compression', 'Anomaly Detection', 'Few-shot and Zero-shot Learning', 'Incremental-Learning', 'Distance metric learning', 'Haptic rendering', 'Haptic communication', 'heptic perception']

export default function About() {

  return (
    <section id="about" className='h-screen p-page bg-gradient-to-b flex items-center flex-col mb-32'>
      <h1 className='hover:text-foreground duration-300 text-5xl mobile:text-4xl mt-32 mobile:mt-8 font-raleway font-semibold'>ABOUT US</h1>
      <hr className="w-24 h-1 mx-5 my-4 bg-gray-500 border-0 rounded md:my-10 opacity-100" />
      <p className='italic mobile:text-sm mobile:px-8'>"Research is to see what everybody else has seen, and to think what nobody else has thought." - Albert Szent-Gyorgyi</p>
      <div className='flex mobile:flex-col items-center p-page my-12'>
        <img className='widescreen:w-1/3 widescreen:p-6 mobile:mb-10' src="https://imgs.search.brave.com/pgZTFUu2a6KKHh7NOuOdLYWtrYhetSnskVvx1yoPPQg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly92aXNp/b24udW5pcHYuaXQv/Rm90b0xhYi8xLmpw/Zw"></img>
        <div className="flex flex-col gap-y-3">
          <p className='text-sm'>Vision and Image Processing Lab is a research facility in the Electrical Department of IIT Bombay, dedicated to cutting edge research in Deep Learning, haptics, computer vision and image processing applications. Major research in the lab is focussed on the following topics:</p>
          {aboutPoints.map(item => <p>{aboutPoints.indexOf(item) + 1}.  {item}</p>)}
        </div>
      </div>
    </section>
  )
}
