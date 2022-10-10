import { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';
import AppContext from "./AppContext";
import AddTask from "./components/AddTask/AddTask";
import Autorization from "./components/Authorization/Authorization";
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import Market from "./components/Market/Market";
import MyNFT from "./components/MyNFT/MyNFT";
import Tasks from "./components/Tasks/Tasks";
import ViewTask from "./components/ViewTask/ViewTask";

function App() {
  const [title, setTitle] = useState();
  const [info, setInfo] = useState();
  const [price, setPrice] = useState();
  const [item, setItem] = useState([]);
  const [isAuth, setIsAuth] = useState(false);

  const [user, setUser] = useState();

  
	useEffect(() => {
		if (localStorage.getItem("access")) {
			setIsAuth(true);
		}
	}, [])

  return (
    <AppContext.Provider value={{setTitle, title, setInfo, info, setPrice, price, user, setUser, setIsAuth, isAuth, setItem, item}}>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/tasks" element={<Tasks/>}></Route>
        <Route path="/market" element={<Market/>}></Route>
        <Route path="/viewTask" element={<ViewTask/>}></Route>
        <Route path="/addtask" element={<AddTask/>}></Route>

        <Route path="/mynft" element={<MyNFT/>}></Route>
        <Route path="/authorization" element={<Autorization/>}></Route>
      </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
