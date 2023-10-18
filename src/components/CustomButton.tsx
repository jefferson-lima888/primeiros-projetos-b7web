import React from 'react'

type Props = {
    label: string;
    onClick: () => void;
}

const CustomButton = ({ label, onClick }: Props) => {

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <button className='p-3 rounded-md text-white bg-blue-700 mr-3' onClick={onClick}>{label}</button>
    </div>
  )
}

export default CustomButton
