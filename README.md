# Frontend Mentor - Interactive comments section solution

This is a solution to the [Interactive comments section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, Read, Update, and Delete comments and replies
- Upvote and downvote comments
- **Bonus**: If you're building a purely front-end project, use `localStorage` to save the current state in the browser that persists when the browser is refreshed.
- **Bonus**: Instead of using the `createdAt` strings from the `data.json` file, try using timestamps and dynamically track the time since the comment or reply was posted.

### Screenshot

![mobile](index.html(iPhone6_7_8).png)
![desktop](index.html(NestHubMax)(1).png)

### Links

- Solution URL: (https://github.com/ibimina/interactive-comments-section-main)
- Live Site URL:(https://ibimina.github.io/interactive-comments-section-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned
- DOM Manipulation
- Event delegation

### Proud of this
 function to display delete warning message

```js


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
```
function to display comment box when the reply arrow icon or reply text is clicked

```js
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
```


function to display editbox innerHtml when the edit icon or edit text is clicked
```js
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
```
## Author

- Ibimina hart
- Frontend Mentor - [@ibimina](https://www.frontendmentor.io/profile/yourusername)

