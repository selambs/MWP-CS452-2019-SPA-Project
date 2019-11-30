window.onload = myPage;
function myPage() {
    const outlet = document.querySelector("#outlet");

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
        //when we login the animation page will apear  
        outlet.innerHTML = animationPage;
        togetLocation()

        // let animationBtn = document.getElementById("");
        // animationBtn.addEventListener("click", nextAnimation);

        let logOutBtn = document.getElementById("toLogout");
        logOutBtn.addEventListener("click", logOut);
    }


    //to find the location 

    // function togetLocation() {
    //     let city;
    //     let state;
    //     let country;
    //     let getLocation = document.getElementById("greet");
    //     // navigator.geolocation.getCurrentPosition(function (position) {
    //     //     let lat = position.coords.latitude;
    //     //     let long = position.coords.longitude;
    //     //     console.log(lat, long);
    //     // })
    //     navigator.geolocation.getCurrentPosition(function (position) {
    //         const lat = position.coords.latitude;
    //         const long = position.coords.longitude;
    //         let locationURL = `http://www.mapquestapi.com/geocoding/v1/reverse?key=CPGaa6cjsTFg0WWn33Wt53bH2n2l0TvQ&location=${lat},${long}&includeRoadMetadata=true&includeNearestIntersection=true`;
    //         fetch(locationURL)
    //             .then((res) => res.json())
    //             .then((position) => {
    //                 //position.forEach(function (location) {
    //                     // console.log(city += `${location.results[0].locations[0].adminArea5}`)
    //                     // console.log(state += `${location.results[0].locations[0].adminArea3}`)
    //                     // console.log(country += `${location.results[0].locations[0].adminArea1}`);
    //                     console.log (city=position.results[0].locations[0].adminArea5)
    //                     console.log (state=position.results[0].locations[0].adminArea3)
    //                     console.log (country=position.results[0].locations[0].adminArea1)
    //                 });
    //             //});
    //     });

    //     getLocation.innerHTML = `Welcome all from ${city},${state},${country}`;
    // }
    function togetLocation() {


        // navigator.geolocation.getCurrentPosition(function (position) {
        //     let lat = position.coords.latitude;
        //     let long = position.coords.longitude;
        //     console.log(lat, long);
        // })
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

                    //         let getLocation = document.getElementById("greet");
                    // let get = `Welcome all from ${city},${state},${country}`;
                    // getLocation.innerHTML = get;
                    let getLocation = document.getElementById("greet");
                    getLocation.innerHTML = `Welcome all from ${city},${state},${country}`;
                });

        });


    }







    //let myId="CPGaa6cjsTFg0WWn33Wt53bH2n2l0TvQ",


    //to refresh all the animations when we click the Refresh Animation button
    function nextAnimation() {

    }




    //to logout from the page when we click the logout button
    function logOut() {
        outlet.innerHTML = loginPage;
    }

};
