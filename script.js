save=document.getElementById("save");
text=document.getElementById("text");
clear=document.getElementById("clear");


(
    function populateText()
{
    if(localStorage.getItem("store") !== null)
    {
        restoreText=localStorage.getItem("store");
        console.log(restoreText);
        text.value=restoreText;
    }
})()



// console.log("sfafa");
save.addEventListener('click',()=>{
    storedText=text.value;

    localStorage.setItem("store",storedText);
    alert("Data Saved");

    

   
})


clear.addEventListener('click',()=>{
    a=confirm("Do you want to clear the data")
    if(a==true)
    {
        storedText=text.value;
        localStorage.removeItem("store");
        text.value="";

    }
    
   
    

   
})

