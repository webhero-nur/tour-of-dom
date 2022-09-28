const main = document.getElementById('main-container');

const second = document.createElement('section');
second.innerHTML = `
    <h1>My dynamic section</h1>
    <p>Extra text added inside paragraph</p>
    <ul>
        <li>first item</li>
        <li>second item</li>
        <li>third item</li>
        <li>fourth item</li>
    </ul>
`

main.appendChild(second);