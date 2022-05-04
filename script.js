let input = document.querySelector('main')
let commentSection = document.querySelector('.comments')
let commentReply = document.querySelector('.replycontainer')
let user = []
let userProfile = []
let commentsId = [];
let replyCommentsId = [];
let commentArray = [];
let replyArray = []

async function getData() {

    try {

        let response = await fetch('data.json')
        let data = await response.json()
        data.comments.forEach(comment => {
            commentArray.push(comment);
            // console.log(commentsArray)

            if (comment.replies.length > 0) {
                // const commentId = comment.id;
                // console.log(commentId)
                comment.replies.forEach(reply => {
                    replyArray.push(reply);
                    // reply.parentId = commentId;
                })
            }

        })

        user.push(data.currentUser.username)
        userProfile.push(data.currentUser.image.png)


        // return data
    } catch (error) {
        console.log('error')
    }



};


getData().then(() => {

    printData()


});


const printData = () => {

    commentArray.forEach(element => {
        commentSection.innerHTML += structureModel(element)

    });
    replyArray.forEach(element => {

        if (element.id === 3) {
            commentReply.innerHTML += structureModel(element)
        } else {
            commentReply.innerHTML += userFirstReply(element)
        }

    });

    input.innerHTML += pageReplyBox()

    incr()

}




const structureModel=(element)=>{

    let commentStructure = ` <div id="${element.id}" class="user-comment">
                <div class="details">
                <img src="${element.user.image.png}" alt="image" class="image">
                <p class="username">${element.user.username}</p>
                <p class="created">${element.createdAt}</p>
                </div>
                <p class="content">${element.content}</p>
               <div class="score-container" >
                <img src="images/icon-plus.svg" alt="image" class="plus" >
                <p class="score">${element.score}</p>
                <img src="images/icon-minus.svg" alt="image" class="minus">
                </div>
                    <div class="reply">
                <img src="images/icon-reply.svg" alt="image" class="arrow">
                <p class="replytext">Reply</p>
                </div>

               </div>
               <div class="replycontaine">
               </div>
                <div class="add-comments">

              </div>
             
               `

return commentStructure
}

const userFirstReply = (element)=>{
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
                                     <img src="images/icon-delete.svg" alt="image" class="deleimg">
                                     <p>Delete</p>
                                     </div>
                                      <div class="edit">
                                      <img src="images/icon-edit.svg" alt="image" class="editimg">
                                      <p>Edit</p>
                                     </div>
                            </div>
                           <div class="deletewrappe"></div>
                           <div class="editwrappe"></div>
                           `

    return replyFormat
}

const pageReplyBox = () => {

    let currentUser = `
    <div class="add-comments"></div>
             <div class="add-comment">
            <form  id="addCommentForm" class="replyform">
                <img class="profile" src="${userProfile}" alt="image">
                <textarea class="textarea" name="add-comment" id="addCommentBox" placeholder="Add a comment..."></textarea>
                <div class="add-comment__trigger">
                    <button type="submit" class="send">SEND</button>
                </div>
            </form>
            </div>
        `
    return currentUser
}

//

const pageReplyboxContent = (inputTextValue) => {
    let inputTextValueStructure = ` <div id="4" class="user-comment">
                                <div class="details">
                                    <img src="${userProfile}" alt="image" class="image">
                                    <p class="username">${user}</p>
                                   <p class="you">you</p>
                                    <p class="created">seconds ago</p>
                                </div>
                                    <p class="content">  <span class="replyto">@ramsesmirion</span> ${inputTextValue}</p>
                                    <div class="score-container">
                                        <img src="images/icon-plus.svg" alt="image" class="pluss" >
                                        <p class="score">0</p>
                                        <img src="images/icon-minus.svg" alt="image" class="minuss">
                                    </div>
                                     <div class="delete">
                                     <img src="images/icon-delete.svg" alt="image" class="deleimg">

                                     <p>Delete</p>
                                     </div>
                                      <div class="edit">
                                      <img src="images/icon-edit.svg" alt="image" class="editimg">

                                      <p>Edit</p>
                                     </div>
                            </div>
                            <div class="deletewrappe"></div>
                             <div class="editwrappe"></div>
                            `
    return inputTextValueStructure
}

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
`
    return structure
}
const incr = () => {


   // let incrementButton = document.getElementsByClassName('plus')
   // let decrementButton = document.getElementsByClassName('minus')
    let replyButton = document.getElementsByClassName('arrow')
    let sendButton = document.getElementsByClassName('send')
    let deleteButton = document.getElementsByClassName('deleimg')
    let editButton = document.getElementsByClassName('editimg')
    let scoreContainer = document.getElementsByClassName('score-container')


    for (let i = 0; i < sendButton.length; i++) {
        let button = sendButton[i];
        button.addEventListener('click', e => {
            e.preventDefault();

            let buttonclicked = e.target;
            console.log(buttonclicked)
            
            console.log('buttonclicked')

            let textContainer = buttonclicked.parentElement.parentElement.parentElement.previousElementSibling

            let inputTextValue = buttonclicked.parentElement.parentElement.children[1].value.trim();
         if (inputTextValue.length>0) {
             textContainer.innerHTML += pageReplyboxContent(inputTextValue);

             //function to make the home reply box function when the comments are sent
             deleteButtonDisplay(deleteButton)
             editDisplay(editButton)
             add();
             sub();
        
         }
            
        })

    }

//displays the reply input box when the reply button is clicked
    createReplybox(replyButton)


//increase the score of the comment //decrease the score of of a vote
    plusAndMinusScore(scoreContainer) 
    
//edit reply display
    editDisplay(editButton)
    
    //delete reply 
    deleteButtonDisplay(deleteButton)

  }


const plusAndMinusScore = (scoreContainer) => {
    for (let i = 0; i < scoreContainer.length; i++) {
        // let incrementButton = document.getElementsByClassName('plus')
        let button = scoreContainer[i];
        button.addEventListener('click', e => {
            let buttonclicked = e.target;
           // console.log(buttonclicked)
            console.log('new')
            if(buttonclicked.className.includes('plus')){

            // console.log('a')
            let score = buttonclicked.parentElement.children[1];
           // console.log(score)
            let scoreValue = score.textContent;

            let newScore = Number(scoreValue) + 1;
            // console.log(newVote)
            score.textContent = newScore

            } else if (buttonclicked.className.includes('minus')){

                let score = buttonclicked.parentElement.children[1];
                // console.log(vote)
                let scoreValue = score.textContent;

                let newScore = Number(scoreValue) - 1;
                // console.log(newVote)
                score.textContent = newScore
                console.log('new')
            }

        })

    }
}



// for the first edit button on the home page
const editDisplay = (editButton) => {
    for (let i = 0; i < editButton.length; i++) {
        let button = editButton[i];
        //  console.log(button)
        button.addEventListener('click', e => {
            let buttonclicked = e.target;
            // console.log(buttonclicked)

            let container = buttonclicked.parentElement.parentElement;

            let createdAt = container.children[0].children[3].textContent

            let content = container.children[1].textContent
            let score = container.children[2].children[1].textContent


            container.innerHTML = editBoxStructure (createdAt, content, score)
            let updateButton = document.getElementsByClassName('sends')
            updatedReply(updateButton, container, createdAt, score)
           
        })

    }


}


const updateReply = (createdAt,score,replyTo,contentText)=>{
    let structure = ` <div class="details">
                                    <img src="${userProfile}" alt="image" class="image">
                                    <p class="username">${user}</p>
                                   <p class="you">you</p>
                                    <p class="created">${createdAt}</p>
                                </div>
                                    <p class="content">  <span class="replyto">${replyTo} </span> ${contentText}</p>
                                    <div class="score-container">
                                        <img src="images/icon-plus.svg" alt="image" class="pluss" >
                                        <p class="score">${score}</p>
                                        <img src="images/icon-minus.svg" alt="image" class="minuss">
                                    </div>
                                     <div class="delete">
                                     <img src="images/icon-delete.svg" alt="image" class="deleimg">
                                     <p>Delete</p>
                                     </div>
                                      <div class="edit">
                                      <img src="images/icon-edit.svg" alt="image" class="editimg">
                                      <p>Edit</p>
                                     </div>
                            </div>

                            <div class="deletewrappe"></div>
                           <div class="editwrappe"></div>`

                           return structure
}
//for the first edit buttom on homepage
const updatedReply = (updateButton, container,createdAt, score)=>{
    for (let i = 0; i < updateButton.length; i++) {
        let button = updateButton[i];
        console.log(button)

        button.addEventListener('click', e => {
            let buttonclicked = e.target;
            e.preventDefault()
            console.log('a')
        if (buttonclicked) {
            let replyContent = buttonclicked.parentElement.parentElement.children[0].value.trim()
            // console.log(voter)


            let replyTo = replyContent.split(" ")[0]
            console.log(replyTo)
            let contentText = replyContent.split(' ').slice(1).join(' ')

            container.innerHTML =  updateReply(createdAt, score, replyTo, contentText)

            add();
            sub();
            let deleteButton = document.getElementsByClassName(' deleimg')
            let editcomment = document.getElementsByClassName(' editimg')
            console.log(deletecomment)
          //  deletePopup(deleteButton)
            deleteButtonDisplay(deleteButton)
            editDisplay(editcomment)
          }
            
        })

    }

}




const deleteButtonDisplay = (deleteButton) => {

    for (let i = 0; i < deleteButton.length; i++) {
        let button = deleteButton[i]
       // console.log(button)

        button.addEventListener('click', e => {
            let buttonclicked = e.target

            if (buttonclicked) {
                console.log('c')

                // console.log(buttonclicked.parentElement.parentElement.nextElementSibling)
                let deletePopup = buttonclicked.parentElement.parentElement.nextElementSibling
               deletePopup.innerHTML = deleteWarning()
                let dialog = document.getElementsByClassName('buttonstyle')
                //console.log(cancel)


                for (let i = 0; i < dialog.length; i++) {
                    let dialogBox = dialog[i]
                    //console.log(su)

                    dialogBox.addEventListener('click', function (e) {
                        e.preventDefault();

                        let dialogOption = e.target

                        let not = dialogOption.parentElement.parentElement.parentElement.parentElement
                        console.log(not)

                        let no = dialogOption.parentElement.parentElement.parentElement.parentElement.parentElement
                        let yes = dialogOption.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling

                        if (e.target.className.includes('leavecomment')) {
                           // console.log('a');
                            no.innerHTML = ' '
                            console.log('no')
                        } else if (e.target.className.includes('deletenow')) {
                            //console.log('b');
                            no.innerHTML = ''
                            // yes.innerHTML = ''
                            console.log('yes')
                            yes.style.display = 'none'

                        }


                    });

                }

            }

        })

    }

}









const createComment = () => {


    let currentUser = `
            <form  id="addCommentForm" class="replyform">
                <img class="profile" src="${userProfile}" alt="image">
                <textarea class="textarea" name="add-comment" id="addCommentBox" placeholder="Add a comment..."></textarea>
                <div class="add-comment__trigger">
                    <button type="submit" class="send">SEND</button>
                </div>
            </form>
        `
    return currentUser
}



//collecting the input value and insertin in a html template

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
                                 <img src="images/icon-plus.svg" alt="image" class="pluss" >
                                <p class="score">0</p>
                                <img src="images/icon-minus.svg" alt="image" class="minuss">
                            </div>
                            <div class="delete">
                              <img src="images/icon-delete.svg" alt="image" class="deleimg">
                              <p>Delete</p>
                            </div>
                             <div class="edit">
                                <img src="images/icon-edit.svg" alt="image" class="editimg">
                             <p>Edit</p>
                               </div>
                        </div>
                        <div class="deletewrappe"></div>
                           <div class="editwrappe"></div>`
                        
                        

    
     return structure

}


// display the input form when the reply arrow is clicked

const createReplybox = (replyButton) => {

    for (let i = 0; i < replyButton.length; i++) {
        let button = replyButton[i];

        button.addEventListener('click', e => {
            let buttonclicked = e.target;
            let contain = buttonclicked.parentElement.children[0];
            // console.log(voter)
            let replyboxContainer = contain.parentElement.parentElement.nextElementSibling.nextElementSibling;
            // console.log(vote)

            replyboxContainer.innerHTML = createComment()


            // replyboxContainer.innerHTML = pageReplyBox() dont forget

            let clickSend = document.getElementsByClassName("send")
            pasteReplycomment(clickSend, replyboxContainer)


        });


    }

}

// storing the textarea input reply value in a value and passing it in a function that displays the reply

const pasteReplycomment = (clickSend, replyboxContainer) => {


    for (let i = 0; i < clickSend.length; i++) {
        let clickButton = clickSend[i]

        clickButton.addEventListener('click', e => {
            e.preventDefault()
            let send = e.target
            let textBox = send.parentElement.parentElement.children[1]


            let reply = textBox.value.trim()
            if (reply.length>0) {
                let replyTo = reply.split(" ")[0]
                let replyContent = reply.split(' ').slice(1).join(' ')
                let container = clickButton.parentElement.parentElement.parentElement.previousElementSibling
                container.innerHTML += replybox(replyTo, replyContent)


                replyboxContainer.innerHTML = ''
                add()
                sub()
                let deleteButton = document.getElementsByClassName(' deleimg')
                // console.log(deletecomment)
               // deletePopup(deleteButton)
                deleteButtonDisplay(deleteButton)
                let editcomment = document.getElementsByClassName(' editimg')

                editComment(editcomment)   
            }
           
        })


    }
}
const editComment = (editcomment) => {
    for (let i = 0; i < editcomment.length; i++) {
        let button = editcomment[i];
    
        button.addEventListener('click', e => {
            let buttonclicked = e.target;
             console.log('buttonclicked')

            let container = buttonclicked.parentElement.parentElement;

            let createdAt= container.children[0].children[3].textContent

            let content = container.children[1].textContent
            let score = container.children[2].children[1].textContent

            container.innerHTML = editBoxStructure(createdAt, content, score)
            let updatecomment = document.getElementsByClassName('sends')
            updatereply(updatecomment,createdAt,score)
        })
    }

}


const updatereply=(updatecomment,createdAt,score)=>{
for (let i = 0; i < updatecomment.length; i++) {
        let button = updatecomment[i];
        console.log(button)

        button.addEventListener('click', e => {
            let buttonclicked = e.target;
            e.preventDefault()
            console.log('a')
            if (buttonclicked) {
                let container = buttonclicked.parentElement.parentElement.parentElement
                
                let replyText = buttonclicked.parentElement.parentElement.children[0].value.trim()
               


                let replyTo = replyText.split(" ")[0]
               
                let contentText = replyText.split(' ').slice(1).join(' ')
               

                container.innerHTML = updateReply(createdAt, score, replyTo, contentText)
                let deleteButton = document.getElementsByClassName(' deleimg')
                // console.log(deletecomment)
               // deletePopup(deletecomment)
                deleteButtonDisplay(deleteButton)
                let editcomment = document.getElementsByClassName(' editimg')
                console.log(editcomment)
                editComment(editcomment)
           add();
            sub();
             
            }
           
        })

    }

}

const add = () => {
    let incrementButton = document.getElementsByClassName('pluss')

    for (let i = 0; i < incrementButton.length; i++) {

        let button = incrementButton[i];
        button.addEventListener('click', e => {
            let buttonclicked = e.target;
            console.log(buttonclicked)

            let vote = buttonclicked.parentElement.children[1];
            // console.log(vote)
            let voteValue = vote.textContent;

            let newVote = Number(voteValue) + 1;
            // console.log(newVote)
            vote.textContent = newVote

        })

    }

}

const sub = () => {
    let decrementButton = document.getElementsByClassName('minuss')

    for (let i = 0; i < decrementButton.length; i++) {

        let button = decrementButton[i];
        button.addEventListener('click', e => {
            let buttonclicked = e.target;
            console.log(buttonclicked)

            let vote = buttonclicked.parentElement.children[1];
            // console.log(vote)
            let voteValue = vote.textContent;

            let newVote = Number(voteValue) - 1;
            // console.log(newVote)
            vote.textContent = newVote

        })

    }

}



// delete warning message

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
        `
    return warn

}

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





