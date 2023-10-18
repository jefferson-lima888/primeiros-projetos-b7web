'use client'
import React from 'react'

const BtnEvent = () => {

    const avisar = (msg: String) => {
        // alert('Funcionou');
        alert(msg);
    }

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <button className='p-3 bg-blue-700 text-white rounded-md mr-3' onClick={() => avisar('mensagem 1')}>Clique Aqui 1</button>
      <button className='p-3 bg-blue-700 text-white rounded-md' onClick={() => avisar('mensagem 2')}>Clique Aqui 2</button>
    </div>
  )
}

export default BtnEvent
