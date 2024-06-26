import React, { useCallback, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './style.css';

const HomePage = () => {

   const [value,setValue] = useState();
   const nav = useNavigate();
   const handleJoinRoom = useCallback(()=>{
      nav(`/room/${value}`);
   },[nav, value]);

 return(
//    <>
//       {/* <input value={value} onChange={(e)=>setValue(e.target.value)} type='text' placeholder='Enter Room code'/>
//       <br/>
//       <button onClick={handleJoinRoom}>Join Room</button> */}
//       {/* <form class="row g-3">
//          <div class="col-auto">
//             <label for="inputPassword2" class="visually-hidden">Room Code</label>
//             <input type="text" class="form-control" id="inputPassword2" placeholder="Password"/>
//          </div>
//          <div class="col-auto">
//             <button type="submit" class="btn btn-primary mb-3">Join Room</button>
//          </div>
//       </form> */}
//       <form class="form">
//    <div class="content">
//       <p align="center">OTP Verification</p>
//       <div class="inp">
//          <input placeholder="" type="text" class="input" maxlength="1"/>
//          <input placeholder="" type="text" class="input" maxlength="1"/> 
//          <input placeholder="" type="text" class="input" maxlength="1"/> 
//          <input placeholder="" type="text" class="input" maxlength="1"/> 
//       </div>
//       <button>Join Room</button>
//       <svg class="svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//          <path fill="#4073ff" d="M56.8,-23.9C61.7,-3.2,45.7,18.8,26.5,31.7C7.2,44.6,-15.2,48.2,-35.5,36.5C-55.8,24.7,-73.9,-2.6,-67.6,-25.2C-61.3,-47.7,-30.6,-65.6,-2.4,-64.8C25.9,-64.1,51.8,-44.7,56.8,-23.9Z" transform="translate(100 100)" class="path"></path>
//       </svg>
//    </div>
  
// </form>
//    </>
<div className="background">
      <form className="form">
        <div className="content">
          <p align="center">Welcome to</p>
          <h2 align="center">HP-MEET</h2>
          <div className="inp">
          <input value={value} onChange={(e)=>setValue(e.target.value)} type="text" class=" input" id="inputPassword2" placeholder="Enter room code"/>
          </div>
          <button onClick={handleJoinRoom}>Join Room</button>
          <svg
            className="svg"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#4073ff"
              d="M56.8,-23.9C61.7,-3.2,45.7,18.8,26.5,31.7C7.2,44.6,-15.2,48.2,-35.5,36.5C-55.8,24.7,-73.9,-2.6,-67.6,-25.2C-61.3,-47.7,-30.6,-65.6,-2.4,-64.8C25.9,-64.1,51.8,-44.7,56.8,-23.9Z"
              transform="translate(100 100)"
              className="path"
            ></path>
          </svg>
        </div>
      </form>
    </div>
 )   
}

export default HomePage;