
let homeScore = document.getElementById("home-score")
let visitorScore = document.getElementById("visitor-score")

let points = 0

function addOneHome() {
    points += 1
    homeScore.textContent = points
}
function addTwoHome() {
    points += 2
    homeScore.textContent = points
}
function addThreeHome() {
    points += 3
    homeScore.textContent = points
}

function addOneVisitor() {
    points += 1
    visitorScore.textContent = points
}
function addTwoVisitor() {
    points += 2
    visitorScore.textContent = points
}
function addThreeVisitor() {
    points += 3
    visitorScore.textContent = points
}