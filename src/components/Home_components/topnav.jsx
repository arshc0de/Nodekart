import React from 'react'

function Topnav() {
    const div_style = {
        margin: 0,
        backgroundColor: 'black',
        color: 'white',
        padding: '2px',
        textAlign: 'center'
      };
    const a_style={
        color: 'white',
        textDecoration: "underline",
        paddingLeft: '2px'
    }     
  return (
    <div style={div_style}>
        <p>Sign up and get 20% off on your first order.<a style={a_style}>Sign Up Now</a></p>
    </div>
  )
}

export default Topnav