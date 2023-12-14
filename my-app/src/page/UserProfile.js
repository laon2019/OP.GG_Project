import React from 'react'
import { useSelector } from 'react-redux';

const UserProfile = () => {
    const userInfo = useSelector((state) => state.user.userInfo);
  return (
    <div>{userInfo.id}</div>
  )
}

export default UserProfile