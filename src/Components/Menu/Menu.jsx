import React from 'react'
import './menu.css'

const pageList = ['Instagram', 'home', 'search', 'discover', 'messages', 'notifications', 'new', 'profile', 'settings'];
const changePage = (e) => {
    alert(e.target.innerHTML)
}

window.onload = () => {
    const url = window.location.pathname.slice(1);
    let index = pageList.indexOf(url);
    if (url == '') { index = 1 }
    document.getElementById(index).setAttribute('class', 'leftMenuItem active')
}

export const Menu = () => {
    return (
        <div className='leftMenuComponent'>
            <ul className='leftMenuContent'>{pageList.map((item, index) => { return (<li key={index} id={index} className='leftMenuItem' onClick={changePage}>{item}</li>) })}</ul>
        </div>
    )
}
