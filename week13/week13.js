function setup() {
    initializeFields();
    createCanvas(300, 300);
    fill(color(0xBE, 0xDD, 0xF5));
    textSize(50);
    textAlign(CENTER, CENTER);
}

// -1沒選, 0,1,2有選
var choice;

function draw() {
    background(color(0xF5, 0xBE, 0xBE));
    text("Dinner 1", 150, 50);
    text("Dinner 2", 150, 150);
    text("Dinner 3", 150, 250);
    if (choice == 0)
        ellipse(30, 50, 50, 50);
    if (choice == 1)
        ellipse(30, 150, 50, 50);
    if (choice == 2)
        ellipse(30, 250, 50, 50);
}

function mousePressed() {
    // 取出整數0,1,2
    choice = int(random(3));
}

// 會在0.00~2.99(不包括3.0)
function initializeFields() {
    choice = -1;
}
