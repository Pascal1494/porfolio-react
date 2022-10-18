import React from 'react'
import WorkCards from './WorkCards'
import WorkCardData from './WorkCardData'



const Works = () => {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>Projects</h1>
      <div className="project-container">
      {WorkCardData.map((val, ind) => {
        return (
          <WorkCards 
          key = {ind}
          imgsrc = {val.imgsrc}
          title = {val.title}
          text = {val.text}
          view = {val.view}
          />
          )
      })}
      </div>
    </div>
  )
}

export default Works
