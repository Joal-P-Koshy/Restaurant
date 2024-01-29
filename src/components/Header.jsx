import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { search } from '../redux/restaurantSlice';


function Header() {
  const dispatch = useDispatch();
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className='d-flex justify-content-center align-items-center'>
            <img src="./logo.png" alt="logo" height={"60px"} />
            <h3 className='ms-3'><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Ramens</Link></h3>
            <div className="d-flex justify-content-center align-items-center p-2 rounded"
              style={{ width: '450px', marginLeft: "400px", backgroundColor: '#cccccc40' }}>
              <input type="text" style={{ width: "400px", color:'white' }} 
                className='form-control  bg-transparent' 
                onChange={(e)=>dispatch(search(e.target.value))}/>
              <i class="fa-solid fa-magnifying-glass ms-3"></i>
            </div>

          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header