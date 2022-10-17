let email;
let pass;
let eta;
let nome;

document.querySelector("#btn-login").addEventListener("click", e => {
    e.preventDefault;
    email = document.querySelector("#email").value;
    pass = document.querySelector("#password").value;
    login();
})


async function login() {

    try {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let dataForm = JSON.stringify({
            "email": email,
            "password": pass
        });

        let resp = await fetch("https://api-nodejs-todolist.herokuapp.com/user/login", {
            method: 'POST',
            headers: myHeaders,
            body: dataForm,
            redirect:"follow"
        });
        let result = await resp.json();
        let token = result.token;
        console.log(result);  //To show token in console
        sessionStorage.setItem("token", token);
        window.location.href=`${window.location.origin}/Hacking-week-4/html/logout-form.html`;
    } catch (err) {
        console.log(err);
    }
}

