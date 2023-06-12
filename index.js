let tagFilter = document.querySelectorAll("ul.clickable > li");
let htmlTag = document.querySelectorAll("table.html_tag tr > td:nth-child(2)")

console.log(htmlTag.length)

for(let i = 1; i < tagFilter.length; i++) {
    tagFilter[i].addEventListener("click", () => {
        for(let j = 0; j < htmlTag.length; j++) {
            if(htmlTag[j].classList.contains(tagFilter[i].getAttribute("class"))){
                htmlTag[j].parentNode.classList.remove("hidden");
            } else {
                htmlTag[j].parentNode.classList.add("hidden");
            }
        }
    })
}

tagFilter[0].addEventListener("click", () => {
    for(let i = 0; i < htmlTag.length; i++) {
        htmlTag[i].parentNode.classList.remove("hidden");
    }
})