import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate()
  return (
    <Course>
      <div className='sort'>
      



    <div className="image-container">
    
    <div className="container">
<img src="./images/sorting.png" alt="Avatar" className="hover-image"  />
<div className="middle">
<div className="text">
  
<button onClick={()=>navigate("/sorting")}>Sorting Algorithm</button>

</div>
</div>
</div>
<div className="container">
<img src="./images/premitive.png" alt="Avatar" className="hover-image" />
<div className="middle">
<div className="text">
  
<button onClick={()=>navigate("/Primitive")}>Primitive Algorithm</button>

</div>
</div>
</div>
<div className="container">
<img src="./images/hero.jpg" alt="Avatar" className="hover-image" />
<div className="middle">
<div className="text">Tree Algorithm</div>
</div>
</div>
</div>
</div>
</Course>
  )
  
}



const Course = styled.section`
.sort{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    margin: 0;
}

.image-container {
    display: flex;
    gap: 300px; /* Gap between images */
}

.hover-image {
    width: 200px;
    height: 200px;
    transition: transform 0.3s ease;
}

.hover-image:hover {
    transform: scale(1.1);
}
.container {
  position: relative;
  width: 50%;
}

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.container:hover .image {
  opacity: 0.1;
}

.container:hover .middle {
  opacity: 0.7;
}

.text {
  background-color: #04AA6D;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}






` 


export default Courses
