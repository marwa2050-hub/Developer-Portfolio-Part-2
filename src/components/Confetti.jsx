<ScrollProgress />
import React, { useEffect } from 'react'

export default function Confetti(){
  useEffect(()=>{
    const id = setTimeout(()=>{}, 2000)
    return ()=> clearTimeout(id)
  },[])
  return (
    <div style={{position:'fixed', inset:0, pointerEvents:'none', zIndex:2000}}>
      {/* simple visual confetti using emojis */}
      <div style={{position:'absolute', left:'20%', top:'20%'}}>🎉</div>
      <div style={{position:'absolute', left:'40%', top:'10%'}}>✨</div>
      <div style={{position:'absolute', left:'60%', top:'30%'}}>🎊</div>
    </div>
  )
}
