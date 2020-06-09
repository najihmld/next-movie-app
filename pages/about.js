import React from 'react'




const About = () => {
  return (
    <div>About Page</div>
  )
}

// functional componenet - arrow function
// WHEN TO USE
// 1. for smaller components
// 2. reusable componenets
// 3. presentional componenets, patialy right, we can use HOOKS and specify state
// const About = () => {
//   const message = 'Hello World'
//   return(
//   <h1>Hello About Page - {message}</h1>
//   )
// }

// const About = () => {
//   const message = 'Hello World'
//   return React.createElement('h1', null, 'Iam genereting this with createElement')
// }

// functional componenet - normal function
// function About() {
//   return (
//   <h1>Hello About Page</h1>
//   )
// }

// class About extends React.Component {
//   render() {
//     return(
//       <h1>Hello I am class componenet</h1>
//     )
//   }
// }



export default About