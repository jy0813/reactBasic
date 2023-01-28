import React, {useContext} from 'react';
import './AppTheme.css'
import {DarkModeContext, DarkModeProvider} from "./context/DarkModeContext";

function AppTheme(props) {
  return (
      <DarkModeProvider>
        <Header/>
        <Main/>
        <Footer/>
      </DarkModeProvider>
  );
}

function Header() {
  return <header className='header'>Hedaer</header>
}

function Main() {
  return (
      <main>
        <Profile/>
        <Products/>
      </main>
  )
}

function Profile() {
  return (
      <div>
        Profile
        <User/>
      </div>
  )
}

function Products() {
  return (
      <div>
        Products
        <ProductDetail/>
      </div>
  )
}

function User(){
  return <div>user</div>
}

function ProductDetail() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  return (<div>
    ProductDetail
    <p>DarkMode {darkMode ? (<span style={{backgroundColor: 'black', color: 'white'}}>darkMode</span>) : (<span style={{backgroundColor: 'white', color: 'black'}}>light Mode</span>) }</p>
    <button onClick={() => toggleDarkMode()}>Toggle</button>
  </div>)
}

function Footer() {
  return <footer className='footer'>footer</footer>
}

export default AppTheme;