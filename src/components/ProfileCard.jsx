import React from 'react'

const ProfileCard = ({ avatar, name, job, title }) => {


  return (
    <div className='card'>
      <img src={avatar} alt="" />
      <div className='info-employer'>
        <span>{name}</span>
        <span>{title}</span>
      </div>
    </div>
  )
}

export default ProfileCard
