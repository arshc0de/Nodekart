import React from 'react'

function NumCount(props) {
    const {countPro,title} = props
  return (
    <div style={{
        margin: '40px',
        borderRight: '2px solid grey',
        paddingRight: '10px',
        color: 'grey'
    }}>
        <p style={{
          fontWeight: '100px',
          fontSize: '40px',
          color: 'black'
        }}>{countPro}</p>
        <p>{title}</p>
    </div>
  )
}

export default NumCount