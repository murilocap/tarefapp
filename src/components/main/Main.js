import React from 'react'
import Title from './Title'
import Tasks from './Tasks'

const listEmoji = "🔥"
const listTitle = "Para Hoje"

function Main() {
    return (
        <main className='Main'>
            <Title listEmoji={ listEmoji } listTitle={ listTitle } />
            <Tasks />
        </main>
    )
}

export default Main