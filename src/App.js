import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Profile/Login/Login.jsx";
import Register from "./pages/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditProfile from "./pages/editProfile/editProfile.jsx";
import Admin from "./componets/Admin/Admin";






function App() {
  return (
    <>
      <div className="app">
      <Router>
<Routes>
  <Route exact path="/" element={ <Home/>  }></Route>
</Routes>
<Routes>
  <Route exact path="/profile" element={ <Profile/>  }></Route>
</Routes>
<Routes>
  <Route exact path="/register" element={ <Register/>  }></Route>
</Routes>
<Routes>
  <Route exact path="/userId/edit:id" element={ <EditProfile/>  }></Route>
</Routes>
<Routes>
  <Route exact path="/Admin" element={ <Admin/>  }></Route>
</Routes>
<Routes>
  <Route exact path="/Login" element={ <Login/>  }></Route>
</Routes>
</Router>
      </div>
    </>

  )
}

export default App;
