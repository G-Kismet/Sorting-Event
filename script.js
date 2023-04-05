// 
// Main Page
// 

let rootDiv = document.getElementById('root')
let startDiv = document.getElementById('start')
let gryfBtn = document.getElementById('chaoticGood');
let slyBtn = document.getElementById('chaoticEvil');
let huffBtn = document.getElementById('lawfulGood');
let ravBtn = document.getElementById('lawfulEvil');

let gryfPicture = document.querySelector('img');
let slyPicture = document.querySelector('img');
let huffPicture = document.querySelector('img');
let ravPicture = document.querySelector('lawfulEvil');


gryfBtn.addEventListener('click', switchToLight);
slyBtn.addEventListener('click', switchToDark);
huffBtn.addEventListener('click', switchToPeace);
ravBtn.addEventListener('click', switchToExcel);

// Creates Chaotic Good Story

let gryfStory = document.createElement('div');
let gryfStoryHeader = document.createElement('h3');
let gryfStoryContent = document.createElement('p');
let gryfStoryButton = document.createElement('button');

gryfStory.appendChild(gryfStoryHeader);
gryfStory.appendChild(gryfStoryContent);
gryfStory.appendChild(gryfStoryButton);
gryfStoryButton.setAttribute('type', 'button');
gryfStoryButton.addEventListener('click', switchFromLight);
gryfPicture.style.backgroundImage="url('./images/gryffindor-wallpapers.png')"
gryfStoryButton.innerText = "don't be afraid..."

// function changeToGryf() {
//     gryfPicture.style.backgroundImage="url('./images/gryffindor-wallpapers.png')"
// }

// Creates Chaotic Evil Story

let slyStory = document.createElement('div');
let slyStoryHeader = document.createElement('h3');
let slyStoryContent = document.createElement('p');
let slyStoryButton = document.createElement('button');

slyStory.appendChild(slyStoryHeader);
slyStory.appendChild(slyStoryContent);
slyStory.appendChild(slyStoryButton);
slyStoryButton.setAttribute('type', 'button');
slyStoryButton.addEventListener('click', switchFromDark);
slyStoryButton.innerText = "fear not..."
//
//Creates Lawful Good Story

let huffStory = document.createElement('div');
let huffStoryHeader = document.createElement('h3');
let huffStoryContent = document.createElement('p');
let huffStoryButton = document.createElement('button');

huffStory.appendChild(huffStoryHeader);
huffStory.appendChild(huffStoryContent);
huffStory.appendChild(huffStoryButton);
huffStoryButton.setAttribute('type', 'button');
huffStoryButton.addEventListener('click', switchFromPeace);
huffStoryButton.innerText = "don't be afraid..."


//Creates Lawful Evil Story

let ravStory = document.createElement('div');
let ravStoryHeader = document.createElement('h3');
let ravStoryContent = document.createElement('p');
let ravStoryButton = document.createElement('button');

ravStory.appendChild(ravStoryHeader);
ravStory.appendChild(ravStoryContent);
ravStory.appendChild(ravStoryButton);
ravStoryButton.setAttribute('type', 'button');
ravStoryButton.addEventListener('click', switchFromExcel);
ravStoryButton.innerText = "don't be afraid..."

function backgroundImage() {
    Excellence.style.backgroundImage="url('./images/ravenclaw-wallpapers.png')"
}

function switchFromStart() {
    startDiv.setAttribute('class', 'start hide');
};

//

function switchToLight() {
    rootDiv.appendChild(gryfStory);
    switchFromStart();
}

function switchToDark() {
    rootDiv.appendChild(slyStory);
    switchFromStart();
}
function switchToPeace() {
    rootDiv.appendChild(huffStory);
    switchFromStart();
}
function switchToExcel() {
    rootDiv.appendChild(ravStory);
    switchFromStart();
}

function switchFromLight() {
    gryfStory.setAttribute('class', 'hide');
    startDiv.setAttribute('class', 'start');
}

function switchFromDark() {
    slyStory.setAttribute('class', 'hide');
    startDiv.setAttribute('class', 'start');
}
function switchFromPeace() {
    huffStory.setAttribute('class', 'hide');
    startDiv.setAttribute('class', 'start');
}

function switchFromExcel() {
    ravStory.setAttribute('class', 'hide');
    startDiv.setAttribute('class', 'start');
}

// 
// 
// 

gryfStoryHeader.innerHTML = `You are a Gryffindor`
gryfStoryContent.innerHTML = `Bravery and boldness will lead the way...your adventure has begun`


slyStoryHeader.innerHTML = `You are a Slytherin!`
slyStoryContent.innerHTML = `Power is at your fingertips...dominate the world.`


huffStoryHeader.innerHTML = `You are a Hufflepuff.`
huffStoryContent.innerHTML = `Kindness will lead the way to peace.`


ravStoryHeader.innerHTML = `You are a Ravenclaw.`
ravStoryContent.innerHTML = `Excellence is at your fingertips...enlight the world.`
