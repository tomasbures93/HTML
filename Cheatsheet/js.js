function menu(number){
    if(document.querySelector(".article .clanek" + number).classList.contains("open")){
        document.querySelector(".article .clanek" + number).classList.remove("open");
        document.querySelector(".article .clanek" + number).classList.add("hide");
        document.querySelector(".fa-solid.icon" + number).classList.remove("fa-minus");
        document.querySelector(".fa-solid.icon" + number).classList.add("fa-plus");
    } else {
        document.querySelector(".article .clanek" + number).classList.remove("hide");
        document.querySelector(".article .clanek" + number).classList.add("open");
        document.querySelector(".fa-solid.icon" + number).classList.remove("fa-plus");
        document.querySelector(".fa-solid.icon" + number).classList.add("fa-minus");
    }
}
