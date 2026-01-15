const videoInput = document.getElementById("videoInput");
const btn = document.getElementById("generateBtn");
const result = document.getElementById("result");
const promptType = document.getElementById("promptType");

let videoData = null;

videoInput.addEventListener("change", () => {
  const file = videoInput.files[0];
  if (!file) return;

  const video = document.createElement("video");
  video.preload = "metadata";

  video.onloadedmetadata = () => {
    videoData = {
      name: file.name,
      duration: Math.round(video.duration),
      width: video.videoWidth,
      height: video.videoHeight
    };
  };

  video.src = URL.createObjectURL(file);
});

btn.addEventListener("click", () => {
  if (!videoData) {
    alert("Upload video dulu!");
    return;
  }

  const type = promptType.value;
  let prompt = "";

  if (type === "ai") {
    prompt = `
Create a cinematic AI video based on this reference:

Video info:
- Resolution: ${videoData.width}x${videoData.height}
- Duration: ${videoData.duration} seconds

Style:
- Ultra realistic
- Dramatic lighting
- Smooth cinematic camera movement

Scene:
Describe a story inspired by the video content, add emotional atmosphere, detailed environment, and professional color grading.
`;
  }

  if (type === "yt") {
    prompt = `
Buatkan script dan deskripsi YouTube berdasarkan video ini:

Judul menarik + SEO friendly  
Durasi video: ${videoData.duration} detik  
Resolusi: ${videoData.width}x${videoData.height}

Gaya bahasa santai, engaging, cocok untuk penonton Indonesia.
Tambahkan:
- Hook 5 detik pertama
- Call to action
- Hashtag SEO
`;
  }

  if (type === "tt") {
    prompt = `
Buatkan caption TikTok viral untuk video ini:

Durasi: ${videoData.duration} detik  
Format: ${videoData.width}x${videoData.height}

Gunakan:
- Bahasa santai
- Emoji secukupnya
- Hashtag trending
- CTA follow & like
`;
  }

  if (type === "ig") {
    prompt = `
Buatkan caption Instagram Reels untuk video ini:

Durasi: ${videoData.duration} detik  
Resolusi: ${videoData.width}x${videoData.height}

Tone: aesthetic + friendly  
Tambahkan hashtag relevan & CTA komentar.
`;
  }

  result.value = prompt.trim();
});
