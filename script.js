let input = document.querySelector("main");
let commentSection = document.querySelector(".comments");
let commentReply = document.querySelector(".replycontainer");
let user = [];
let userProfile = [];
let commentArray = [];
let replyArray = [];

async function getData() {
  try {
    let response = await fetch("data.json");
    let data = await response.json();
    data.comments.forEach((comment) => {
      commentArray.push(comment);
      // console.log(commentsArray)

      if (comment.replies.length > 0) {
        // const commentId = comment.id;
        // console.log(commentId)
        comment.replies.forEach((reply) => {
          replyArray.push(reply);
          // reply.parentId = commentId;
        });
      }
    });

    user.push(data.currentUser.username);
    userProfile.push(data.currentUser.image.png);

    // return data
  } catch (error) {
    console.log("error");
  }
}

getData().then(() => {
  printData();
});

const printData = () => {
  commentArray.forEach((element) => {
    commentSection.innerHTML += structureModel(element);
  });
  replyArray.forEach((element) => {
    if (element.id === 3) {
      commentReply.innerHTML += structureModelTwo(element);
    } else {
      commentReply.innerHTML += userFirstReply(element);
    }
  });

  input.innerHTML += pageReplyBox();
};

// function displays the first and second comment as given in the json file
const structureModel = (element) => {
  let commentStructure = ` <div id="${element.id}" class="user-comment">
                <div class="details">
                <img src="${element.user.image.png}" alt="image" class="image">
                <p class="username">${element.user.username}</p>
                <p class="created">${element.createdAt}</p>
                </div>
                <p class="content"> ${element.content}</p>
               <div class="score-container" >
                <img src="images/icon-plus.svg" alt="image" class="plus" >
                <p class="score">${element.score}</p>
                <img src="images/icon-minus.svg" alt="image" class="minus">
                </div>
                    <div class="reply">
                <img src="images/icon-reply.svg" alt="image" class="click-reply arrow ">
                <p class="click-reply  replytext">Reply</p>
                </div>

               </div>
               <div class="replycontaine">
               </div>
                <div class="add-comments">

              </div>
             
               `;

  return commentStructure;
};

// function displays the third comment as given in the json file
const structureModelTwo = (element) => {
  let commentStructure = ` <div id="${element.id}" class="user-comment">
                <div class="details">
                <img src="${element.user.image.png}" alt="image" class="image">
                <p class="username">${element.user.username}</p>
                <p class="created">${element.createdAt}</p>
                </div>
                <p class="content"> <span class="replyto">@${element.replyingTo} </span>${element.content}</p>
               <div class="score-container" >
                <img src="images/icon-plus.svg" alt="image" class="plus" >
                <p class="score">${element.score}</p>
                <img src="images/icon-minus.svg" alt="image" class="minus">
                </div>
                    <div class="reply">
                <img src="images/icon-reply.svg" alt="image" class="click-reply arrow">
                <p class="click-reply replytext">Reply</p>
                </div>

               </div>
               <div class="replycontaine">
               </div>
                <div class="add-comments">

              </div>
             
               `;

  return commentStructure;
};

//function displays the users first comment given in the json file
const userFirstReply = (element) => {
  let replyFormat = ` <div id="${element.id}" class="user-comment">
                                <div class="details">
                                    <img src="${element.user.image.png}" alt="image" class="image">
                                    <p class="username">${element.user.username}</p>
                                   <p class="you">you</p>
                                    <p class="created">${element.createdAt}</p>
                                </div>
                                    <p class="content">  <span class="replyto">@${element.replyingTo} </span> ${element.content}</p>
                                    <div class="score-container">
                                        <img src="images/icon-plus.svg" alt="image" class="plus" >
                                        <p class="score">${element.score}</p>
                                        <img src="images/icon-minus.svg" alt="image" class="minus">
                                    </div>
                                     <div class="delete">
                                     <img src="images/icon-delete.svg" alt="image" class="delete-comment deleimg">
                                     <p class="delete-comment">Delete</p>
                                     </div>
                                      <div class="edit">
                                      <img src="images/icon-edit.svg" alt="image" class="click-edit editimg">
                                      <p class="click-edit">Edit</p>
                                     </div>
                                    
                            </div>
                            <div class="deletewrappe"></div>
                           <div class="editwrappe"></div>
                           `;

  return replyFormat;
};

// function to insert the user homepage reply box
const pageReplyBox = () => {
  let currentUser = `
    <div class="add-comments"></div>
             <div class="add-comment">
            <form  id="addCommentForm" class="replyform">
                <img class="profile" src="${userProfile}" alt="image">
                <textarea class="textarea" name="add-comment" id="addCommentBox" placeholder="Add a comment..."></textarea>
                <div class="add-comment__trigger">
                    <button type="submit" class="page">SEND</button>
                </div>
            </form>
            </div>
        `;
  return currentUser;
};
//function to display editbox innerHtml when the edit icon or edit text is clicked

const editBoxStructure = (createdAt, content, score) => {
  let structure = ` <div class="details">
                    <img src="${userProfile}" alt="image" class="image">
                    <p class="username">${user}</p>
                    <p class="you">you</p>
                    <p class="created">${createdAt}</p>
             </div>

                 <form id="addCommentForm" class="contents">
                <textarea class="textarea" name="add-comment" id="addCommentBox" placeholder="Add a comment...">${content}</textarea>

            <div class="score-con">
                    <img src="images/icon-plus.svg" alt="image" class="plus">
                    <p class="score">${score}</p>
                    <img src="images/icon-minus.svg" alt="image" class="minus">
                </div>

                <div class="add-comment__trigger">
                    <button type="submit" class="sends">UPDATE</button>
                </div>


        </form>
`;
  return structure;
};

//function to display comment box when the reply arrow icon or reply text is clicked
const createComment = () => {
  let currentUser = `
            <form  id="addCommentForm" class="replyform">
                <img class="profile" src="${userProfile}" alt="image">
                <textarea class="textarea" name="add-comment" id="addCommentBox" placeholder="Add a comment..."></textarea>
                <div class="add-comment__trigger">
                    <button type="submit" class="send">SEND</button>
                </div>
            </form>
        `;
  return currentUser;
};

//function to display innerHtml of add comments when the send button is clicked

const replybox = (replyTo, replyMsg) => {
  let structure = ` <div id="4" class="user-comment">
                            <div class="details">
                                <img src="${userProfile}" alt="image" class="image">
                                 <p class="username">${user}</p>
                                 <p class="you">you</p>
                                <p class="created">seconds ago</p>
                            </div>
                                <p class="content">  <span class="replyto">@${replyTo}</span> ${replyMsg}</p>
                            <div class="score-container">
                                 <img src="images/icon-plus.svg" alt="image" class="plus" >
                                <p class="score">0</p>
                                <img src="images/icon-minus.svg" alt="image" class="minus">
                            </div>
                            <div class="delete">
                              <img src="images/icon-delete.svg" alt="image" class="delete-comment deleimg">
                              <p class="delete-comment">Delete</p>
                            </div>
                             <div class="edit">
                                <img src="images/icon-edit.svg" alt="image" class="click-edit editimg">
                             <p class="click-edit">Edit</p>
                               </div>
                        </div>
                        <div class="deletewrappe"></div>
                           <div class="editwrappe"></div>`;

  return structure;
};
// function to display delete warning message

const deleteWarning = () => {
  let warn = `<div class="deletewrapper">
                    <div class="deletewarningCon">
                            <div class="deletewarning">
                                <h4>Delete comment</h4>
                                <p> Are you sure you want to delete this comment?This will remove the comment and can't be undone.</p>
                                    <div class="buttonstyle">
                                        <button class="leavecomment">NO, CANCEL</button> <button class="deletenow">Yes, DELETE</button>
                                    </div>
                            </div>
                   </div>
             </div>
        `;
  return warn;
};
//function to display the edited reply
const updateReply = (createdAt, score, replyTo, contentText) => {
  let structure = ` <div class="details">
                                    <img src="${userProfile}" alt="image" class="image">
                                    <p class="username">${user}</p>
                                   <p class="you">you</p>
                                    <p class="created">${createdAt}</p>
                                </div>
                                    <p class="content">  <span class="replyto">${replyTo} </span> ${contentText}</p>
                                    <div class="score-container">
                                        <img src="images/icon-plus.svg" alt="image" class="plus" >
                                        <p class="score">${score}</p>
                                        <img src="images/icon-minus.svg" alt="image" class="minus">
                                    </div>
                                     <div class="delete">
                                     <img src="images/icon-delete.svg" alt="image" class=" delete-comment deleimg">
                                     <p class="delete-comment">Delete</p>
                                     </div>
                                      <div class="edit">
                                      <img src="images/icon-edit.svg" alt="image" class="click-edit editimg">
                                      <p class="click-edit">Edit</p>
                                     </div>
                            </div>

                            <div class="deletewrappe"></div>
                           <div class="editwrappe"></div>`;

  return structure;
};

// date manipulation to study more
// const timetime= ()=>{
// const today = new Date();
// // console.log(today)
// const crrr = new Date("22 December 2020")
// console.log(crrr)
// const dii =crrr.getTime()- today.getTime() ;
// // console.log(dii);

//     const sec =(dii/1000).toFixed(0)
//       const min = (dii / 1000*60).toFixed(0);
//         const hrs = (dii / (1000 * 60*60)).toFixed(0);
//           const day = (dii / (1000*60*60*24)).toFixed(0);
//             const weeks = (dii / (1000*60*60*24*7)).toFixed(0);
//               const month = (dii / (1000 *60*60*24*7*31)).toFixed(0);
//                 const yrs = (dii / (1000 * 60 * 60 * 24 * 7 * 31*12)).toFixed(0);

// if (sec < 60) {
//   return "seconds";
// } else if (min < 60) {
//   return min + "min";
// } else if (hrs < 24) {
//   return hrs + "hrs";
// } else if (day < 7) {
//   return day + "dayS";
// } else if (weeks < 4) {
//   return weeks + "weeks";
// } else if (month < 12) {
//   return month + "months";
// } else {
//   return yrs + "yrs";
// }

// }
// let rrr= timetime()

let isClicked = false;

//Event delegation
input.addEventListener("click", (e) => {
  e.preventDefault();
  let buttonClick = e.target;
  if (buttonClick.className.includes("plus") && !isClicked) {
    isClicked = true;
    buttonClick.nextElementSibling.textContent++;

  } else if (buttonClick.className.includes("minus") && isClicked) {
    isClicked = false;
    buttonClick.previousElementSibling.textContent--;

  } else if (buttonClick.className.includes("click-reply")) {
    buttonClick.parentElement.parentElement.nextElementSibling.innerHTML =
      createComment();
  } else if (buttonClick.className === "send") {
    let textBox = buttonClick.parentElement.parentElement.children[1];

    let container =
      buttonClick.parentElement.parentElement.parentElement.nextElementSibling;

    let username =
      buttonClick.parentElement.parentElement.parentElement
        .previousElementSibling.children[0].children[1].textContent;

    let reply = textBox.value.trim();
    if (reply.length > 0) {
      container.innerHTML += replybox(username, reply);

      let replyboxContainer = buttonClick.parentElement.parentElement;

      replyboxContainer.innerHTML = "";
      replyboxContainer.style.display = "none";
    }
  } else if (buttonClick.className === "page") {
    let textBoxx = buttonClick.parentElement.parentElement.children[1];

    let contain =
      buttonClick.parentElement.parentElement.parentElement
        .previousElementSibling;

    let reply = textBoxx.value.trim();
    if (reply.length > 0) {
      let replyTo = "maxblagun";
    
      contain.innerHTML += replybox(replyTo, reply);
      textBoxx.value = "";
    }
  } else if (buttonClick.className === "sends") {

    let replyContent =
      buttonClick.parentElement.parentElement.children[0].value.trim();

    let replyTo = replyContent.split(" ")[0];
  
    let contentText = replyContent.split(" ").slice(1).join(" ");
    let container = buttonClick.parentElement.parentElement.parentElement;
   
    let score =
      buttonClick.parentElement.previousElementSibling.children[1].textContent;
  
    let createdAt =
      buttonClick.parentElement.previousElementSibling.previousElementSibling
        .parentElement.previousElementSibling.children[3].textContent;
   

    container.innerHTML = updateReply(createdAt, score, replyTo, contentText);
  } else if (buttonClick.className.includes("delete-comment")) {
   
      buttonClick.parentElement.parentElement.nextElementSibling.innerHTML =
        deleteWarning();
 
  } else if (buttonClick.className.includes("leavecomment")) {
    
    
      buttonClick.parentElement.parentElement.parentElement.parentElement.parentElement.innerHTML =
        "";
   
    
  } else if (buttonClick.className === "deletenow") {
  
      buttonClick.parentElement.parentElement.parentElement.parentElement.parentElement.innerHTML =
        "";
   
    let yes =
      buttonClick.parentElement.parentElement.parentElement.parentElement
        .parentElement.previousElementSibling;

    no.innerHTML = "";
    yes.innerHTML = "";
    yes.style.display = "none";
  } else if (buttonClick.className.includes("click-edit")) {
  
    let container = buttonClick.parentElement.parentElement;

    let createdAt = container.children[0].children[3].textContent;

    let content = container.children[1].textContent;
    let score = container.children[2].children[1].textContent;

    container.innerHTML = editBoxStructure(createdAt, content, score);
  }
});
