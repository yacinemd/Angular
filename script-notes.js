
function loadNotes() {
    const notesData = localStorage.getItem('notes');
    return  JSON.parse(notesData) ;
}
function addNote() {
    var notes = loadNotes();
    var noteTextarea = document.getElementById('note-textarea');
    var note = noteTextarea.value.trim(); 
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
    noteTextarea.value = '';
    displayNotes();
}
function displayNotes() {
    var notes = loadNotes();
    var ul = document.getElementById('notes-list');
    ul.innerHTML = '';
    notes.forEach(function(note) {
        var li = document.createElement('li');
        li.textContent = note;
        ul.appendChild(li);
    });
}

displayNotes();
