(function(){
    document.getElementById("burgerToggle").addEventListener('click', function(){
        this.classList.toggle("active");
        document.getElementById("topNav").classList.toggle("active");
    }, false);
}());