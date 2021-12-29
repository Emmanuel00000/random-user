import { get, getAll, getUserData } from './random user modules.js'
const URL = 'https://randomuser.me/api/'
const profilePic = get('.profilePic')
const userInfo = get('.userInfo')
const info = get('.info')
const btn = get('.btn')
const icons = [...getAll('.icon')]

window.addEventListener('DOMContentLoaded', placeUserInfo)
btn.addEventListener('click', placeUserInfo)

async function placeUserInfo() {
    const values = await getUserData(URL)
    profilePic.src = values.profilePic
    info.innerText = icons[0].dataset.label
    userInfo.innerText = `${values[icons[0].dataset.label]}`
    icons.forEach((ev) => ev.classList.remove('changeColor'))
    icons[0].classList.add('changeColor')

    icons.forEach((e) => {
        e.addEventListener('click', () => {
            const label = e.dataset.label
            info.innerText = label
            userInfo.innerText = `${values[label]}`
            icons.forEach((ev) => ev.classList.remove('changeColor'))
            e.classList.add('changeColor')
        })
    })
}
