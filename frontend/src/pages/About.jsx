import React from 'react'
import Title from '../component/Title'
import about from '../assets/about.png'
import NewLetterBox from '../component/NewLetterBox'

function About() {
  return (
    <div className='w-[100vw] min-h-[100vh] flex flex-col items-center justify-start bg-gradient-to-br from-[#0c1a1f] via-[#0f2027] to-[#203a43] pt-[80px] gap-[60px] text-white'>
      <Title text1={'ABOUT'} text2={'US'} />

      <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-[40px] px-[20px]'>
        <div className='lg:w-[45%] w-[90%] flex items-center justify-center'>
          <img 
            src={about} 
            alt='' 
            className='lg:w-[70%] w-[90%] rounded-xl shadow-[0_0_25px_#00000080] hover:scale-[1.02] transition-all duration-300'
          />
        </div>

        <div className='lg:w-[45%] w-[90%] flex flex-col gap-[15px]'>
          <p className='text-[14px] md:text-[16px] leading-[1.6] text-[#e7f8ff]'>
            unBox brings modern, seamless shopping to your fingertips—quality products, trending styles, and everyday essentials all in one place. With fast delivery and trusted service, your shopping stays smooth and satisfying.
          </p>
          <p className='text-[14px] md:text-[16px] leading-[1.6] text-[#e7f8ff]'>
            Made for today’s shoppers—where style, convenience, and affordability meet. Fashion, essentials, trends… everything you want, delivered with ease and reliability.
          </p>

          <h2 className='text-[18px] lg:text-[20px] font-semibold text-[#9fe8ff] mt-[10px]'>Our Mission</h2>
          <p className='text-[14px] md:text-[16px] leading-[1.6] text-[#e7f8ff]'>
            We aim to redefine online shopping by blending quality, affordability, and convenience. unBox connects you with trusted products through a smooth, customer-first journey.
          </p>
        </div>
      </div>

      <div className='w-full flex flex-col items-center justify-center gap-[20px]'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />

        <div className='w-[90%] lg:w-[80%] flex flex-col lg:flex-row items-center justify-center gap-[25px] py-[20px]'>

          {[{title:'Quality Assurance', desc:'Strict checks, reliable sourcing, and a promise of consistent quality.'},
            {title:'Convenience', desc:'Fast delivery, secure checkout, easy navigation — all in one place.'},
            {title:'Exceptional Support', desc:'Quick responses, helpful solutions, and smooth customer care.'}]
            .map((item, index) => (
              <div 
                key={index} 
                className='w-[90%] lg:w-[33%] h-[250px] flex flex-col items-center justify-center gap-[15px] px-[30px] py-[20px]
                           rounded-xl border border-[#ffffff1a] bg-white/5 backdrop-blur-md shadow-[0_0_15px_#00000060]
                           hover:scale-[1.03] transition-all duration-300'>
                <b className='text-[20px] font-semibold text-[#a8f3ff]'>{item.title}</b>
                <p className='text-center text-[#def9ff]'>{item.desc}</p>
              </div>
          ))}

        </div>
      </div>

      <NewLetterBox />
    </div>
  )
}

export default About