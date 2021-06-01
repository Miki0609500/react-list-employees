import React from 'react'

const Header = React.memo(({onSelectedCategory}) => {

  return (
    <div className='header'>
      <div className='logo'>
        <span onClick={() => onSelectedCategory(null)}>Свисок сотрудников</span>
      </div>
    </div>
  )
}
)
export default Header
