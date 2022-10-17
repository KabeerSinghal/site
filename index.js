let count;
let i = 0;
let c;

let start = () => {
    count = document.getElementById("Number");
    if (!document.cookie == ""){
        c = document.cookie;
        c = c.slice(6);
        console.log(c);
        i = parseInt(c);
    } else {
        i = 0;
    }
    count.innerHTML = i;
    document.cookie = "count="+i+"; expires=Thu, 18 Dec 2032 12:00:00 UTC; SameSite=None; Secure";
}

window.onload = start;

let update = (k) => {
    count.innerHTML = k;
    document.cookie = "count="+i+"; expires=Thu, 18 Dec 2032 12:00:00 UTC; SameSite=None; Secure";
}

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }

    switch (event.key) {
        case "ArrowDown":
            i-= 1;
            update(i);

            break;
        case "ArrowUp":
            i+= 1;
            update(i);
            break;
        default:
            return;
    }
    event.preventDefault();
}, true);
