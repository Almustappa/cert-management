import React, { useState } from 'react'

const Arc0410 = () => {
  const [check,setCheck] = useState(1);

  const handleClickBtn = (check) =>{
    setCheck(check);
  }

  console.log("버튼",check);

  return (
    <div>
      <button className='board-menu' onClick={()=>handleClickBtn(1)}>전체</button>
    </div>
  )
}

export default Arc0410