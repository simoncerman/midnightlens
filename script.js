function showNav(){
    let nav = document.getElementById("navigation-ul");
    if(!nav.classList.contains("show-menu")){
        // show nav
        nav.classList.add("show-menu")
    } else {
        nav.classList.remove("show-menu");
    }
}