const form = document.getElementById("uploadForm");

form.addEventListener("submit", async function(e) {

e.preventDefault();

const image = document.getElementById("image").files[0];
const video = document.getElementById("video").files[0];

if (!image || !video) {
alert("Please upload both image and video");
return;
}

const formData = new FormData();
formData.append("image", image);
formData.append("video", video);

document.getElementById("result").innerHTML = "Uploading... please wait";

try {

const response = await fetch(
"https://script.google.com/macros/s/AKfycbzMRQIOX9qKilEEoh7EiDGejpk0cZ7elhy92fQqQxIoMyyBQdyjczhAucttK_u2A_YC/exec",
{
method: "POST",
body: formData
}
);

if (!response.ok) {
throw new Error("Server response failed");
}

const data = await response.json();

if (data.error) {
throw new Error(data.error);
}

document.getElementById("result").innerHTML = `
<p><strong>Your AI Gifting Link</strong></p>
<a href="${data.link}" target="_blank">${data.link}</a>

<p><strong>Scan QR Code</strong></p>
<img src="${data.qr}" width="200">
`;

} catch (error) {

document.getElementById("result").innerHTML =
"<p style='color:red'>Error: " + error.message + "</p>";

console.error(error);

}

});