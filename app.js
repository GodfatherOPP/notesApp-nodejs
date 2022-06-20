const chalk = require("chalk");
// argv is an array that contains all the arguments provided via commad line
const yargs = require("yargs"); //yarg module provide simple command line interface
const notesUtil = require("./notes.js");

yargs.version("1.1.0");
//commad to add notes
yargs.command({
  command: "add",
  describe: "add data to notes",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "your note's body",
      type: "string",
    },
  },
  handler: function (argv) {
    notesUtil.AddNotes(argv.title,argv.body);
  },
});
// command to remove notes
yargs.command({
  command: "remove",
  describe: "remove data from notes",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
  notesUtil.removeNotes(argv.title)
  },
});
// command to read notes
yargs.command({
  command: "read",
  describe: "read your notes",
  builder:{
title:{
  describe: "note title",
  demandOption: true,
  type: "string",
}
  },
  handler: function (argv) {
    notesUtil.readNotes(argv.title)
  },
});
// command to list notes
yargs.command({
  command: "list",
  describe: "list of your notes",
  handler: function () {
   notesUtil.listNotes()
  },
});

//we need to use either of these command to run above yargs code. (because we need to parse info provided to yargs to get output)
//console.log(yargs.argv);
yargs.parse();
