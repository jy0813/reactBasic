import React from 'react';

function AppWrap(props) {
  return (
      <div>
        <Navbar>
          <Avatar
              image="https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2946&q=80"
              name='pig'
              size={300}
          />
          <p>쨥쨔ㅃ쨔ㅃ쨔ㅃ쨔ㅃ쨔ㅃ짭짜ㅃ짜ㅃ짜ㅃ짜ㅃ</p>
        </Navbar>
      </div>
  );
}

function Navbar({children}) {
  return (
      <header style={{backgroundColor:'pink'}}>
        {children}
      </header>
  )
}

function Avatar({image,name,size}){
  return (
      <div>
        <img
            src={image}
            alt={`${name}`}
            width={size}
            height={size}
            style={{borderRadius:"50%"}}
        />
      </div>
  )
}

export default AppWrap;