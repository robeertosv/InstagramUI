import React from 'react'
import './stories.css'

async function getStories() {
    const container = document.querySelector('.storiesContainer');
    let stories = await fetch('activeStories.json');
    stories = await stories.json();
    let numStories = stories.stories.length

    for (let i = 0; i < numStories; i++) {
        let content = document.createElement('div')
        content.setAttribute('id', 'e' + i)
        container.appendChild(content)
        let isMejo;

        document.querySelector("#e" + i).innerHTML = "<div class='storie'><img class='' src = '"+stories.stories[i].profile_pic+"' /><p>"+stories.stories[i].username+"</p></div > "
        stories.stories[i].is_bf == true ? document.querySelector("#e" + i+" img").setAttribute('class', 'mejo') : document.querySelector("#e" + i+" img").setAttribute('class', 'no_mejo')
    }

}

window.onload = () => {
    getStories();
}

export const Stories = () => {
    return (
        <div className='storiesContainer'>

        </div>
    )
}
