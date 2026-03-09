const form = document.getElementById("uploadForm");

form.addEventListener("submit", async function(e){

e.preventDefault();

let image = document.getElementById("image").files[0];
let video = document.getElementById("video").files[0];

if(!image || !video){
alert("Please upload both image and video");
return;
}

let formData = new FormData();

formData.append("image", image);
formData.append("video", video);

document.getElementById("result").innerHTML = "Uploading... please wait";

try{

let response = await fetch("https://script.google.com/macros/s/AKfycbzMRQIOX9qKilEEoh7EiDGejpk0cZ7elhy92fQqQxIoMyyBQdyjczhAucttK_u2A_YC/exec",{
method:"POST",
body:formData
});

let data = await response.json();

document.getElementById("result").innerHTML = `
<p><strong>Your AR Link</strong></p>
<a href="${data.link}" target="_blank">${data.link}</a>

<p><strong>Scan QR Code</strong></p>
<img src="${data.qr}">
`;

}catch(error){

document.getElementById("result").innerHTML = "Error generating AR gift.";

}

});