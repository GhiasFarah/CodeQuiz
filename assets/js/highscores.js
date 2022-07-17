let user = prompt("enter your initials")

localStorage.setItem(user, localStorage.getItem('score'))
localStorage.removeItem('score')
localStorage.removeItem('scores')

let ul = document.querySelector('.table')
for (let i = 0; i < localStorage.length; i++) {
    let li = document.createElement('li')
    ul.appendChild(li)
    li.textContent = localStorage.key(i)+' : '+localStorage.getItem(localStorage.key(i))
}