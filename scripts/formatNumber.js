// This formats the number
(function(){
    var numbers = document.getElementsByClassName("phoneNumber");
    for (var i = 0; i < numbers.length; i++)
    {
        // if( numbers.item(i).innerHTML.slice(4,4) != " ")
        var text = numbers.item(i).innerHTML.slice(0, 4);
        var text2 = numbers.item(i).innerHTML.slice(4);
        numbers.item(i).innerHTML = text + " " + text2;
    }
}());
(function(){
    document.getElementById("burgerToggle").addEventListener('click', function(){
        this.classList.toggle("active");
        document.getElementById("topNav").classList.toggle("active");
    }, false);
}());