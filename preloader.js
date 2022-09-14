function preloader(){
    window.addEventListener('load', function(){
        document.querySelector('#preloader').classList.add('hide');
    })
}

export default preloader;