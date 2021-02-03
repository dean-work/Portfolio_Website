//"./Images/Profile.jfif"

let formal = "./Images/Profile.jfif";
let casual = "./Images/Profile_Casual.jpeg";

function changeImage() {
    let img = document.getElementById("profile_image");
    let new_img = (img.src.includes("Casual")) ? formal : casual;
    img.src = new_img;
};
