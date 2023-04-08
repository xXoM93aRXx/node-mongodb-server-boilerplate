import React from 'react'
import { useSelector } from 'react-redux'
const Item = () => {
  const posts = useSelector((state)=>state.posts)
  console.log(posts)
  return (
    <div>ITEM</div>
  )
}

export default Item