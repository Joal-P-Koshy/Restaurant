import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurant } from '../redux/restaurantSlice';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRestaurant())
  }, [])

  const allRestaurant = useSelector((state) => state.restaurantSlice.allRestaurant.restaurants);
  // console.log("all rest");
  // console.log(allRestaurant);
  return (
    <>
      <Row>
        {
          allRestaurant?.length > 0 ?
            allRestaurant?.map((restaurant) => (
              <Col className='px-5 py-3' sm={4} md={4} lg={4}>
                <RestCard restaurant = {restaurant}/>
              </Col>
            )) :
            <p className='m-3 text-danger text-center' style={{fontSize:'30px'}}>No restaurants found !</p>
        }
      </Row>
    </>
  )
}

export default Home