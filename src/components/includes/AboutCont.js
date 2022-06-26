import React from "react";
// import imgfile from "./img/aboutImg01.jpg";
// import imgfile from "./img/aboutImg02.jpg";
// import imgfile from "./img/aboutImg03.jpg";

function AboutInfo({ image, title, desc }) {
  return (
    <div className="about">
      <figure class="about__img">
        <img src={image} alt={title} />
      </figure>
      <div className="about__txt">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}
const aboutText = [
  {
    id: 1,
    title: "배움에 대한 갈망으로 시작한 새로운 도전",
    desc: "저는 오랜 기간 배움에 대한 갈망이 있었습니다. 이것 저것을 기웃거리며 방황하던 중, 우연히 접하게 된 웹개발 초보자 교육을 시작으로 개발이란 분야에 매료되어 본격적으로 배워보고자 웹퍼블리셔 과정을 수료했습니다. 저는 오랜 기간 배움에 대한 갈망이 있었습니다. 이것 저것을 기웃거리며 방황하던 중, 우연히 접하게 된 웹개발 초보자 교육을 시작으로 개발이란 분야에 매료되어 본격적으로 배워보고자 웹퍼블리셔 과정을 수료했습니다.",
    image: "img/aboutImg01@2x.jpg",
  },
  {
    id: 2,
    title: "마음 먹은 것은 꼭 이뤄내고야 마는 열정",
    desc: "컴퓨터 언어만으로 즉각적으로 보여지는 시각 효과들이 저에게 매우 흥미롭게 다가왔고, 새로 습득하는 것을 좋아하여 이것 저것 많이 배워봤지만 코딩만큼 매력적으로 느껴지는 분야는 처음이었습니다. 새로 시작하기에 다소 늦었다고 생각했지만, 마음 먹은 것은 꼭 이뤄내고자 하는 저의 넘치는 열정이 오늘날까지 이끌어주었다고 생각합니다.",
    image: "img/aboutImg02@2x.jpg",
  },
  {
    id: 3,
    title: "소통하는 사람이 되고자",
    desc: "항상 겸손한 자세로 함께하는 동료들과 소통하고, 협업하며, 사용자의 편의성을 고려하는 코딩을 하고 싶습니다. 감사합니다! 항상 겸손한 자세로 함께하는 동료들과 소통하고, 협업하며, 사용자의 편의성을 고려하는 코딩을 하고 싶습니다. 감사합니다!",
    image: "img/aboutImg03@2x.jpg",
  },
];
function AboutCont() {
  return (
    <section className="about__cont">
      <div className="container">
        <div className="about__inner">
          {aboutText.map((about) => (
            <AboutInfo
              image={about.image}
              title={about.title}
              desc={about.desc}
              key={about.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutCont;
