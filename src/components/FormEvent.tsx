import React, { FormEvent } from 'react'

const FormEvent = () => {

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert('Opa, mandando');
    }
    
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center text-white'>
      <h1 className='text-5xl mb-3'>Form de login</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" />
        <input type="submit" value="Enviar"/>
      </form>
    </div>
  )
}

export default FormEvent
