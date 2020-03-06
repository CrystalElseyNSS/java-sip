const contentTarget = document.querySelector('.container__header');

const headerHTML = `
    <img src="https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-design-creative-idea-logo-elements-2.png" alt="coffee shop logo">
    <h1>JAVA SIP DASHBOARD</h1>
    `

export const headerMaker = () => {
    contentTarget.innerHTML += headerHTML
}






