import React from 'react'
import { useSelector } from 'react-redux';
import {useDispatch } from 'react-redux';

import { Employees, Header, Categories, LoadingCategory} from '../components'
import { getJobs } from '../redux/actions/categories'
import { getProviders } from '../redux/actions/providers'



const Home = () => {

  const {items, isLoading} = useSelector(({categories}) => categories)
  const {providers, isFetching} = useSelector(({providers}) => providers)

  const [category, setCategory] = React.useState(null)

  const dispatch = useDispatch()

  const onSelectedCategory = React.useCallback((category) => {
    setCategory(category)
  }, [])

  React.useEffect(() => {
    dispatch(getJobs())
  }, [])

  React.useEffect(() => {
    dispatch(getProviders(category))
  }, [category])


  console.log('render home')


  return <>
      <Header onSelectedCategory={onSelectedCategory} />
      <div className='content'>
        <div className='side-menu'>
          {
            isLoading
            ? Array(8).fill(0).map((_, index) => <LoadingCategory  key={index} />)
            : <Categories onSelectedCategory={onSelectedCategory} activeCategory={category} items={items} />
          }
        </div>
        <Employees isFetching={isFetching} items={providers} />
      </div>
  </>
}

export default Home
