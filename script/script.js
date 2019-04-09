let nav = document.querySelector(".wrapper");
let icons = document.querySelector("#wrapper");
let iconJs= document.querySelector("#js");
let  iconHtml= document.querySelector("#html");
let iconGithub = document.querySelector("#github");
const menu = document.querySelector("#menu");

menu.addEventListener("click", display);
var count = 1;
function display() {
    count++;

    if(count % 2 == 0){
        icons.classList.add("block");
        iconJs.classList.add("js");
        iconHtml.classList.add("html");
        iconGithub.classList.add("github");
        nav.classList.add("move");
    }else{
        icons.classList.remove("block");
        iconJs.classList.remove("js");
        iconHtml.classList.remove("html");
        iconGithub.classList.remove("github");
        nav.classList.remove("move");

        /*icons.classList.add("blockB");
        iconJs.classList.add("jsB");
        iconHtml.classList.add("htmlB");
        iconGithub.classList.add("githubB");
        nav.classList.add("moveB");*/
    }


}
