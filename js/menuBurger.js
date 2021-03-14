function burger(menu, nav) {
    menu.addEventListener('click', () => {
        if (nav.classList.contains('open')) {
            nav.classList.remove('anim')
    
            setTimeout(() => {
                nav.classList.remove('open')
            }, 200)
    
            return
        }
    
        nav.classList.add('open')
    
        setTimeout(() => {
            nav.classList.add('anim')
        }, 20)
    })
}