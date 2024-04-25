import React, { useState } from 'react'

const Arc0403 = () => {
  const [check,setCheck] = useState(1);

  const handleClickBtn = (check) =>{
    setCheck(check);
  }

  console.log("버튼",check);

  return (
    <div>
      <button className='board-menu' onClick={()=>handleClickBtn(1)}>전체</button>
      <button className='board-menu' onClick={()=>handleClickBtn(2)}>1교시</button>
      <button className='board-menu' onClick={()=>handleClickBtn(3)}>2교시</button>
      <button className='board-menu' onClick={()=>handleClickBtn(4)}>3교시</button>
      <button className='board-menu' onClick={()=>handleClickBtn(5)}>4교시</button>
      <button className='board-menu' onClick={()=>handleClickBtn(6)}>면접시험</button>
    </div>
  )
}

export default Arc0403