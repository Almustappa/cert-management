import React, { useState } from 'react'

const Arc0406 = () => {
  const [check,setCheck] = useState(1);

  const handleClickBtn = (check) =>{
    setCheck(check);
  }

  console.log("버튼",check);

  return (
    <div>
      <button className='board-menu' onClick={()=>handleClickBtn(1)}>전체</button>
      <button className='board-menu' onClick={()=>handleClickBtn(2)}>건축계획 및 제도</button>
      <button className='board-menu' onClick={()=>handleClickBtn(3)}>건축구조</button>
      <button className='board-menu' onClick={()=>handleClickBtn(4)}>건축재료</button>
      <button className='board-menu' onClick={()=>handleClickBtn(5)}>실기시험</button>
    </div>
  )
}

export default Arc0406