const febHolidays = [
    "Hey cheeku..I love youuuuuuuu ❤️",
    "Reason 2 : I am bohot zyada cute..(I know I am right😊)",
    "I just love tujhe pareshan krna 😊",
    "I feel a jadoo connection with you ",
    "that I haven’t felt with anyone else! ✨ 🤩",
    "You're the best, And I love you❤️",
    "You're my everything ✔",
    "You are my soulmate ✨💕",
    "And of course... wait baby.....",
    "My future wife🤭",
    "I will always be there for you",
    "No matter how far we are🥰",
    "I promise I will never go far from your heart",
    " Tu hai toh Mai hun💓",
    "You're the prettiest, cutest, funniest,",
    "sweetest girl alive. 🤞✍",
    "In one word, you're just perfect.😍",
    "I'm the happiest man alive🥰",
    "I'm so grateful I met you❤️",
    "dukh me tum aur khushi me tum 🤨",
    "Jindagi ke safar me kaafi ho tum ❤",
    "I'll always do my best to keep you happy🥺",
    "You're the best thing that's ever happened to me.",
    "Your laughter is like my favorite Bollywood song—it makes my heart dance! 🎶",
    "Main humesa tere sath hun 🤞✔",
    "Tujhe satane me, Tujhe hasane me, Tujhe rulane me(Kabhi kabhii)",
    " I'll always be there💓",
    " Tu hai toh Mai hun💓",
    "You are the most special person in my life🥰",
    "I don't want to lose you 😒",
    "And trust me I dont want anyone else 🥰",
    "There's no one better than you❤️",
    "You're the best baby!! 💖",
    "Or should I say, I Love you when",
    "something really good happens 🤨",
    "Acche lagte hai wo pal jo tumhare",
    "sath bitaye hain chahe wo ladne ke ho ya pyaar ke💓",
    "There's some hardships, 😢",
    "but we overcame all of them 🥰",
    "and it made me realised how",
    "important you are in my life❤️",
    "This complete love cycle is just for you, 😘",
    "my unconditional love,my private variable💖",
    "Please take care of love who really loves you❤",
    "I'm binary in love; you're the one and only '1 in my life",
    "Thanks to God for helping us,",
    "ki tere jaisi (MAAL) ladki mujhe mili🙏",
    "You're the love of my life,",
    "I Love You So much❤️",
    "You're the BEST GIRLFRIEND EVERRRRR"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getDate() - 1;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  