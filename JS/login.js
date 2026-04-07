function login() {
    let name = document.getElementById("username").value.trim();

    if (name === "") {
        alert("Masukkan nama dulu");
        return;
    }

    localStorage.setItem("user", name);

    window.location.href = "../index.html";
}

function handleEnter(e) {
    if (e.key === "Enter") {
        login();
    }
}
