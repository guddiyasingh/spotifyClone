import React from 'react'

async function script() {
  console.log('lets write javascript')
   let a = await fetch('https://pixabay.com/music/')
   let response = await a.text()
   console.log(response)
  // return (
  
  // //   let a = await fetch('https://pixabay.com/music/')
  // //  let response = await a.text()
  // //  console.log(response)
  // )
}

export default script
