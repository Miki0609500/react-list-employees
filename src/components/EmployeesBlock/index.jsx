import React from 'react'

import { ProfileCard, LoadingProvider} from '../index'


const Employees = React.memo(({items, isFetching}) => {

  return (
    <div className='content-main'>
        {
          isFetching 
          ? Array(21).fill(0).map((_, index) => <LoadingProvider key={index} />)  
          : items.map(item => <ProfileCard key={item.id} {...item}  />)
        }
    </div>
  )
}
) 
export default Employees
