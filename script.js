function LoadMoreVideos() {
  var VideoRow = document.querySelector(".VideoRow");
  var VideoGrid = document.querySelector(".videoGrid");
  var showLessDiv = document.querySelector(".showLessDiv");
  var MoreVideo = document.querySelector('.MoreVideo')
  VideoRow.style.display = 'none';
  MoreVideo.style.display = 'none';
  VideoGrid.style.display = 'block';
  showLessDiv.style.display = 'block';
  // alert("Load More Videos");
}

function ShowLessVeideo() {
  var VideoRow = document.querySelector(".VideoRow");
  var VideoGrid = document.querySelector(".videoGrid");
  var showLessDiv = document.querySelector(".showLessDiv");
  var MoreVideo = document.querySelector('.MoreVideo')
  VideoRow.style.display = 'flex';
  MoreVideo.style.display = 'flex';
  VideoGrid.style.display = 'none';
  showLessDiv.style.display = 'none';
  //  alert("Load More Videos");
}

function LoadMoreNotes() {
  var NotesRow = document.querySelector(".NotesRow");
  var MoreNotes = document.querySelector(".MoreNotes");
  var showLessDivNotes = document.querySelector(".showLessDivNotes");
  var NotesGrid = document.querySelector(".NotesGrid");


  NotesRow.style.display = 'none';
  MoreNotes.style.display = 'none';
  showLessDivNotes.style.display = 'flex';
  NotesGrid.style.display = 'flex';
}

function ShowLessNotes() {
  var NotesRow = document.querySelector(".NotesRow");
  var MoreNotes = document.querySelector(".MoreNotes");
  var showLessDivNotes = document.querySelector(".showLessDivNotes");
  var NotesGrid = document.querySelector(".NotesGrid");

  NotesRow.style.display = 'flex';
  MoreNotes.style.display = 'flex';
  showLessDivNotes.style.display = 'none';
  NotesGrid.style.display = 'none';
}

function LoadMoreQ_P() {
  var Q_PRow = document.querySelector(".Q_PRow");
  var MoreQ_P = document.querySelector(".MoreQ_P");
  var showLessDivQ_P = document.querySelector(".showLessDivQ_P");
  var Q_PGrid = document.querySelector(".Q_PGrid");

  Q_PRow.style.display = 'none';
  MoreQ_P.style.display = 'none';
  showLessDivQ_P.style.display = 'flex';
  Q_PGrid.style.display = 'flex';

}

function ShowLessQ_P() {
  var NotesRow = document.querySelector(".Q_PRow");
  var MoreNotes = document.querySelector(".MoreQ_P");
  var showLessDivNotes = document.querySelector(".showLessDivQ_P");
  var NotesGrid = document.querySelector(".Q_PGrid");

  NotesRow.style.display = 'flex';
  MoreNotes.style.display = 'flex';
  showLessDivNotes.style.display = 'none';
  NotesGrid.style.display = 'none';
}