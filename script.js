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


//Event delegation
input.addEventListener("click", (e) => {
  e.preventDefault();
  let buttonClick = e.target;
  if (buttonClick.className.includes("plus")) {
    buttonClick.nextElementSibling.textContent =
      Number(buttonClick.nextElementSibling.textContent) + 1;
  } else if (buttonClick.className.includes("minus")) {
    let scoreValue = buttonClick.previousElementSibling;

    if (scoreValue.textContent > 0) {
      let newScore = Number(buttonClick.previousElementSibling.textContent) - 1;
      scoreValue.textContent = newScore;
    }
  } else if (buttonClick.className.includes("click-reply")) {
    console.log("reply");

    let replyButton = buttonClick.parentElement.parentElement.nextElementSibling;
    console.log(replyButton);

    replyButton.innerHTML = createComment();
  } else if (buttonClick.className === "send") {
    //console.log("send");

    let textBox = buttonClick.parentElement.parentElement.children[1];
    //console.log(textBox);

    let container =
      buttonClick.parentElement.parentElement.parentElement.nextElementSibling;
    // console.log(container);

    let username =
      buttonClick.parentElement.parentElement.parentElement
        .previousElementSibling.children[0].children[1].textContent;
    //console.log(username);

    let reply = textBox.value.trim();
    if (reply.length > 0) {
      let replyTo = username;
      let replyContent = reply;

      container.innerHTML += replybox(replyTo, replyContent);
    
      let replyboxContainer = buttonClick.parentElement.parentElement;
      console.log(replyboxContainer);
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
      let replyContent = reply;

      console.log(contain);
      contain.innerHTML += replybox(replyTo, replyContent);
      textBoxx.value = "";
    }
  } else if (buttonClick.className === "sends") {
    console.log("dede");
    let replyContent =
      buttonClick.parentElement.parentElement.children[0].value.trim();
    //  console.log(replyContent)

    let replyTo = replyContent.split(" ")[0];
    // console.log(replyTo);
    let contentText = replyContent.split(" ").slice(1).join(" ");
    let container = buttonClick.parentElement.parentElement.parentElement;
    // console.log(container)
    let score =
      buttonClick.parentElement.previousElementSibling.children[1].textContent;
    // console.log(score)
    let createdAt =
      buttonClick.parentElement.previousElementSibling.previousElementSibling
        .parentElement.previousElementSibling.children[3].textContent;
    //   console.log(contentText)

    container.innerHTML = updateReply
    (createdAt, score, replyTo, contentText);
  } else if (buttonClick.className.includes("delete-comment")) {
    console.log("de");
    let deletePopup = buttonClick.parentElement.parentElement.nextElementSibling;
    console.log(deletePopup);
    deletePopup.innerHTML = deleteWarning();
  } else if (buttonClick.className.includes("leavecomment")) {
    // console.log("mi");
    let no =
      buttonClick.parentElement.parentElement.parentElement.parentElement
        .parentElement;
    // console.log(no);
    no.innerHTML = "";
  } else if (buttonClick.className === "deletenow") {
    // console.log("mii");
    let no =
      buttonClick.parentElement.parentElement.parentElement.parentElement
        .parentElement;
    let yes =
      buttonClick.parentElement.parentElement.parentElement.parentElement
        .parentElement.previousElementSibling;

    // console.log(yes);
    no.innerHTML = "";
    yes.innerHTML = "";
    yes.style.display = "none";
  } else if (buttonClick.className.includes("click-edit")) {
    // console.log("ii");
    let container = buttonClick.parentElement.parentElement;
    //   let container = buttonClick.parentElement.parentElement.nextElementSibling .nextElementSibling;
    // console.log(container);
    let createdAt = container.children[0].children[3].textContent;

    let content = container.children[1].textContent;
    let score = container.children[2].children[1].textContent;

    container.innerHTML = editBoxStructure(createdAt, content, score);
  }
});


//

// const pageReplyboxContent = (inputTextValue) => {
//   let inputTextValueStructure = ` <div id="4" class="user-comment">
//                                 <div class="details">
//                                     <img src="${userProfile}" alt="image" class="image">
//                                     <p class="username">${user}</p>
//                                    <p class="you">you</p>
//                                     <p class="created">seconds ago</p>
//                                 </div>
//                                     <p class="content">  <span class="replyto">@ramsesmirion</span> ${inputTextValue}</p>
//                                     <div class="score-container">
//                                         <img src="images/icon-plus.svg" alt="image" class="plus" >
//                                         <p class="score">0</p>
//                                         <img src="images/icon-minus.svg" alt="image" class="minus">
//                                     </div>
//                                      <div class="delete">
//                                      <img src="images/icon-delete.svg" alt="image" class="deleimg">

//                                      <p>Delete</p>
//                                      </div>
//                                       <div class="edit">
//                                       <img src="images/icon-edit.svg" alt="image" class="editimg">

//                                       <p>Edit</p>
//                                      </div>
//                             </div>
//                             <div class="deletewrappe"></div>
//                              <div class="editwrappe"></div>
//                             `;
//   return inputTextValueStructure;
// };


// for the first edit button on the home page
// const editDisplay = (editButton) => {
//   for (let i = 0; i < editButton.length; i++) {
//     let button = editButton[i];
//     //  console.log(button)
//     button.addEventListener("click", (e) => {
//       let buttonclicked = e.target;
//       // console.log(buttonclicked)

//       let container = buttonclicked.parentElement.parentElement;

//       let createdAt = container.children[0].children[3].textContent;

//       let content = container.children[1].textContent;
//       let score = container.children[2].children[1].textContent;

//       //container.innerHTML = editBoxStructure(createdAt, content, score);
//       //let updateButton = document.getElementsByClassName("sends");
//       //updatedReply(updateButton, container, createdAt, score);
//     });
//   }
// };

//for the first edit buttom on homepage
// const updatedReply = (updateButton, container, createdAt, score) => {
//   for (let i = 0; i < updateButton.length; i++) {
//     let button = updateButton[i];
//     console.log(button);

//     button.addEventListener("click", (e) => {
//       let buttonclicked = e.target;
//       e.preventDefault();
//       console.log("a");
//       if (buttonclicked) {
//         let replyContent =
//           buttonclicked.parentElement.parentElement.children[0].value.trim();
//         // console.log(voter)

//         let replyTo = replyContent.split(" ")[0];
//         console.log(replyTo);
//         let contentText = replyContent.split(" ").slice(1).join(" ");

//        // container.innerHTML = updateReply(
//         //   createdAt,
//         //   score,
//         //   replyTo,
//         //   contentText
//         // );

//         // add();
//         // sub();
//        // let deleteButton = document.getElementsByClassName(" deleimg");
//        // let editcomment = document.getElementsByClassName(" editimg");
//        // console.log(deletecomment);
//         //  deletePopup(deleteButton)
//         //deleteButtonDisplay(deleteButton);
//        // editDisplay(editcomment);
//       }
//     });
//   }
// };

// const deleteButtonDisplay = (deleteButton) => {
//   for (let i = 0; i < deleteButton.length; i++) {
//     let button = deleteButton[i];
//     // console.log(button)

//     button.addEventListener("click", (e) => {
//       let buttonclicked = e.target;

//       if (buttonclicked) {
//         console.log("c");

//         // console.log(buttonclicked.parentElement.parentElement.nextElementSibling)
//         let deletePopup =
//           buttonclicked.parentElement.parentElement.nextElementSibling;
//         deletePopup.innerHTML = deleteWarning();
//         let dialog = document.getElementsByClassName("buttonstyle");
//         //console.log(cancel)

//         for (let i = 0; i < dialog.length; i++) {
//           let dialogBox = dialog[i];
//           //console.log(su)

//           dialogBox.addEventListener("click", function (e) {
//             e.preventDefault();

//             let dialogOption = e.target;

//             let not =
//               dialogOption.parentElement.parentElement.parentElement
//                 .parentElement;
//             console.log(not);

//             let no =
//               dialogOption.parentElement.parentElement.parentElement
//                 .parentElement.parentElement;
//             let yes =
//               dialogOption.parentElement.parentElement.parentElement
//                 .parentElement.parentElement.previousElementSibling;

//             if (e.target.className.includes("leavecomment")) {
//               // console.log('a');
//               no.innerHTML = " ";
//               console.log("no");
//             } else if (e.target.className.includes("deletenow")) {
//               //console.log('b');
//               no.innerHTML = "";
//               // yes.innerHTML = ''
//               console.log("yes");
//               yes.style.display = "none";
//             }
//           });
//         }
//       }
//     });
//   }
// };

// display the input form when the reply arrow is clicked

// const createReplybox = (replyButton) => {

//     for (let i = 0; i < replyButton.length; i++) {
//         let button = replyButton[i];

//         button.addEventListener('click', e => {
//             let buttonclicked = e.target;
//             let contain = buttonclicked.parentElement.children[0];
//             // console.log(voter)
//             let replyboxContainer = contain.parentElement.parentElement.nextElementSibling.nextElementSibling;
//             // console.log(vote)

//             replyboxContainer.innerHTML = createComment()

//             // replyboxContainer.innerHTML = pageReplyBox() dont forget

//             let clickSend = document.getElementsByClassName("send")
//             pasteReplycomment(clickSend, replyboxContainer)

//         });

//     }

// }

// storing the textarea input reply value in a value and passing it in a function that displays the reply

// const pasteReplycomment = (clickSend, replyboxContainer) => {
//   for (let i = 0; i < clickSend.length; i++) {
//     let clickButton = clickSend[i];

//     clickButton.addEventListener("click", (e) => {
//       e.preventDefault();
//       let send = e.target;
//       let textBox = send.parentElement.parentElement.children[1];

//       let reply = textBox.value.trim();
//       if (reply.length > 0) {
//         let replyTo = reply.split(" ")[0];
//         let replyContent = reply.split(" ").slice(1).join(" ");
//         let container =
//           clickButton.parentElement.parentElement.parentElement
//             .previousElementSibling;
//        // container.innerHTML += replybox(replyTo, replyContent);

//         //replyboxContainer.innerHTML = "";
//         // add()
//         // sub()
//         //let deleteButton = document.getElementsByClassName(" deleimg");
//         // console.log(deletecomment)
//         // deletePopup(deleteButton)
//        // deleteButtonDisplay(deleteButton);
//         //let editcomment = document.getElementsByClassName(" editimg");

//        // editComment(editcomment);
//       }
//     });
//   }
// };
// const editComment = (editcomment) => {
//   for (let i = 0; i < editcomment.length; i++) {
//     let button = editcomment[i];

//     button.addEventListener("click", (e) => {
//       let buttonclicked = e.target;
//       console.log("buttonclicked");

//       let container = buttonclicked.parentElement.parentElement;

//       let createdAt = container.children[0].children[3].textContent;

//       let content = container.children[1].textContent;
//       let score = container.children[2].children[1].textContent;

//       container.innerHTML = editBoxStructure(createdAt, content, score);
//      // let updatecomment = document.getElementsByClassName("sends");
//      // updatereply(updatecomment, createdAt, score);
//     });
//   }
// };

// const updatereply = (updatecomment, createdAt, score) => {
//   for (let i = 0; i < updatecomment.length; i++) {
//     let button = updatecomment[i];
//     console.log(button);

//     button.addEventListener("click", (e) => {
//       let buttonclicked = e.target;
//       e.preventDefault();
//       console.log("a");
//       if (buttonclicked) {
//         let container = buttonclicked.parentElement.parentElement.parentElement;

//         let replyText =
//           buttonclicked.parentElement.parentElement.children[0].value.trim();

//         let replyTo = replyText.split(" ")[0];

//         let contentText = replyText.split(" ").slice(1).join(" ");

//         // container.innerHTML = updateReply(
//         //   createdAt,
//         //   score,
//         //   replyTo,
//         //   contentText
//         // );
//        // let deleteButton = document.getElementsByClassName(" deleimg");
//         // console.log(deletecomment)
//         // deletePopup(deletecomment)
//        // deleteButtonDisplay(deleteButton);
//        // let editcomment = document.getElementsByClassName(" editimg");
//         //console.log(editcomment);
//         //editComment(editcomment);
//         //    add();
//         //     sub();
//       }
//     });
//   }
// };

// delete messsage pop up when delete trash is click

// const deletePopup = (deleteButton) => {

//     for (let i = 0; i < deleteButton.length; i++) {
//         let dele = deleteButton[i]

//         dele.addEventListener('click', e => {
//             e.preventDefault()

//             let deleteClick = e.target
//             // console.log(removebut.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling)
//             let container = deleteClick.parentElement.parentElement.nextElementSibling
// console.log(container)
//             if (deleteClick) {
//                 container.innerHTML = deleteWarning()
//             }
//             let dialog = document.getElementsByClassName('buttonstyle')
//             // console.log(cancel)

//             dialChoice(dialog)
//         })
//     }
// }

// // click to confirm to delete reply or not delete reply

// const dialChoice = (dialog) => {
//     for (let i = 0; i < dialog.length; i++) {
//         let click = dialog[i]
//         // console.log(su)

//         click.addEventListener('click', function (e) {
//             e.preventDefault();

//             let clickBox = e.target

//             // let option = clickBox.parentElement.parentElement.parentElement.parentElement

//             let no = clickBox.parentElement.parentElement.parentElement.parentElement.parentElement
//             let yes = clickBox.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling

//             if (e.target.className.includes('leavecomment')) {
//                 console.log('a');

//                 no.innerHTML = ' '

//             } else if (e.target.className.includes('deletenow')) {
//                 console.log('b');
//                 no.innerHTML = ' '
//                 // yes.innerHTML = ' '
//                 yes.style.display ='none'
//             }

//         });

//     }

// }
