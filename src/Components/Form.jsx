import React from 'react'
import "./FormStyle.css"

const Form = () => {
  return (
    <div className='form'>
      <form>
        <label htmlFor="">Votre nom</label>
        <input type="text"></input>
        <label htmlFor="">Votre adresse Mail</label>
        <input type="Email"></input>
        <label htmlFor="">Sujet du message</label>
        <input type="text"></input>
        <label htmlFor="">Message</label>
        <textarea  rows="6" placeholder='Tapez votre message'></textarea>
        <button className='button'>Envoyer</button>
      </form>
    </div>
  )
}

export default Form