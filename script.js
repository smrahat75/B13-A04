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
switchTab(currentTab)
