var fs = require("fs");
const chalk = require("chalk");
// function to add notes
var AddNotes = (Title, Body)=> {
  const notes = loadNotes();
  let duplicateNote = notes.find((note)=>note.title==Title);
if(duplicateNote==undefined){
  notes.push({
    title: Title,
    body: Body,
  });
}else{
  return console.log(chalk.red.inverse("that title is already occupied"))
}
  saveNotes(notes);
  return console.log(chalk.green.inverse("notes added"));
}
// function to remove notes
var removeNotes = (Title)=>{
  let notes = loadNotes();
  if(notes.filter((note)=>note.title==Title).length!=0){

    let noteToRemoved = notes.filter((note)=>note.title==Title)
    let cutFrom = notes.indexOf(noteToRemoved[0])
    notes.splice(cutFrom,1)
    saveNotes(notes)
    return console.log (chalk.green.inverse("note removed"))
  }else{
    return console.log(chalk.red.inverse("that title does not exist"))
  }
}
// function to list notes
var listNotes=()=>{
  const notes = loadNotes();
  notes.map((note)=>{
    console.log(chalk.inverse(note.title))
  })
}
// function to read notes
var readNotes=(Title)=>{
const notes = loadNotes()
let displayNote = notes.find(note=>note.title==Title)
if(displayNote=== undefined){
  console.log(chalk.red.inverse("note with this title does not exist"))
}else{
  console.log(chalk.inverse(displayNote.title))
console.log(displayNote.body)
}
}

function loadNotes() {
  try{
    const notes = fs.readFileSync("notes.json");
    const stringifiedNotes = JSON.parse(notes.toString());
    return stringifiedNotes;
  }catch{
      return []
  }
}
function saveNotes(arr) {
  const data = JSON.stringify(arr);
  fs.writeFileSync("notes.json", data);
}

module.exports = {
   AddNotes,
  removeNotes,
  listNotes,
  readNotes
};
