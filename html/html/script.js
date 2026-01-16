let firstJoin = false;
let introPhase = false;

const audio = document.getElementById("bgm");
const progress = document.querySelector(".progress");

window.addEventListener("message", e => {
    if (e.data.type === "introStatus") {
        firstJoin = e.data.firstJoin;
        introPhase = firstJoin;
        if (!firstJoin) document.body.classList.add("skip-intro");
    }
});

function subBassGate(value) {
    if (!introPhase || !firstJoin) return;
    if (value > 170) {
        introPhase = false;
        document.body.classList.add("subbass-shake");
        setTimeout(() => {
            document.body.classList.remove("subbass-shake");
            document.body.classList.add("gate-open");
            setTimeout(shutdown, 900);
        }, 400);
    }
}

function shutdown() {
    audio.volume = 0;
    fetch(`https://${GetParentResourceName()}/shutdown`, { method: "POST" });
}
