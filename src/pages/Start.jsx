import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
  return (
    <>
      <h1>다양한 스텍을 연습하기 위한 공간입니다</h1>
      <Link to='/pokemon'>pokemon_react-query</Link><br/>
      <Link to='/recoil'>todolist_recoil</Link>
    </>
    
  )
}

export default Start