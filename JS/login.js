function login() {
    let username = document.getElementById("username").value.trim();
    let alamat = document.getElementById("alamat").value.trim();
    let umur = document.getElementById("umur").value.trim();

    if (username === "" || alamat === "" || umur === "") {
        alert("Semua data harus diisi!");
        return;
    }

    // simpan ke localStorage
    localStorage.setItem("user", username);
    localStorage.setItem("alamat", alamat);
    localStorage.setItem("umur", umur);

    window.location.href = "dashboard.html";
}
function handleEnter(e) {
    if (e.key === "Enter") {
        login();
    }
}
