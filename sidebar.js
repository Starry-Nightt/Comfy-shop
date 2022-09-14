const hamburger = document.querySelector('.js-hamburger');
const sidebarOverlay = document.querySelector('.js-sidebar-overlay');
const closeSidebarBtn = document.querySelector('.js-close-sidebar-overlay');

hamburger.addEventListener('click', function(){
    sidebarOverlay.classList.add('show');
})

closeSidebarBtn.addEventListener('click', function(){
    sidebarOverlay.classList.remove('show')
})

const sidebarApp = {
    hamburger: hamburger,
    sidebarOverlay: sidebarOverlay,
    closeSidebarBtn: closeSidebarBtn,

    handleClickEvents: function(){
        this.hamburger.addEventListener('click', function(){
            sidebarOverlay.classList.add('show');
        })
        
        this.closeSidebarBtn.addEventListener('click', function(){
            sidebarOverlay.classList.remove('show')
        })
    },

    start: function(){
        this.handleClickEvents();
    }
}


function runSidebar(){
    sidebarApp.start();
}

export default runSidebar;
