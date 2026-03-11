let currentTab = "all";

const allCards = document.getElementById("allCards");
const interviewCards = document.getElementById("interviewCards");
const rejectedCards = document.getElementById("rejectedCards");




function switchTab(tab){
    console.log(tab);
    const tabs = ["all", "interview", "rejected"];

    for (const t of tabs){
        const tabName = document.getElementById ("btn-"+t);
        if (t === tab){
            tabName.classList.remove("bg-[#FFFFFF]", "text-[#64748B]")
            tabName.classList.add("bg-[#3B82F6]", "text-[#FFFFFF]")
        }
        else{
            tabName.classList.add("bg-[#FFFFFF]", "text-[#64748B]")
            tabName.classList.remove("bg-[#3B82F6]", "text-[#FFFFFF]")
        }
    }

    const card = [allCards, interviewCards, rejectedCards];

    for (const section of card) {
        section.classList.add("hidden")
    }

    if (tab === "all"){
        allCards.classList.remove("hidden")
    }
    else if (tab === "interview"){
        interviewCards.classList.remove("hidden")
    }
    else{
        rejectedCards.classList.remove("hidden")
    }

}


const total = document.getElementById("total");
const interview = document.getElementById("interview");
const rejected = document.getElementById("rejected");

total.innerText = allCards.children.length;


switchTab(currentTab)

document.getElementById("card").addEventListener("click", function(event){
    const clickedElement = event.target;
   
    const card = clickedElement.closest("#card");
    const status = card.querySelector("status")
    console.log(card)

    if(clickedElement.classList.contains("interview")){
     interviewCards.appendChild(card)
    }
    if(clickedElement.classList.contains("rejected")){
      rejectedCards.appendChild(card)
    }
    if(clickedElement.classList.contains("delete")){
      console.log("delete Clicked")
    }
})