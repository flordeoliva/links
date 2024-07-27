function openDialog() {
    let testdialog = document.getElementById('testdialog')
    testdialog.show()
}

function changeTheme(theme) {
    document.querySelector("#theme").href = "css/" + theme + "/theme.css";
}