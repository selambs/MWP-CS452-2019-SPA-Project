window.onload = myPage;
function myPage() {
    const outlet = document.querySelector("#outlet");
    let myToken, display;


    //to log in to the page when we click the login button and the animation page will apear
    const loginPage = `<div> 
    <h2>Please Login Here</h2>
    User Name: <input type="text" id="userName" placeholder="mwp" value="mwp"> <br>
    Password: <input type="text" id="passWord" placeholder="123" value="123">
    <button id="toLogin" >LogIn</button>
    </div>`
    outlet.innerHTML = loginPage;

    // let xmass=`<img src="x.webp">`
    // outlet.innerHTML = xmass;

    let loginBtn = document.getElementById("toLogin")
    loginBtn.addEventListener("click", login);

    //after we login the animation page will apear when we click the login button
    const animationPage = `<div>
        <h2 id="greet"></h2>
        <textarea id="animateIt" rows="25" cols="60"> </textarea><br>
        <button id="toAnimate">Refresh Animation</button>
        <button id="toLogout">LogOut</button>
        </div>`

    function login() {
        //when we login the animation page will apear with refresh and logout button  
        outlet.innerHTML = animationPage;
        togetLocation();
        fetchToken();
        fetchAnimation();

        let animationBtn = document.getElementById("toAnimate");
        animationBtn.addEventListener("click", fetchAnimation);

        let logOutBtn = document.getElementById("toLogout");
        logOutBtn.addEventListener("click", logOut);
    }


    //to find the location whereever we go 
    function togetLocation() {
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            let locationURL = `http://www.mapquestapi.com/geocoding/v1/reverse?key=CPGaa6cjsTFg0WWn33Wt53bH2n2l0TvQ&location=${lat},${long}&includeRoadMetadata=true&includeNearestIntersection=true`;
            fetch(locationURL)
                .then((res) => res.json())
                .then((position) => {
                    let city = position.results[0].locations[0].adminArea5;
                    let state = position.results[0].locations[0].adminArea3;
                    let country = position.results[0].locations[0].adminArea1;
                    let getLocation = document.getElementById("greet");
                    getLocation.innerHTML = `Welcome all from ${city}, ${state}, ${country}`;
                });
        });
    }

    //to fetch the token from the given url and i will get the token after i fetch.
    myToken = `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtd2EiLCJpc3N1ZWRBdCI6IjIwMTktMTEtMjciLCJ1c2VybmFtZSI6Im13cCJ9.U9ciwh5lcPwFlJdxhNQkeiMc7AMYAnawfKNidw8CNDpTIUjNBL_EtDqkXG4qGOF8H_Ve1S2Gg2PwmCYOkfgmWA`
    function fetchToken() {
        const URL = `http://mumstudents.org/api/login `
        fetch(URL, {
            method: "POST",
            headers: { "content-type": 'application/json' },
            body: JSON.stringify({
                "username": "mwp",
                "password": "123"
            })
        })
            .then((res) => res.json())
            .then(data => data.token)
    };


    //to get all the animations when we log in to the page
    function fetchAnimation() {
        const animationURL = `http://mumstudents.org/api/animation `
        fetch(animationURL, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${myToken}`
            }
        })
            .then((res) => res.text())
            .then(data => {
                //console.log(data)
                let animations= data.split('=====\n');
              
               
            });
    };



    //to logout from the page when we click the logout button
    function logOut() {
        outlet.innerHTML = loginPage;

        let loginBtn = document.getElementById("toLogin")
        loginBtn.addEventListener("click", login);
    }

};
