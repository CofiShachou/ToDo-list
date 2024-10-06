let inputTxt=$("#inputField");
let addButton=$("#addButton");
let x=1;
let redniBroj=0;

document.addEventListener("keypress",function(event){
    if(event.key==="/")
    {
        $("#inputField").focus();
        setTimeout(() => {
            $("#inputField").val("");
        }, 1);
    }
})

function addItem()
{
    let text=inputTxt.val();

    $("#box").append(`<div id="polje`+x+`" class="polje"><p class="poljeTxt">`+x+". "+text+`</p><p class="delete" id="delete`+x+`">X</p></div>`);
    // $("#box p").remove();
    x++;
    $("#inputField").val("");
}

document.addEventListener("keypress",function(event){
    if(event.key==="Enter")
    {
        addItem();
    }
})
addButton.click(()=>{
    addItem();
})
// $(this).attr("id")
$(document).on("click","p.delete",function(){
    let idHolder=$(this).attr("id");
    let id=idHolder.slice(6,7);
    console.log("Id= "+id)
    console.log("X Pre= "+x)

    $(`#box div#polje`+id+``).remove();

    

    x--;
    console.log("X Posle= "+x)
    let elementi=$("#box div p.delete").toArray();
    let brojElemenata=elementi.length;

    for(let i=0;i<brojElemenata;i++)
    {
        
        redniBroj=i+1;
        $(elementi[i]).attr("id","delete"+redniBroj);
    }

    let polja=$("#box div p.poljeTxt").toArray();
    let brojPolja=polja.length;
    for(let i=0;i<brojPolja;i++)
    {
        redniBroj=i+1;
        let textPrev=$(polja[i]).text();
        let text=textPrev.slice(3)
        $(polja[i]).text(redniBroj+". "+text);
    }


    let poljaDiv=$("#box div").toArray();
    let brojPoljaDiv=poljaDiv.length;
    for(let i=0;i<brojPoljaDiv;i++)
    {
        redniBroj=i+1;
        console.log("Radni broj je= "+redniBroj);
        
        $(poljaDiv[i]).attr("id","polje"+redniBroj);
    }
})