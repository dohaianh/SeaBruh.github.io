var slideIndex = 1;
let page = document.getElementById("root")
let content = document.getElementById("content")
function renderTrees(trees) {
    for(let i = 0 ; i < trees.length ; i++) {
        let tree =  trees[i]
        
        let images = trees[i].image[0];
        
        let treeName = trees[i].name;
        
        
        var treesHTML = `
        <div class="img_trees"> 
        <img src="${images}" class="tree">
        <h1>${treeName}</h1>
        </div>
        `
        
        content.insertAdjacentHTML("beforeend" , treesHTML);
        
        let clicks = content.getElementsByClassName("tree")
        let imgTrees = content.getElementsByClassName("img_trees")
        for(let j =0 ; j < clicks.length ; j++) {
            let click = clicks[j]
            let search = document.getElementById("search")
            let name = document.getElementById("name")
            click.addEventListener("click" , function() {
                content.innerHTML = ""
                document.getElementById("root").style.height = "2770px"
                content.style.height = "100%"
                document.getElementById("root").style.backgroundColor = "rgb(56, 75, 92)"
                backButton.style.display = "block"
                search.style.display = "none"
                name.style.display = "none"
                let infoTree;
                    infoTree = `
                        <div class="big_content">
                            <div class="trees_pre">
                                <div class="trees_ava">                               
                                    <img src="${trees[j].image[0]}" class="tree_ava">
                                    <h1>${trees[j].name}</h1>
                                </div>
                                <div class="trees_name">     
                                    <ul>
                                        <li><h2>${trees[j].describe}</h2></li>
                                        <li><h2>Đặc điểm: ${trees[j].features}</h2></li>
                                        <li><h2>Sinh trưởng: ${trees[j].growth}</h2></li>
                                        <li><h2>Công dụng: ${trees[j].uses}</h2></li>
                                        <li><h2>Nguồn gốc: ${trees[j].source}</h2></li>
                                        <li><h2>Trồng: ${trees[j].plant}</h2></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="more_img">
                                <img src="${trees[j].image[1]}" class="tree_info fade">
                                <img src="${trees[j].image[2]}" class="tree_info fade">
                                <img src="${trees[j].image[3]}" class="tree_info fade">
                                <img src="${trees[j].image[4]}" class="tree_info fade">
                                <img src="${trees[j].image[5]}" class="tree_info fade">
                                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                                <a class="next" onclick="plusSlides(1)">&#10095;</a>
                            </div>  


                            
                            <br>

                            <div style="text-align:center">
                                <span class="dot" onclick="currentSlide(1)"></span> 
                                <span class="dot" onclick="currentSlide(2)"></span> 
                                <span class="dot" onclick="currentSlide(3)"></span>
                                <span class="dot" onclick="currentSlide(4)"></span>
                                <span class="dot" onclick="currentSlide(5)"></span> 
                            </div>                       
                        </div>                     
                        `
                        content.insertAdjacentHTML("beforeend" , infoTree)
                        showSlides(slideIndex)
                    })          
        }       
    }
}

let searchInput = "";
let searchBtn = document.getElementById("btn_search")
document.getElementById('search_bar').addEventListener('change', function(e){
    content.innerHTML = ""
    searchInput = e.target.value
    fetchData()
})



function fetchData() {
    sendGetRequest(`http://5d8f863ce1d1e80014f51ebd.mockapi.io/Trees/?search=${searchInput}`, function(data) {
        let trees = data;
        renderTrees(trees)
    })
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
}
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("tree_info");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

let button = document.getElementById("btn")
let search = document.getElementById("search")
let backButton = document.getElementById("back")
let name = document.getElementById("name")

button.addEventListener("click" , function() {
    button.style.display = "none"
    content.innerHTML = ""
    document.getElementById("root").style.height = "3880px"
    document.getElementById("content").style.height = "100%"
    document.getElementById("content").style.backgroundColor = "rgb(56, 75, 92)"
    search.style.display = "block"
    name.style.display = "block"
    fetchData()
    
})

backButton.addEventListener("click" , function() {
    content.innerHTML = ""
    document.getElementById("root").style.height = "3880px"
    document.getElementById("content").style.height = "100%"
    fetchData()
    backButton.style.display = "none"
    search.style.display = "block"
    name.style.display = "block"
})













