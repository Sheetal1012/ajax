var ourRequest = new XMLHttpRequest();
var btn = document.getElementById("btn");
var ourList = document.getElementById("ourList");

btn.addEventListener("click",function(){
    ourRequest.open('GET','https://jsonplaceholder.typicode.com/posts');
    ourRequest.onload=function(){
        var ourData = JSON.parse(ourRequest.responseText);
        showMe(ourData);
};

    ourRequest.send();
});

function showMe(data) {
    var Element ="";
    initNumber=0;
    pageNumber=15;
    for(var i = initNumber; i < pageNumber; i++){
        Element+= `<p> My id is ${data[i].id} </p>`;
    };
    ourList.insertAdjacentHTML("beforeend", Element);
    if(pageNumber == 15)
    btn.classList.add("hideBtn");
}
