const notes = [
    {content: "Note 1", date: "15/11/2023"},
    {content: "Note 2", date: "16/11/2023"},
    {content: "Note 3", date: "17/11/2023"},
    {content: "Note 4", date: "18/11/2023"}
]

function createNoteElement(note, position) {
    const li = document.createElement("li");
    li.classList.add("li_notes");
    const span = document.createElement("span");
    span.classList.add("span");
    const button = document.createElement("button");
    button.classList.add("button_li");
    
    span.textContent = note.content;
    button.textContent = "Delete";
    button.addEventListener("click", function deleteNote(){
        notes.splice(position, 1);
        renderNotes();
    });
    
    li.append(span, button);
    return li;
}

function renderNotes() {
   const ul = document.querySelector(".ul_notes");
   ul.innerHTML = "";
 for(let i = 0; i < notes.length; i++){
  const li = createNoteElement(notes[i], i);
  ul.append(li);
 } 
}
renderNotes();
// DOM
function handlesubmit(event) {
    event.preventDefault();
    const form = event.target;
    const noteElement = form.elements["new-notes"].value;
    if (noteElement !== "") {
        const newNote = {content: noteElement}
        notes.push(newNote);
    } else {
        alert("Por favor escribe algo!");
    }
    form.reset();
    renderNotes();
}

const form = document.querySelector(".form_notes");
form.addEventListener("submit", handlesubmit);


