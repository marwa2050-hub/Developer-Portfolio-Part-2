<ScrollProgress />
import React, { useState } from 'react'

export default function SkillBar({ name, level, fun }){
  const [hover, setHover] = useState(false)
  return (
    <div style={{ marginBottom:12 }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <strong>{name}</strong>
        <small className="muted">{hover ? fun : `${level}%`}</small>
      </div>
      <div className="skill-bar" style={{marginTop:6}}>
        <div className="skill-fill" style={{width:`${level}%`}} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}></div>
      </div>
    </div>
  )
}
