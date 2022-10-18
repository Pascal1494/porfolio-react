import './WorkCardsStyle.css'

import React from 'react'

import { NavLink } from 'react-router-dom'

const WorkCards = (props) => {
  return (
   
          <div className="project-card">
            <img src={props.imgsrc} alt="porfolio" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
              <p>{props.text}</p>
              <div className="pro-btns">
                <NavLink to='#' className="button"> {props.view}</NavLink>
                <NavLink to='#' className="button">GitHub</NavLink>
              </div>
            </div>
          </div>
  )
}

export default WorkCards