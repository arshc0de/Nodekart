import React from 'react';

function Footer_card(props) {
    const { title, point1, point2, point3, point4 } = props;
    const points_style = {
        fontSize: '12px',
        display: 'block',
        width: 'content-fit',
        margin: '10px',
        padding: '10px',
        color:'grey'
    };
    return (
        <div style={{marginLeft:'20px',marginRight:'20px'}}>
            <p style={{ fontWeight: 'bold', fontSize: '16px',margin: '20px'}}>{title}</p>
            <a href="#" style={points_style}>{point1}</a>
            <a href="#" style={points_style}>{point2}</a>
            <a href="#" style={points_style}>{point3}</a>
            <a href="#" style={points_style}>{point4}</a>
        </div>
    );
}

export default Footer_card;
