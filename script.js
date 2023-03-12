


document.addEventListener('DOMContentLoaded', function () {
  const adminIcon = document.getElementById("AdminIcon");
  const UserIcon = document.getElementById("UserIcon");

  // Call the functions to set and retrieve the user's info from the cookie
  const userInfo = getUserInfoFromCookie();


  if (userInfo.name && userInfo.email) {
    // console.log(`Name: ${userInfo.name}, Email: ${userInfo.email}`);
    // alert(userInfo.name," :: ",userInfo.email)

    var UserNameLetter = userInfo.name[0];
    if (adminIcon) {
      adminIcon.style.display = "flex";
    }
    if (UserIcon) {
      UserIcon.style.display = "none";
    }

  } else {
    // console.log("User info not found in cookie.");
  }



});




function SetCookieForAdmin(email, name) {
  // Set a cookie when the user logs in
  document.cookie = `name=${name}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
  document.cookie = `email=${email}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
}

function Logout() {
  // Delete the cookies
  if (confirm("Are You sure to Logout")) {
   // confirm("Are You sure to Logout")
    document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Redirect to the login page
    window.location.href = "/";
  }
}


// Retrieve the user's name and email from the cookie
function getUserInfoFromCookie() {
  const cookies = document.cookie.split("; ");
  let name = "";
  let email = "";
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === "name") {
      name = cookie[1];
    } else if (cookie[0] === "email") {
      email = cookie[1];
    }
  }
  return { name, email };
}










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


// Function to open the login form
function openForm() {
  document.getElementById("Signup").style.display = "none";
  document.getElementById("myForm").style.display = "flex";
}

// Function to close the login form
function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("Signup").style.display = "none";
}

function OpenSignup() {
  document.getElementById("Signup").style.display = "flex";
  document.getElementById("myForm").style.display = "none";
}



function DoSignup() {
  // alert()
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var password = document.getElementById("password").value;
  var name = document.getElementById("name").value;

  $.ajax({
    url: 'http://localhost:3000/admin/signup ',
    method: 'POST',
    data: {
      number: number,
      email: email,
      password: password,
      name: name
    },
    success: function (response) {
      // handle successful signup
      // alert(response)


      window.location.href = '/'; // redirect to home page
      console.log(response.message);
      SetCookieForAdmin(email, name)
    },
    error: function (xhr, status, error) {
      // handle error
      // alert(response)
      console.log("Error", xhr.responseText);
      console.log("Error", error);
    }
  });

}

function DoLogin() {
  var email = document.getElementById("LoginEmail").value;
  var password = document.getElementById("LoginPaasword").value;

  $.ajax({
    url: 'http://localhost:3000/admin/login ',
    method: 'POST',
    data: {
      email: email,
      password: password
    },
    success: function (response) {
      // handle successful signup
       //alert("Login: ",response)
       //console.log(user)
      var UserStatus = response.UserStatus
      var user = UserStatus.user
      


       if(UserStatus.user){
        // alert("Logged");
        var name = user.name
        window.location.href = '/'; // redirect to home page
        SetCookieForAdmin(email,name);

       }else if(UserStatus.err){
        alert(UserStatus.err)
       }


      // window.location.href = '/'; // redirect to home page
      // console.log(response.message);
      // SetCookieForAdmin(email,name);
    },
    error: function (xhr, status, error) {
      // handle error
      // alert(response)
      //console.log("Error", xhr.responseText);
      console.log("Error", error);
    }
  });
}


