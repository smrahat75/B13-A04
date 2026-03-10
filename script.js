let total = document.getElementById('total');
let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected');
let allCards = document.getElementById('allCards');


function calculateCount(){
    total.innerText = allCards.children.length;
    interview.innerText = interview.length;
    rejected.innerText = rejected.length;
    job.innerText = allCards.children.length;
}
calculateCount()

function toggleStyle(id){
    console.log("click")
}

