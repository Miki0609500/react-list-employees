import React from 'react'

const Categories = React.memo(({items, activeCategory, onSelectedCategory}) => {

  return (
      <ul>
        {
          items.map(item => 
            <li 
              className={activeCategory === item.jobId ? 'active' : null} 
              onClick={() => onSelectedCategory(item.jobId)} 
              key={item.id}>
                {item.title}
            </li>)
        }
      </ul>
  )
}) 

export default Categories
