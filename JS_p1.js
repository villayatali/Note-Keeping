// console.log('Hii there');

//add User Note to localStorage


showNotes();
let addBtn = document.getElementById('addBtn');

  //to show already added notes after refreshing tab

// to add Notes


addBtn.addEventListener("click", (e) => {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    if(addTxt.value!=""&&addTxt.value!="\n"){
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    // console.log(notesObj);
    showNotes();
    }
    else{
        window.alert("Add Some Note ")
    }
})

// To show notes
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = ""; 
    notesObj.forEach(function (element, index) {
        html += ` <div class="card  noteCard" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
        </div>
    </div>`
    });

    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show :(  ..... add some Notes !`;
    }
}

// Function To delete Notes
function deleteNote(index)
{
    // console.log("im deleting",index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}


//Search space to search a note


let search=document.getElementById('searchTxt');

search.addEventListener("input",function(){
    
    let inpVal=search.value.toLowerCase();
    let inpVal2=search.value.toUpperCase();
    // console.log("input event Fired",inpVal);

    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){

        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inpVal)||cardTxt.includes(inpVal2))
        {
            element.style.display='block';
        }
        else {
            element.style.display='none';
        }
    })
})