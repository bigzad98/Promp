import React from 'react'
import Feed from '@components/Feed'
function home() {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className='text-center head_text'>Read And Learn
        <br/>
        <span className='orange_gradient text-center'>AI-Powered Promps</span></h1>
        <p className='desc text-center'>Promps is an open source program which allows you to share your ideas with each other</p>
        <Feed/>
    </section>
  )
}

export default home