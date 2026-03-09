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

await fetch(
"https://script.google.com/macros/s/AKfycbzMRQIOX9qKilEEoh7EiDGejpk0cZ7elhy92fQqQxIoMyyBQdyjczhAucttK_u2A_YC/exec",
{
method: "POST",
mode: "no-cors",
body: formData
}
);

document.getElementById("result").innerHTML = `
<p style="color:green;"><strong>Upload request sent successfully!</strong></p>
<p>Your AR gift is being generated.</p>
`;

} catch (error) {

document.getElementById("result").innerHTML =
"<p style='color:red'>Error: " + error.message + "</p>";

console.error(error);

}

});