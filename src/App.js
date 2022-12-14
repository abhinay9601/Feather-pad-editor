import "./App.css";
import Landing from "./components1/Landing";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLogin from "./Components/Login/Main";
import MainSignin from "./Components/Signup/Main";
import Home from "./Components/Home/Home";
import MainWeb from "./Components/WebLang/Main";
import NoPage from "./Components/Error/Nopage";
// import MainIDE from "./Components/IDE/MainIDE";
function App() {
  return (
    <div className="App" style={{overflow:"hidden"}}>
      
      <BrowserRouter>
      <Routes>
        <Route exact path='login' element={<MainLogin />} />
          <Route index element={<Home />} />
          <Route exact path='signin' element={<MainSignin />} />
          <Route exact path='webeditor' element={<MainWeb />} />
          <Route path="codeeditor" element={<Landing />} />
          <Route path="*" element={<NoPage />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>

      {/* <Main></Main> */}
    </div>
  );
}

export default App;
