window.onload = function () {
    document.getElementById("cancel").onclick = function () {
        cancel();
    }

    document.getElementById("signUp").onclick = function () {
        signUp();
    }

};


function signUp() {
    document.getElementById("registracia").innerHTML = `
        <label>Name     <input id = "name" type="text"></label></br>
        <label>Login    <input id = "rLogin" type="text"></label></br>
        <label>Password <input id = "rPassword" type="password"></label></br>
                  <button type="button" id="reg">    Sign up    </button>
        `

    // alert("aa")

    let xml = new XMLHttpRequest();

    xml.open('GET', 'http://localhost:8012');
    xml.send();


    xml.onload = () => {
        let p = xml.responseText;
        p = p.slice(2, p.length - 2);
        let arr = p.split('","');
        document.getElementById("usersNames").innerHTML = '';
        for (let i of arr) {
            // document.getElementById("usersNames").innerHTML += `<div id = ${i}>               ${i} </div>` + `${'</br>'}`;
            document.getElementById("usersNames").innerHTML += `<div id = ${i}>               ${i} </div>`;
            // document.getElementById(id).onclick = funct(name);
        }

        reg();

    }

    function funct(name) {
        alert(name);
    }



    function reg() {
        document.getElementById("reg").onclick = function () {
            let name = document.getElementById("name").value;
            document.getElementById("name").value = "";
            let password = document.getElementById("rPassword").value;
            document.getElementById("rPassword").value = "";
            let login = document.getElementById("rLogin").value;
            document.getElementById("rLogin").value = "";
            if (name && password && login) {
                let obj = {
                    "login": login,
                    "password": password,
                    "name": name
                };
                console.log(obj.password + ", " + obj.name + ", " + obj.login);
                xml.open('POST', 'http://localhost:8012');
                xml.setRequestHeader('Content-Type', 'application/json')
                xml.send(JSON.stringify(obj));

                xml.onload = () => {
                    signUp()
                }

            }
        }
    }


}


function cancel() {
    document.getElementById("login").value = "";
    document.getElementById("password").value = "";
}
