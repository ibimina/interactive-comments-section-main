let reply, score
let firstReply = []
let myReply = []
let commentArray = []
let replyArray = []
let user, userProfile
let section = document.querySelector('main')
let replyComment = document.querySelector('.reply-section')
let container = document.querySelector('.container')

const getData = async () => {

    try {
        let response = await fetch('data.json')
        //console.log(response)
        if (response.status !== 200) {
            throw new Error('cant fetch')
        }
        let data = await response.json()
        // console.log(data)

        return data
    } catch (error) {
        console.log('error')
    }

};





getData()
    .then(data => {
        console.log(data.comments)
        data.comments.forEach(element => {
            // element.replies
            console.log(element.content, element.id, element.user.image.png)

            reply = `
                <div id="${element.id}" class="user-comment">
                <div class="details">
                <img src="${element.user.image.png}" alt="image" class="image">
                <p class="username">${element.user.username}</p>
                <p class="created">${element.createdAt}</p>
                </div>
                <p class="content">${element.content}</p>
               <div class="score-container" id="${element.id}">
                <img src="images/icon-plus.svg" alt="image" class="plus">
                <p class="score">${Number(element.score)}</p>
                <img src="images/icon-minus.svg" alt="image" class="minus">
                </div>
                    <div class="reply">
                <img src="images/icon-reply.svg" alt="image" class="arrow">
                <p class="replytext">Reply</p>
                </div>

               </div>`
            section.innerHTML += reply
            //console.log(element.replies)
        });


        console.log(data.currentUser)
        data.comments.forEach(element => {
            element.replies.forEach(element => {
                console.log(element.id)

                if (element.id === 3)
                    firstReply.push(element)

                if (element.id === 4)
                    myReply.push(element)
            })
            console.log(firstReply)
            firstReply.forEach(element => {
                reply = `
                      <div id="${element.id}" class="user-comment">
                     <div class="details">
                    <img src="${element.user.image.png}" alt="image" class="image">
                    <p class="username">${element.user.username}</p>
                    <p class="created">${element.createdAt}</p>
                    </div>
                    <p class="content">  <span class="replyto">@${element.replyingTo} </span> ${element.content}</p>
                   <div class="score-container">
                    <img src="images/icon-plus.svg" alt="image" class="plus">
                    <p class="score">${element.score}</p>
                            <img src="images/icon-minus.svg" alt="image" class="minus">
                        </div>
                            <div class="reply">
                        <img src="images/icon-reply.svg" alt="image" class="arrow">
                        <p class="replytext">Reply</p>
                        </div>
            
                    </div>`

                replyComment.innerHTML += reply

            });
            myReply.forEach(element => {
                reply = `
                                <div id="${element.id}" class="replycon">
                                <div class="details">
                                    <img src="${element.user.image.png}" alt="image" class="image">
                                    <p class="username">${element.user.username}</p>
                                   <p class="you">you</p>
                                    <p class="created">${element.createdAt}</p>
                    </div>
                                    <p class="content">  <span class="replyto">@${element.replyingTo} </span> ${element.content}</p>
                                    <div class="score-container">
                                        <img src="images/icon-plus.svg" alt="image" class="plus">
                                        <p class="score">${element.score}</p>
                                        <img src="images/icon-minus.svg" alt="image" class="minus">
                                    </div>
                                     <div class="delete">
                                     <img src="images/icon-delete.svg" alt="image" class="deleteimg">
   
                                     <p>Delete</p>
                                     </div>
                                      <div class="edit">
                                      <img src="images/icon-edit.svg" alt="image" class="editimg">
   
                                      <p>Edit</p>
                                     </div>
                                </div>
                             `

                replyComment.innerHTML += reply

            });

        })
        let myComment = `<div class="add-comment">
            <form  id="addCommentForm" class="replyform">
                <img class="profile" src="${data.currentUser.image.png}">
                <textarea class="textarea" name="add-comment" id="addCommentBox" placeholder="Add a comment..."></textarea>
                <div class="add-comment__trigger">
                    <button type="submit" class="send">SEND</button>
                </div>
            </form>
        </div>`
        container.innerHTML += myComment
        console.log(data.currentUser)




    });


