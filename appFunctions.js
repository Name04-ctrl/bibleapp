let cptMatthew = JSON.parse(matthew);
let cptMark = JSON.parse(mark);
let cptLuke = JSON.parse(luke);
let cptJohn = JSON.parse(john);
let cptRomans = JSON.parse(romans);
let cptProverbs = JSON.parse(proverbs);
let cptGenesis = JSON.parse(genesis);

bookArray = [cptMatthew, cptMark, cptLuke, cptJohn, cptRomans, cptProverbs, cptGenesis];

let bookIndex = 0;

let container = document.getElementById("wordAAC");

let refresh = document.getElementById("refresh");
refresh.onclick = openMatthew;

let nextChapter = document.getElementById("nextChapter");
nextChapter.onclick = goNext;

let previousChapter = document.getElementById("previousChapter");
previousChapter.onclick = goPrevious;

let goStart = document.getElementById("goStart");
goStart.onclick = goToStart;

let index = 0;
chapters = cptMatthew;
container.innerHTML = chapters[index].cpt;

function openMatthew() {
index = 0;
let bookName = document.getElementById("bookName");
bookName.innerHTML = "Matthew";
document.getElementById("goStart").innerHTML = index + 1;
let chapters = cptMatthew;
container.innerHTML = chapters[index].cpt;
bookIndex = 0;
}

function openMark() {
index = 0;
let bookName = document.getElementById("bookName");
bookName.innerHTML = "Mark";
document.getElementById("goStart").innerHTML = index + 1;
let chapters = cptMark;
container.innerHTML = chapters[index].cpt;
bookIndex = 1;
}

function openLuke() {
index = 0;
let bookName = document.getElementById("bookName");
bookName.innerHTML = "Luke";
document.getElementById("goStart").innerHTML = index + 1;
let chapters = JSON.parse(luke);
container.innerHTML = chapters[index].cpt;
bookIndex = 2;
}

function openJohn() {
index = 0;
let bookName = document.getElementById("bookName");
bookName.innerHTML = "John";
document.getElementById("goStart").innerHTML = index + 1;
let chapters = JSON.parse(john);
container.innerHTML = chapters[index].cpt;
bookIndex = 3;
}

function openRomans() {
index = 0;
let bookName = document.getElementById("bookName");
bookName.innerHTML = "Romans";
document.getElementById("goStart").innerHTML = index + 1;
let chapters = JSON.parse(romans);
container.innerHTML = chapters[index].cpt;
bookIndex = 4;
}

function openProverbs() {
index = 0;
let bookName = document.getElementById("bookName");
bookName.innerHTML = "Proverbs";
document.getElementById("goStart").innerHTML = index + 1;
let chapters = JSON.parse(proverbs);
container.innerHTML = chapters[index].cpt;
bookIndex = 5;
}

function openGenesis() {
index = 0;
let bookName = document.getElementById("bookName");
bookName.innerHTML = "Genesis";
document.getElementById("goStart").innerHTML = index + 1;
let chapters = JSON.parse(genesis);
container.innerHTML = chapters[index].cpt;
bookIndex = 6;
}

function goNext() {
  index++;
let chapters = bookArray[bookIndex];
container.innerHTML = chapters[index].cpt;
  document.getElementById("goStart").innerHTML = index + 1;
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function goPrevious() {
if (index < 1) {
index = 0;
}
else {
index--;
}
let chapters = bookArray[bookIndex];
  container.innerHTML = chapters[index].cpt;
  document.getElementById("goStart").innerHTML = index + 1;
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
let minIndex = "0";
}

function goToStart() {
let chapters = bookArray[bookIndex];
  container.innerHTML = chapters[0].cpt;
  index = 0;
  document.getElementById("goStart").innerHTML = index + 1;
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let add = document.getElementById("add");
bookName.onclick = clickBook;
function clickBook() {
let bkName = bookName.textContent;
let chNumber = goStart.textContent;
add.value = bkName + " " + chNumber;
}