getUser();

document.querySelector("#btn-logout").addEventListener("click", e => {
    e.preventDefault;
    email = document.querySelector("#email").value;
    nome = document.querySelector("#name").value;
    age = document.querySelector("#age").value;
    logout();
})


async function getUser() {
    console.log(sessionStorage.getItem("token"));
    try {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${sessionStorage.getItem("token")}`);
        
        let resp = await fetch("https://api-nodejs-todolist.herokuapp.com/user/me", {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        });
        let result = await resp.json();
         document.querySelector("#email").value=result.email;
         document.querySelector("#name").value=result.name;
         document.querySelector("#age").value=result.age;
    } catch (err) {
        console.log(err);
    }
}

async function logout() {
    try {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${sessionStorage.getItem("token")}`);
        
        let resp = await fetch("https://api-nodejs-todolist.herokuapp.com/user/logout", {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        });
        let result = await resp.json();
        sessionStorage.clear("token");
        window.location.href=`${window.location.origin}/Hacking-week-4/html/login-form.html`;
    } catch (err) {
        console.log(err);
    }
}

