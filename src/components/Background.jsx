import React from 'react'

function Background() {
  return (
    <div className='fixed z-[2] w-full h-screen'>
      <div className='w-full py-10 top-[5%] text-[25px] font-semibold text-zinc-400 flex justify-center'>
        Documents
      </div>

      <h1 className='absolute text-[14vw] leading-none tracking-tighter font-bold text-zinc-800 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>Docs</h1>
    </div>
  )
}

export default Background
