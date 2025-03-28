function switch_darkmode(todarkmode = localStorage.getItem("darkmode") !== "active") {
    if(todarkmode) {
        document.body.setAttribute("class", "darkmode");
        localStorage.setItem("darkmode", "active");
    }
    else {
        document.body.removeAttribute("class");
        localStorage.setItem("darkmode", "inactive");
    }
}

function main() {
    let darkmode_btn = document.getElementById("darkmode_btn");
    darkmode_btn.addEventListener("click", () => {
        switch_darkmode();
    });
    darkmodestatus = localStorage.getItem("darkmode");
    switch_darkmode(
        darkmodestatus === "active" || (
            darkmodestatus == undefined && matchMedia("(prefers-color-scheme: dark)").matches
        )
    );
}

main();