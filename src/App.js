import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const [progress, setprogress] = useState(0)
  return (
    <>
      <BrowserRouter>
        <LoadingBar color='#f11946' progress={progress} />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<NewsComponent setprogress={setprogress} key="general" category='general' />} ></Route>
          <Route exact path='/business' element={<NewsComponent setprogress={setprogress} key="business" category='business' />} ></Route>
          <Route exact path='/entertainment' element={<NewsComponent setprogress={setprogress} key="entertainment" category='entertainment' />} ></Route>
          <Route exact path='/general' element={<NewsComponent setprogress={setprogress} key="general" category='general' />} ></Route>
          <Route exact path='/health' element={<NewsComponent setprogress={setprogress} key="health" category='health' />} ></Route>
          <Route exact path='/science' element={<NewsComponent setprogress={setprogress} key="science" category='science' />} ></Route>
          <Route exact path='/sports' element={<NewsComponent setprogress={setprogress} key="sports" category='sports' />} ></Route>
          <Route exact path='/technology' element={<NewsComponent setprogress={setprogress} key="technology" category='technology' />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;