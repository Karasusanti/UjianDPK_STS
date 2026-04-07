function login() {
    let name = document.getElementById("username").value.trim();
    let name = document.getElementById("alamat").value.trim();
    let name = document.getElementById("umur").value.trim();


    if (name === "") {
        alert("Masukkan nama dulu");
        return;
    }

    localStorage.setItem("user", name);

    window.location.href = "dashboard.html";
}

function handleEnter(e) {
    if (e.key === "Enter") {
        login();
    }
}
