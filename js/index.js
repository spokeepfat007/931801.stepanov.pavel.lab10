const cells = document.getElementById("cells")

cells.addEventListener('mouseover', up);
cells.addEventListener('mouseout', down)
let c = 0;

function up() {
    let start = Date.now();
    let h = cells.offsetHeight;
    h = h / 20;
    let timer = setInterval(function () {
        let timePassed = Date.now() - start;

        cells.style.bottom = timePassed / 40 + '%';

        if (timePassed > 200) clearInterval(timer);

    }, 0);
    cells.onclick = function () {
        c = 1;
        let start = Date.now();
        let timer = setInterval(function () {
            let timePassed = Date.now() - start;

            cells.style.bottom = timePassed / 10 + '%';

            if (timePassed > 1000) clearInterval(timer);

        }, 20);
    }
}

function down() {
    if (c !== 1) {
        let start = Date.now();

        let timer = setInterval(function () {
            let timePassed = Date.now() - start;
            cells.style.bottom = 5 - timePassed / 40 + '%';
            if (timePassed >= 200) clearInterval(timer);
        }, 20);
    }
};


var canvas = document.getElementById("myCanvas"),
    context = canvas.getContext("2d");
let a = 0;
let glad = document.getElementsByClassName("pozhiloy")[0];
let dove = document.getElementsByClassName("dove")[0];
const topper = document.getElementsByClassName("top")[0];
topper.addEventListener('mousedown', function () {
    let start = Date.now();
    let bibka = document.getElementsByClassName("bubyrka")[0]
    let timer = setInterval(function () {
        let timePassed = Date.now() - start;
        bibka.style.top = 5 + timePassed / 50 + '%';
        if (timePassed >= 100) clearInterval(timer);

    }, 20);
})
topper.addEventListener('mouseup', function () {
    let start = Date.now();
    let bibka = document.getElementsByClassName("bubyrka")[0]
    let timer = setInterval(function () {
        let timePassed = Date.now() - start;
        bibka.style.top = 7 - timePassed / 50 + '%';
        if (timePassed >= 100) clearInterval(timer);
    }, 20);
})
let b = 0;
topper.addEventListener('click', function () {
    console.log(b);
    if (b === 0) {
        vkl();
        document.getElementsByClassName("dove")[0].style.display = "block";
        document.getElementsByClassName("girl")[0].style.display = "block";
        document.getElementsByClassName("pozhiloy")[0].style.display = "block";
        document.getElementsByClassName("hat")[0].style.display = "block";
        document.getElementById("block").style.display = "block";
        b = 1;
    } else {
        vikl();
        document.getElementsByClassName("dove")[0].style.display = "none";
        document.getElementsByClassName("girl")[0].style.display = "none";
        document.getElementsByClassName("pozhiloy")[0].style.display = "none";
        document.getElementsByClassName("hat")[0].style.display = "none";
        document.getElementById("block").style.display = "none";
        dove.style.bottom = 18 + "%";
        glad.style.bottom = 18 + "%";
        b = 0;
    }
})

function vkl() {
    let start = Date.now();
    let timer = setInterval(function () {
        let timePassed = Date.now() - start;
        context.clearRect(0, 0, 500, 400);
        context.beginPath();
        context.moveTo(250, -20);
        context.lineTo(60, 400);
        context.lineTo(440, 400);
        context.strokeStyle = 'rgba(' + 217 + ',' + 208 + ',' + 87 + ', ' + timePassed / 4000 + ')';
        context.fillStyle = 'rgba(' + 217 + ',' + 208 + ',' + 87 + ', ' + timePassed / 4000 + ')';
        context.closePath();
        context.fill();
        context.stroke();
        if (timePassed >= 2000) clearInterval(timer);
    }, 0);
};


function vikl() {
    let start = Date.now();
    let timer = setInterval(function () {
        let timePassed = Date.now() - start;
        context.clearRect(0, 0, 500, 400);
        context.beginPath();
        context.moveTo(250, -20);
        context.lineTo(60, 400);
        context.lineTo(440, 400);
        let bob = 0.5 - timePassed / 4000;
        context.strokeStyle = 'rgba(' + 217 + ',' + 208 + ',' + 87 + ', ' + bob + ')';
        context.fillStyle = 'rgba(' + 217 + ',' + 208 + ',' + 87 + ', ' + bob + ')';
        console.log(0.5 - timePassed / 4000);
        context.closePath();
        context.fill();
        context.stroke();

        if (timePassed >= 2000) {
            clearInterval(timer);
            context.clearRect(0, 0, 500, 400);
        }
        ;
    }, 0);
}

document.getElementById("block").addEventListener('click', function () {
    if (a === 0) {
        glad.style.bottom = 18 + "%";
        pigeon();
        a = 1;
    } else {
        dove.style.bottom = 18 + "%"
        zayac();
        a = 0;
    }
});

function zayac() {
    let start = Date.now();
    let timer = setInterval(function () {
        let timePassed = Date.now() - start;
        glad.style.bottom = 18 + timePassed / 10 + '%';
        if (timePassed >= 200) clearInterval(timer);
    }, 20);
}

function pigeon() {
    let start = Date.now();
    let timer = setInterval(function () {
        let timePassed = Date.now() - start;
        dove.style.bottom = 18 + timePassed / 10 + '%';
        if (timePassed >= 200) clearInterval(timer);
    }, 20);
}