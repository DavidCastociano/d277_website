function check() {
    if (document.getElementById("email").value !== document.getElementById("confirm-email").value) {
        alert("Emails don’t match!");
        return false;
    } else {
        alert("emails match!")
    }
}