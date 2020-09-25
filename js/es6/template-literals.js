let user = {
    name: 'zaki',
    age: 28
}

let str = `
<ul>
    <li>template literals ease the use of strings</li>
    <li>${user.name}</li>
    <li>${user.age}</li>
</ul>
`

console.log(`hello: ${str}`);
