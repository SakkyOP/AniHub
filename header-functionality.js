const nav_links = document.querySelectorAll('a.nav-link')
const nav_links_href = ['/', '', '/most-popular',]

for (let i = 0; i < nav_links_href.length; i++) {
    nav_links[i].setAttribute('href', nav_links_href[i])
}

const dropdowns = document.querySelectorAll('a.dropdown-item')
const dropdown_href = ['/request-anime', '/contact-us']

for (let i = 0; i < dropdown_href.length; i++) {
    dropdowns[i].setAttribute('href', dropdown_href[i])    
}

document.querySelector('a.navbar-brand').setAttribute('href', '/')
