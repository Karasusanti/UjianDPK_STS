function login() {
    let username = document.getElementById("username").value.trim();
    let alamat = document.getElementById("alamat").value.trim();
    let umur = document.getElementById("umur").value.trim();

    if (username === "" || alamat === "" || umur === "") {
        alert("Semua data harus diisi!");
        return;
    }

    localStorage.setItem("user", username);
    localStorage.setItem("alamat", alamat);
    localStorage.setItem("umur", umur);

    localStorage.setItem("page", "dashboard");

    window.location.href = "dashboard.html";
}

