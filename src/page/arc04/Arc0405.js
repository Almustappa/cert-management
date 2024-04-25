import React, { useState } from 'react'

const Arc0405 = () => {
  const [check,setCheck] = useState(1);

  const handleClickBtn = (check) =>{
    setCheck(check);
  }

  console.log("버튼",check);

  return (
    <div>
      <button className='board-menu' onClick={()=>handleClickBtn(1)}>전체</button>
      <button className='board-menu' onClick={()=>handleClickBtn(2)}>건축계획</button>
      <button className='board-menu' onClick={()=>handleClickBtn(3)}>건축시공</button>
      <button className='board-menu' onClick={()=>handleClickBtn(4)}>건축구조</button>
      <button className='board-menu' onClick={()=>handleClickBtn(5)}>건축설비</button>
      <button className='board-menu' onClick={()=>handleClickBtn(6)}>건축법규</button>
      <button className='board-menu' onClick={()=>handleClickBtn(7)}>실기시험</button>
    </div>
  )
}

export default Arc0405