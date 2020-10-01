const recorderContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");

const statrRecording = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    console.log(stream);
  } catch (error) {
    recordBtn.innerHTML = "😢 you can't record";
    recordBtn.removeEventListener("click", statrRecording);
  }
};

function init() {
  recordBtn.addEventListener("click", statrRecording);
}

if (recorderContainer) {
  init();
}
