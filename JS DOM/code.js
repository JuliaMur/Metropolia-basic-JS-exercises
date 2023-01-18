// Tee tehtävät tähän tiedostoon!

// 1 

document.getElementsByTagName("h1")[0].innerHTML = "Pony Land";

// 2

document.getElementsByClassName("profile")[0].src = "pony.png";

// 3

let a;
document.getElementById("img-button").onclick = function() {
    if (a == 1) {
        document.getElementsByClassName("profile")[0].style.display = "inline";
        return (a = 0);
    } else {
        document.getElementsByClassName("profile")[0].style.display = "none";
        return (a = 1);
    }
}

// 4

const newList = ['Sleep', 'Read', 'Smile'];
function replaceList() {
    const newListDiv = document.querySelector(".hobbies");
    newListDiv.innerHTML = '';
    const replaceList = document.createElement('ol');
    for (let i=0; i<newList.length; i++) {
        const newListItem = document.createElement('li');
        newListItem.innerText = newList[i];
        replaceList.appendChild(newListItem)
    }
    newListDiv.appendChild(replaceList)
}
replaceList();

// 5

function addNode() {
    let newP = document.createElement("p");
    let textNode = document.createTextNode("About pony : A pony is a small horse (Equus ferus caballus). Depending on the context, a pony may be a horse that is under an approximate or exact height at the 14.2hh withers, or a small horse with a specific conformation and temperament. Compared to a larger horse, a pony may have a thicker coat, mane and tail, with proportionally shorter legs, a wider barrel, heavier bone, a thicker neck and a shorter, broader head. The word pony derives from the old French poulenet, meaning foal, a young, immature horse.");
    newP.appendChild(textNode);
    document.getElementsByClassName("more-info")[0].appendChild(newP);
}
addNode();

// 6

let oldName = document.getElementById("creator").innerHTML;
document.getElementById("creator").innerHTML = oldName.replace("opettaja", "Julia.");