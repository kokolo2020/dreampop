const poster = "assets/friendly-dream-poster.svg";

const videos = [
  {
    id: "being-chased",
    title: "The To-Do List Chase",
    subtitle: "When your responsibilities put on sneakers.",
    focus: "50% 50%",
    description:
      "In this dream, the dreamer is jogging through unfamiliar streets while a very dramatic to-do list keeps catching up. The interpretation stays light: this can point to unfinished tasks, decisions waiting for attention, or the funny way the brain turns pressure into a tiny movie.",
    meaning:
      "The chase is a playful signal that something wants a little attention: a task, a choice, or a feeling that has been standing in line for too long.",
    takeaway:
      "Pick one tiny thing to finish today. The dream gets funnier when the to-do list loses cardio.",
    date: "Jun 22, 2026",
    length: "0:58",
    tags: ["Busy Brain", "Avoidance", "Courage"],
    symbols: [
      ["Street", "A public path can point to pressure from daily life."],
      ["Pursuer", "The chaser may simply be a task wearing running shoes."],
      ["Breath", "A reminder to pause before the day starts sprinting."]
    ],
    comments: [
      ["Maya", "My laundry pile has absolutely chased me before."],
      ["Theo", "I came for the joke and stayed for the meaning."]
    ]
  },
  {
    id: "falling-elevator",
    title: "The Elevator Did a Prank",
    subtitle: "A sudden drop, but make it emotionally useful.",
    focus: "18% 56%",
    description:
      "The dream begins in an ordinary elevator, then it drops like it forgot its job description. The meaning can be about moving too quickly, changing levels in life, or needing steadier footing before the next big choice.",
    meaning:
      "Elevators often show movement between levels of life. A sudden drop can point to a change that feels fast, surprising, or not fully in your hands yet.",
    takeaway:
      "Slow the next decision down by one notch. Even dream elevators appreciate a calm button press.",
    date: "Jun 18, 2026",
    length: "1:14",
    tags: ["Control", "Career", "Momentum"],
    symbols: [
      ["Elevator", "A shift in status, direction, or confidence."],
      ["Fall", "A loss of control that may be asking for trust."],
      ["Doors", "Transitions that feel too fast to choose."]
    ],
    comments: [["Sam", "I get these before big meetings. Wild."]]
  },
  {
    id: "glass-teeth",
    title: "Glass Teeth, Big Feelings",
    subtitle: "A fragile mouth with main-character timing.",
    focus: "75% 34%",
    description:
      "The dreamer notices their teeth becoming transparent and delicate, which is rude behavior from teeth. This can point toward vulnerability around speech, confidence, appearance, or wanting to be understood without feeling judged.",
    meaning:
      "Teeth dreams often connect to voice, confidence, and how we show ourselves to people. Glass adds the feeling of being seen and breakable at the same time.",
    takeaway:
      "Say the honest thing gently. Your dream teeth do not need a full press conference.",
    date: "Jun 12, 2026",
    length: "1:03",
    tags: ["Voice", "Image", "Stress"],
    symbols: [
      ["Teeth", "How we present, speak, and protect ourselves."],
      ["Glass", "Beauty mixed with breakability."],
      ["Mirror", "Self-judgment asking for gentleness."]
    ],
    comments: []
  },
  {
    id: "lost-hotel",
    title: "Hotel Hallway Marathon",
    subtitle: "Every door has vacation energy and no clear checkout.",
    focus: "34% 62%",
    description:
      "The dreamer moves through a hotel that keeps changing shape, like the building is improvising. Every room feels temporary and familiar, suggesting a season of change where identity is rearranging itself with surprising enthusiasm.",
    meaning:
      "A hotel can represent a temporary version of life: a place you occupy while something is changing. The endless hallway points to options, curiosity, and a little decision fatigue.",
    takeaway:
      "Choose one door for now. You can always come back after snacks and better lighting.",
    date: "Jun 4, 2026",
    length: "1:22",
    tags: ["Identity", "Memory", "Change"],
    symbols: [
      ["Hotel", "A temporary version of the self."],
      ["Hallway", "Many choices without a clear destination."],
      ["Key", "Access to a part of life that feels withheld."]
    ],
    comments: [["Lina", "The temporary self line is beautiful."]]
  },
  {
    id: "flying-water",
    title: "Flying Over Feelings",
    subtitle: "A peaceful glide above the emotional swimming pool.",
    focus: "62% 38%",
    description:
      "This dream lifts the dreamer above a wide body of water. It can feel like finally getting a balcony seat to your own emotions: enough distance to understand them, enough beauty to stop arguing with them.",
    meaning:
      "Flying can signal freedom, confidence, or perspective. Water brings emotion into the picture, so this dream may show the dreamer gaining a healthier distance from big feelings.",
    takeaway:
      "Notice the feeling without wrestling it. Balcony seats are underrated.",
    date: "May 29, 2026",
    length: "0:49",
    tags: ["Lucid", "Emotion", "Freedom"],
    symbols: [
      ["Flight", "A wider view and a break from old limits."],
      ["Water", "The emotional field below the dreamer."],
      ["Moon", "Intuition guiding without forcing."]
    ],
    comments: []
  },
  {
    id: "locked-door",
    title: "The Door With Opinions",
    subtitle: "A recurring room that clearly wants attention.",
    focus: "86% 58%",
    description:
      "The red door returns again and again inside the same house. The lock creates curiosity: something inside the dreamer's world may not be ready to open yet, but it is ready to be noticed with patience and humor.",
    meaning:
      "A recurring door can point to a part of life asking for attention. The lock does not mean danger; it can simply mean timing, privacy, or a boundary that deserves respect.",
    takeaway:
      "Write down what is behind the door before trying to open it. The brain enjoys a dramatic entrance.",
    date: "May 21, 2026",
    length: "1:31",
    tags: ["Recurring", "Curiosity", "Choice"],
    symbols: [
      ["Door", "A threshold between known and unknown self."],
      ["Red", "Urgency, desire, anger, or life force."],
      ["House", "The dreamer's inner architecture."]
    ],
    comments: [["Andre", "I would watch a whole series just on house dreams."]]
  }
];

let selectedId = videos[0].id;
let rotatingIndex = 0;

const heroTitle = document.querySelector("#heroTitle");
const heroSubtitle = document.querySelector("#heroSubtitle");
const spotlightTrack = document.querySelector("#spotlightTrack");
const spotlightDots = document.querySelector("#spotlightDots");
const videoList = document.querySelector("#videoList");
const detailPoster = document.querySelector("#detailPoster");
const detailDate = document.querySelector("#detailDate");
const detailLength = document.querySelector("#detailLength");
const detailTitle = document.querySelector("#detailTitle");
const detailDescription = document.querySelector("#detailDescription");
const detailTags = document.querySelector("#detailTags");
const detailSymbols = document.querySelector("#detailSymbols");
const episodeView = document.querySelector("#episodeView");
const episodeClose = document.querySelector("#episodeClose");
const episodePoster = document.querySelector("#episodePoster");
const episodeDate = document.querySelector("#episodeDate");
const episodeLength = document.querySelector("#episodeLength");
const episodeTitle = document.querySelector("#episodeTitle");
const episodeDescription = document.querySelector("#episodeDescription");
const episodeMeaning = document.querySelector("#episodeMeaning");
const episodeTakeaway = document.querySelector("#episodeTakeaway");
const episodeTags = document.querySelector("#episodeTags");
const commentCount = document.querySelector("#commentCount");
const commentList = document.querySelector("#commentList");
const commentForm = document.querySelector("#commentForm");
const commentName = document.querySelector("#commentName");
const commentText = document.querySelector("#commentText");
const rotatingVideos = videos.slice(0, 4);

function storedComments(video) {
  const raw = localStorage.getItem(`dream-comments:${video.id}`);
  if (!raw) return video.comments;
  try {
    return JSON.parse(raw);
  } catch {
    return video.comments;
  }
}

function saveComments(video, comments) {
  localStorage.setItem(`dream-comments:${video.id}`, JSON.stringify(comments));
}

function renderCards() {
  videoList.innerHTML = "";
  videos.forEach((video) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `video-card${video.id === selectedId ? " active" : ""}`;
    card.innerHTML = `
      <span class="thumb" data-length="${video.length}">
        <img src="${poster}" alt="" style="object-position:${video.focus}" />
      </span>
      <span>
        <h3>${video.title}</h3>
        <p>${video.subtitle}</p>
        <span class="card-meta">
          <span>${video.date}</span>
          <span>${storedComments(video).length} comments</span>
        </span>
      </span>
    `;
    card.addEventListener("click", () => {
      openEpisode(video.id);
    });
    videoList.append(card);
  });
}

function renderSpotlight() {
  const activeVideo = rotatingVideos[rotatingIndex % rotatingVideos.length];
  heroTitle.textContent = activeVideo.title;
  heroSubtitle.textContent = activeVideo.subtitle;
  spotlightTrack.innerHTML = "";
  spotlightDots.innerHTML = "";

  rotatingVideos.forEach((video, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `spotlight-card${index === rotatingIndex ? " active" : ""}`;
    card.innerHTML = `
      <span class="mini-poster">
        <img src="${poster}" alt="" style="object-position:${video.focus}" />
      </span>
      <span>
        <strong>${video.title}</strong>
        <span>${video.subtitle}</span>
      </span>
    `;
    card.addEventListener("click", () => {
      rotatingIndex = index;
      openEpisode(video.id);
    });
    spotlightTrack.append(card);

    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = `spotlight-dot${index === rotatingIndex ? " active" : ""}`;
    dot.setAttribute("aria-label", `Show ${video.title}`);
    dot.addEventListener("click", () => {
      rotatingIndex = index;
      renderSpotlight();
    });
    spotlightDots.append(dot);
  });
}

function renderDetail() {
  const video = videos.find((item) => item.id === selectedId);
  const comments = storedComments(video);
  detailPoster.src = poster;
  detailDate.textContent = video.date;
  detailLength.textContent = video.length;
  detailTitle.textContent = video.title;
  detailDescription.textContent = video.description;
  detailTags.innerHTML = video.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
  detailSymbols.innerHTML = video.symbols
    .map(([title, text]) => `
      <div class="symbol-item">
        <span class="symbol-photo">
          <img src="${poster}" alt="" style="object-position:${video.focus}" />
        </span>
        <span>
          <strong>${title}</strong>
          <p>${text}</p>
        </span>
      </div>
    `)
    .join("");
  commentCount.textContent = `${comments.length} total`;
  commentList.innerHTML = comments.length
    ? comments.map(([name, text]) => `
      <div class="comment">
        <strong>${name}</strong>
        <p>${text}</p>
      </div>
    `).join("")
    : `<div class="comment"><strong>No comments yet</strong><p>Be the first voice under this dream.</p></div>`;
}

function renderEpisode(video) {
  episodePoster.src = poster;
  episodePoster.style.objectPosition = video.focus;
  episodeDate.textContent = video.date;
  episodeLength.textContent = video.length;
  episodeTitle.textContent = video.title;
  episodeDescription.textContent = video.description;
  episodeMeaning.textContent = video.meaning;
  episodeTakeaway.textContent = video.takeaway;
  episodeTags.innerHTML = video.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
}

function openEpisode(videoId) {
  selectedId = videoId;
  const selectedVideo = videos.find((item) => item.id === selectedId);
  render();
  renderEpisode(selectedVideo);
  episodeView.classList.add("open");
  episodeView.setAttribute("aria-hidden", "false");
  document.body.classList.add("episode-open");
  episodeView.scrollTop = 0;
}

function closeEpisode() {
  episodeView.classList.remove("open");
  episodeView.setAttribute("aria-hidden", "true");
  document.body.classList.remove("episode-open");
}

function render() {
  renderSpotlight();
  renderCards();
  renderDetail();
}

setInterval(() => {
  rotatingIndex = (rotatingIndex + 1) % rotatingVideos.length;
  renderSpotlight();
}, 4200);

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const video = videos.find((item) => item.id === selectedId);
  const name = commentName.value.trim() || "Guest";
  const text = commentText.value.trim();
  if (!text) return;
  const comments = [...storedComments(video), [name, text]];
  saveComments(video, comments);
  commentText.value = "";
  render();
});

document.querySelector(".play-button").addEventListener("click", () => {
  openEpisode(selectedId);
});

episodeClose.addEventListener("click", closeEpisode);

episodeView.addEventListener("click", (event) => {
  if (event.target === episodeView) closeEpisode();
});

render();
