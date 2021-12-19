import classes from './Main.module.css';
import SpacerContainer from "../UI/SpacerContainer";
import {Route, Routes} from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Users from "./Users/Users";
import Logout from "./Logout/Logout";

const Main = () => {
  return (
    <main className={classes.Main}>
      <SpacerContainer>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/logout' element={<Logout />}/>
          <Route path='/users' element={<Users />}/>
        </Routes>
      </SpacerContainer>
    </main>
  )
}

export default Main;
