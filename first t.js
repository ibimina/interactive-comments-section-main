let profilepic1, profilepic2, username, username1,
    divcontainer, divcontainer1, date1, date2,divcontainer4,divcontainer5,
    comment1, comment2, minu, plus, upVote1, upVote2,
    commentThree,commentFour,replyUserone,replyUsertwo,
    deleteDiv,trash,trashText,editDiv,editIcon,editText,replycontainer1




divcontainer = document.createElement('div')
divcontainer.classList.add('replycontainer')
document.body.appendChild(divcontainer)

profilepic1 = document.createElement('img')
profilepic1.setAttribute('class', 'img')
divcontainer.appendChild(profilepic1)

username = document.createElement('p')
username.setAttribute('class', 'username')
divcontainer.appendChild(username)

date1 = document.createElement('p')
date1.setAttribute('class', 'replytime')
divcontainer.appendChild(date1)

comment1 = document.createElement('p')
comment1.setAttribute('class', 'comment')
divcontainer.appendChild(comment1)

mathScore = document.createElement('div')
mathScore.setAttribute('class', 'scorediv')
divcontainer.appendChild(mathScore)

plus = document.createElement('img')
plus.src = "images/icon-plus.svg"
plus.setAttribute('class', 'imgiconplus')
mathScore.appendChild(plus)

upVote1 = document.createElement('p')
upVote1.setAttribute('class', 'score')
mathScore.appendChild(upVote1)

minu = document.createElement('img')
minu.src = "images/icon-minus.svg"
minu.setAttribute('class', 'imgiconminus')
mathScore.appendChild(minu)

replyDiv = document.createElement('div')
replyDiv.setAttribute('class', 'replyicondiv')
divcontainer.appendChild(replyDiv)

reply = document.createElement('img')
reply.src = "images/icon-reply.svg"
reply.setAttribute('class', 'arrow')
replyDiv.appendChild(reply)

replyText = document.createElement('p')
replyDiv.appendChild(replyText)
replyText.setAttribute('class', 'replytext')
replyText.textContent = 'Reply'




divcontainer1 = document.createElement('div')
divcontainer1.classList.add('replycontainer')
document.body.appendChild(divcontainer1)

profilepic2 = document.createElement('img')
profilepic2.setAttribute('class', 'img')
divcontainer1.appendChild(profilepic2)

username1 = document.createElement('p')
username1.setAttribute('class', 'username')
divcontainer1.appendChild(username1)

date2 = document.createElement('p')
date2.setAttribute('class', 'replytime')
divcontainer1.appendChild(date2)

comment2 = document.createElement('p')
comment2.setAttribute('class', 'comment')
divcontainer1.appendChild(comment2)

mathScore = document.createElement('div')
mathScore.setAttribute('class', 'scorediv')
divcontainer1.appendChild(mathScore)

plus = document.createElement('img')
plus.src = "images/icon-plus.svg"
plus.setAttribute('class', 'imgiconplus')
mathScore.appendChild(plus)

upVote2 = document.createElement('p')
upVote2.setAttribute('class', 'score')
mathScore.appendChild(upVote2)

minu = document.createElement('img')
minu.src = "images/icon-minus.svg"
minu.setAttribute('class', 'imgiconminus')
mathScore.appendChild(minu)

replyDiv = document.createElement('div')
divcontainer1.appendChild(replyDiv)
replyDiv.setAttribute('class', 'replyicondiv')

reply = document.createElement('img')
reply.src = "images/icon-reply.svg"
reply.setAttribute('class', 'arrow')
replyDiv.appendChild(reply)

replyText = document.createElement('p')
replyDiv.appendChild(replyText)
replyText.setAttribute('class', 'replytext')
replyText.textContent = 'Reply'

replycontainer1 = document.createElement('div')
replycontainer1.classList.add('container')
document.body.appendChild(replycontainer1)



divcontainer3 = document.createElement('div')
divcontainer3.classList.add('replycontainer1')
replycontainer1.appendChild(divcontainer3)

profilepic3 = document.createElement('img')
divcontainer3.appendChild(profilepic3)
profilepic3.setAttribute('class', 'img')

username3 = document.createElement('p')
divcontainer3.appendChild(username3)
username3.setAttribute('class', 'username')

date3 = document.createElement('p')
divcontainer3.appendChild(date3)
date3.setAttribute('class', 'replytime')


div3 = document.createElement('div')
replyUserone = document.createElement('span')
commentThree = document.createElement('p')
div3.appendChild(replyUserone)
div3.appendChild(commentThree)

divcontainer3.appendChild(div3)


div3.setAttribute('class', 'comment')
commentThree.setAttribute('class', 'ucomment')

replyUserone.setAttribute('class', 'userp')

mathScore = document.createElement('div')
divcontainer3.appendChild(mathScore)
mathScore.setAttribute('class', 'scorediv')

plus = document.createElement('img')
plus.src = "images/icon-plus.svg"
mathScore.appendChild(plus)
plus.setAttribute('class', 'imgiconplus')

upVote3 = document.createElement('p')
mathScore.appendChild(upVote3)
upVote3.setAttribute('class', 'score')

minu = document.createElement('img')
minu.src = "images/icon-minus.svg"
mathScore.appendChild(minu)
minu.setAttribute('class', 'imgiconminus')

replyDiv = document.createElement('div')
replyDiv.setAttribute('class', 'replyicondiv')
divcontainer3.appendChild(replyDiv)


reply = document.createElement('img')
reply.src = "images/icon-reply.svg"
reply.setAttribute('class', 'arrow')
replyDiv.appendChild(reply)

replyText = document.createElement('p')
replyDiv.appendChild(replyText)
replyText.setAttribute('class', 'replytext')
replyText.textContent = 'Reply'


divcontainer4 = document.createElement('div')
divcontainer4.classList.add('replycontainer2')
replycontainer1.appendChild(divcontainer4)

profilepic4 = document.createElement('img')
divcontainer4.appendChild(profilepic4)
profilepic4.setAttribute('class', 'img')



username4 = document.createElement('p')
divcontainer4.appendChild(username4)
username4.setAttribute('class', 'username')

let you = document.createElement('p')
divcontainer4.appendChild(you)
you.textContent = 'you'
you.setAttribute('class', 'you')

date4 = document.createElement('p')
divcontainer4.appendChild(date4)
date4.setAttribute('class', 'replytime')

div4 = document.createElement('div')
replyUsertwo = document.createElement('span')
commentFour = document.createElement('p')
div4.appendChild(replyUsertwo)
div4.appendChild(commentFour)

divcontainer4.appendChild(div4)


div4.setAttribute('class', 'comment')
commentFour.setAttribute('class', 'ucomment')

replyUsertwo.setAttribute('class', 'userp')


mathScore = document.createElement('div')
divcontainer4.appendChild(mathScore)
mathScore.setAttribute('class', 'scorediv')


plus = document.createElement('img')
plus.src = "images/icon-plus.svg"
mathScore.appendChild(plus)
plus.setAttribute('class', 'imgiconplus')


upVote4 = document.createElement('p')
mathScore.appendChild(upVote4)
upVote4.setAttribute('class', 'score')

minu = document.createElement('img')
minu.src = "images/icon-minus.svg"
minu.setAttribute('class', 'imgiconminus')
mathScore.appendChild(minu)



deleteDiv = document.createElement('div')
divcontainer4.appendChild(deleteDiv)
deleteDiv.setAttribute('class', 'deletediv')
//console.log(deleteDiv)


trash = document.createElement('img')
trash.src = "images/icon-delete.svg"
trash.setAttribute('class', 'deleteicon')


// if (divcontainer4.contains('deletediv')) {
//     console.log('e')
// }

trashText = document.createElement('p')
trashText.textContent = 'Delete'
trashText.setAttribute('class', 'deleteText')

deleteDiv.appendChild(trash)
deleteDiv.appendChild(trashText)

editDiv = document.createElement('div')
divcontainer4.appendChild(editDiv)
editDiv.setAttribute('class', 'editdiv')

edit = document.createElement('img')
edit.src = "images/icon-edit.svg"
edit.setAttribute('class', 'editIcon')

editText = document.createElement('p')
editText.textContent = 'Edit'
editText.setAttribute('class', 'editText')

editDiv.appendChild(edit)
editDiv.appendChild(editText)



// function firstComments() {
//     divcontainer = document.createElement('div')
//     divcontainer.classList.add('replycontainer')
//     document.body.appendChild(divcontainer)

//     profilepic1 = document.createElement('img')
//     profilepic1.setAttribute('class', 'img')
//     divcontainer.appendChild(profilepic1)

//     username = document.createElement('p')
//     username.setAttribute('class', 'username')
//     divcontainer.appendChild(username)

//     date1 = document.createElement('p')
//     date1.setAttribute('class', 'replytime')
//     divcontainer.appendChild(date1)

//     comment1 = document.createElement('p')
//     comment1.setAttribute('class', 'comment')
//     divcontainer.appendChild(comment1)

//     mathScore = document.createElement('div')
//     mathScore.setAttribute('class', 'scorediv')
//     divcontainer.appendChild(mathScore)

//     plus = document.createElement('img')
//     plus.src = "images/icon-plus.svg"
//     plus.setAttribute('class', 'imgiconplus')
//     mathScore.appendChild(plus)

//     upVote1 = document.createElement('p')
//     upVote1.setAttribute('class', 'score')
//     mathScore.appendChild(upVote1)

//     minu = document.createElement('img')
//     minu.src = "images/icon-minus.svg"
//     minu.setAttribute('class', 'imgiconminus')
//     mathScore.appendChild(minu)

//     replyDiv = document.createElement('div')
//     replyDiv.setAttribute('class', 'replyicondiv')
//     divcontainer.appendChild(replyDiv)

//     reply = document.createElement('img')
//     reply.src = "images/icon-reply.svg"
//     reply.setAttribute('class', 'arrow')
//     replyDiv.appendChild(reply)

//     replyText = document.createElement('p')
//     replyDiv.appendChild(replyText)
//     replyText.setAttribute('class', 'replytext')
//     replyText.textContent = 'Reply'

// }

// function secondComments() {
//     divcontainer1 = document.createElement('div')
//     divcontainer1.classList.add('replycontainer')
//     document.body.appendChild(divcontainer1)

//     profilepic2 = document.createElement('img')
//     profilepic2.setAttribute('class', 'img')
//     divcontainer1.appendChild(profilepic2)

//     username1 = document.createElement('p')
//     username1.setAttribute('class', 'username')
//     divcontainer1.appendChild(username1)

//     date2 = document.createElement('p')
//     date2.setAttribute('class', 'replytime')
//     divcontainer1.appendChild(date2)

//     comment2 = document.createElement('p')
//     comment2.setAttribute('class', 'comment')
//     divcontainer1.appendChild(comment2)

//     mathScore = document.createElement('div')
//     mathScore.setAttribute('class', 'scorediv')
//     divcontainer1.appendChild(mathScore)

//     plus = document.createElement('img')
//     plus.src = "images/icon-plus.svg"
//     plus.setAttribute('class', 'imgiconplus')
//     mathScore.appendChild(plus)

//     upVote2 = document.createElement('p')
//     upVote2.setAttribute('class', 'score')
//     mathScore.appendChild(upVote2)

//     minu = document.createElement('img')
//     minu.src = "images/icon-minus.svg"
//     minu.setAttribute('class', 'imgiconminus')
//     mathScore.appendChild(minu)

//     replyDiv = document.createElement('div')
//     divcontainer1.appendChild(replyDiv)
//     replyDiv.setAttribute('class', 'replyicondiv')

//     reply = document.createElement('img')
//     reply.src = "images/icon-reply.svg"
//     reply.setAttribute('class', 'arrow')
//     replyDiv.appendChild(reply)

//     replyText = document.createElement('p')
//     replyDiv.appendChild(replyText)
//     replyText.setAttribute('class', 'replytext')
//     replyText.textContent = 'Reply'


// }

// function firstReply() {
//     //container()
//     divcontainer3 = document.createElement('div')
//     divcontainer3.classList.add('replycontainer1')
//     Replycontainer.appendChild(divcontainer3)

//     profilepic3 = document.createElement('img')
//     divcontainer3.appendChild(profilepic3)
//     profilepic3.setAttribute('class', 'img')

//     username3 = document.createElement('p')
//     divcontainer3.appendChild(username3)
//     username3.setAttribute('class', 'username')

//     date3 = document.createElement('p')
//     divcontainer3.appendChild(date3)
//     date3.setAttribute('class', 'replytime')

    
//     div3 = document.createElement('div')
//     replyUserone = document.createElement('span')
//     commentThree = document.createElement('p')
//     div3.appendChild(replyUserone)
//     div3.appendChild(commentThree)
   
//     divcontainer3.appendChild(div3)

    
//     div3.setAttribute('class', 'comment')
//     commentThree.setAttribute('class', 'ucomment')
    
//     replyUserone.setAttribute('class', 'userp')

//     mathScore = document.createElement('div')
//     divcontainer3.appendChild(mathScore)
//     mathScore.setAttribute('class', 'scorediv')

//     plus = document.createElement('img')
//     plus.src = "images/icon-plus.svg"
//     mathScore.appendChild(plus)
//     plus.setAttribute('class', 'imgiconplus')

//     upVote3 = document.createElement('p')
//     mathScore.appendChild(upVote3)
//     upVote3.setAttribute('class', 'score')

//     minu = document.createElement('img')
//     minu.src = "images/icon-minus.svg"
//     mathScore.appendChild(minu)
//     minu.setAttribute('class', 'imgiconminus')

//     replyDiv = document.createElement('div')
//     replyDiv.setAttribute('class', 'replyicondiv')
//     divcontainer3.appendChild(replyDiv)


//     reply = document.createElement('img')
//     reply.src = "images/icon-reply.svg"
//     reply.setAttribute('class', 'arrow')
//     replyDiv.appendChild(reply)

//     replyText = document.createElement('p')
//     replyDiv.appendChild(replyText)
//     replyText.setAttribute('class', 'replytext')
//     replyText.textContent = 'Reply'


// }

// let Replycontainer

// function replyContainer() {
//  let   Replycontainer = document.createElement('div')
//     Replycontainer.classList.add('container')
//     document.body.appendChild(Replycontainer)


// }
// function secondReply() {
//     // container()
//     divcontainer4 = document.createElement('div')
//     divcontainer4.classList.add('replycontainer2')
//     Replycontainer.appendChild(divcontainer4)

//     profilepic4 = document.createElement('img')
//     divcontainer4.appendChild(profilepic4)
//     profilepic4.setAttribute('class', 'img')

    

//     username4 = document.createElement('p')
//     divcontainer4.appendChild(username4)
//     username4.setAttribute('class', 'username')

//     let you = document.createElement('p')
//     divcontainer4.appendChild(you)
//     you.textContent= 'you'
//     you.setAttribute('class', 'you')

//     date4 = document.createElement('p')
//     divcontainer4.appendChild(date4)
//     date4.setAttribute('class', 'replytime')

//     div4 = document.createElement('div')
//     replyUsertwo = document.createElement('span')
//     commentFour = document.createElement('p')
//     div4.appendChild(replyUsertwo)
//     div4.appendChild(commentFour)

//     divcontainer4.appendChild(div4)


//     div4.setAttribute('class', 'comment')
//     commentFour.setAttribute('class', 'ucomment')

//     replyUsertwo.setAttribute('class', 'userp')


//     mathScore = document.createElement('div')
//     divcontainer4.appendChild(mathScore)
//     mathScore.setAttribute('class', 'scorediv')


//     plus = document.createElement('img')
//     plus.src = "images/icon-plus.svg"
//     mathScore.appendChild(plus)
//     plus.setAttribute('class', 'imgiconplus')


//     upVote4 = document.createElement('p')
//     mathScore.appendChild(upVote4)
//     upVote4.setAttribute('class', 'score')

//     minu = document.createElement('img')
//     minu.src = "images/icon-minus.svg"
//     minu.setAttribute('class', 'imgiconminus')
//     mathScore.appendChild(minu)



//     deleteDiv = document.createElement('div')
//     divcontainer4.appendChild(deleteDiv)
//     deleteDiv.setAttribute('class', 'deletediv')
// //console.log(deleteDiv)




//     trash = document.createElement('img')
//     trash.src = "images/icon-delete.svg"
//     trash.setAttribute('class', 'deleteicon')
    

//     trash.addEventListener('click', e => {
//         e.preventDefault()
//         if (e.target.classList.contains('deleticon')) {
//             console.log('e')
//         }

//     });

//     trashText = document.createElement('p')
//     trashText.textContent = 'Delete'
//     trashText.setAttribute('class', 'deleteText')

//     deleteDiv.appendChild(trash)
//     deleteDiv.appendChild(trashText)

//     editDiv = document.createElement('div')
//     divcontainer4.appendChild(editDiv)
//     editDiv.setAttribute('class', 'editdiv')

//     edit = document.createElement('img')
//     edit.src = "images/icon-edit.svg"
//     edit.setAttribute('class', 'editIcon')

//     editText = document.createElement('p')
//     editText.textContent = 'Edit'
//     editText.setAttribute('class', 'editText')

//     editDiv.appendChild(edit)
//     editDiv.appendChild(editText)

// }


function currentUser() {
    divcontainer5 = document.createElement('div')
    divcontainer5.setAttribute('class','replycontainer5')
    document.body.appendChild(divcontainer5)
    
    inputComment = document.createElement('input')
    inputComment.placeholder = 'Add a coment...'
    inputComment.setAttribute('class', 'usercomment')
    divcontainer5.appendChild(inputComment)
    profilepic5 = document.createElement('img')
    divcontainer5.appendChild(profilepic5)
    
    sendButton = document.createElement('button')
    sendButton.textContent = 'SEND'
    divcontainer5.appendChild(sendButton)
    // console.log(sendButton)
}
//ner().then(inf0 => console.log('resolved:', console.log(inf0)))

let arr = []; let arr1 = []
ner().then(inf0 => {
    inf0.comments.forEach(element => {
        arr.push(element.user.image.png)
    });
  //  console.log(arr)
    // firstComments()
    // secondComments()
    //let [one, two] = arr
    profilepic1.src = arr[0]
    profilepic2.src = arr[1]

    inf0.comments.forEach(element => {
        arr1.push(element.user.username)
    });
    //console.log(arr1)

    let [firstName, secondName] = arr1
    username.textContent = firstName
    username1.textContent = secondName

    let dateArr = []

    inf0.comments.forEach(element => {
        dateArr.push(element.createdAt)
    });
    //console.log(dateArr)
    let [firstdate, seconddate] = dateArr
    date1.textContent = firstdate
    date2.textContent = seconddate

    let contentArr = []

    inf0.comments.forEach(element => {
        contentArr.push(element.content)
    });
    //console.log(contentArr)
    let [firstComment, secondComment] = contentArr
    comment1.innerHTML = firstComment
    comment2.textContent = secondComment

    let scoreArr = []

    inf0.comments.forEach(element => {
        scoreArr.push(element.score)
    });
    //console.log(scoreArr)
    let [firstScore, secondScore] = scoreArr
    upVote1.textContent = firstScore
    upVote2.textContent = secondScore

    let replyArr = []
    inf0.comments.forEach(element => (element.replies).forEach(element => replyArr.push(element.user.image.png)))
    // console.log(replyArr)

    //replyContainer()
    // firstReply()
    // secondReply()

    profilepic3.src = replyArr[0]
    profilepic4.src = replyArr[1]

    let repliesUsername = []
    inf0.comments.forEach(element => (element.replies).forEach(element => repliesUsername.push(element.user.username)))
    username3.textContent = repliesUsername[0]
    username4.textContent = repliesUsername[1]


    let dateArr1 = []
    inf0.comments.forEach(element => (element.replies).forEach(element => dateArr1.push(element.createdAt)))
    date3.textContent = dateArr1[0]
    date4.textContent = dateArr1[1]

    let replyingTo = []
    inf0.comments.forEach(element => (element.replies).forEach(element => replyingTo.push(element.replyingTo)))
    replyUserone.textContent = `@${replyingTo[0]}`
    replyUsertwo.textContent = `@${replyingTo[1]}`
   

    let contentReply = []
    inf0.comments.forEach(element => (element.replies).forEach(element => contentReply.push(element.content)))
    commentThree.textContent = contentReply[0]
    commentFour.textContent = contentReply[1]

    let replyScore = []
    inf0.comments.forEach(element => (element.replies).forEach(element => replyScore.push(element.score)))

    upVote3.textContent = replyScore[0]
    upVote4.textContent = replyScore[1]

    currentUser()
    profilepic5.src = inf0.currentUser.image.png
    //console.log(inf0.currentUser.image.png)
    //.forEach(element => (element.replies).forEach(element => replyScore.push(element.score)))
   

}
)

// deleteDiv.addEventListener('click', e => {
//     e.preventDefault()
//     //console.log('e')
//     if (e.target.classList.contains('deletediv')) {
//         //console.log('e')
//         e.target.parentElement.remove()
//     }

// });