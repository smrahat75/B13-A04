let currentTab = "all";
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
}
