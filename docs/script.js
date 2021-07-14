//ランダムな整数を得られる
function getRandomInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const music = new Audio("audio/train.mp3");
document.getElementById("message-wrap").onclick = function() {
document.getElementById("message").style.display = "none";
document.getElementById("message2").style.display = "none";
music.play();
music.loop = 'true';
}



// --雲--
for(let i=0; i<85; i++)
{ 
  const itemList = document.createElement('li');
  itemList.className = 'item';
  itemList.style.width = "50%";
  if(i <= 25 || i > 30)
  {
    const cloudImage = document.createElement('img');    
    cloudImage.className = 'cloud';
    cloudImage.src = "image/cloud.png";
    cloudImage.alt = "雲の画像";
  
    itemList.appendChild(cloudImage);
  
    //雲の位置をランダムに調整
    let random_w = getRandomInt(20,70);
    itemList.style.width = `${random_w}%`;
  
    let random_t = getRandomInt(0,150);
    cloudImage.style.top = `${random_t}px`;
    
    //雲のサイズをランダムに調整
    let random_s = getRandomInt(150,300);
    cloudImage.style.width = `${random_s}px`;
    cloudImage.style.height = `${random_s}px`;
  }

  document.getElementById('cloud-list').appendChild(itemList);
}



// --背景--
for(let i=0; i<85; i++)
{ 
  //背景の位置をずらす
  let backLeft = 0;
  backLeft += i * 100;

  const itemList = document.createElement('li');
  itemList.className = 'item';

  //建物
  if(i <= 20)
  { 
    const buildImage = document.createElement('img');    
    buildImage.className = 'building';
    buildImage.src = "image/building.png";
    buildImage.alt = "建物の画像";
  
    itemList.appendChild(buildImage);
    buildImage.style.left = `${backLeft}%`;
  }  

  //トンネル
  if(i > 20 && i <= 26)
  {
    const tunnel = document.createElement('div');
    tunnel.className = 'tunnel';
  
    itemList.appendChild(tunnel);
    tunnel.style.left = `${backLeft}%`;
  }

  //山
  if(i > 26)
  {
    const mountImage = document.createElement('img');    
    mountImage.className = 'mountain';
    mountImage.src = "image/mountain.png";
    mountImage.alt = "山の画像";
  
    itemList.appendChild(mountImage);
    mountImage.style.left = `${backLeft}%`;
  }

  //駅(トンネルと同じ)
  if(i > 72)
  {
    const tunnel = document.createElement('div');
    tunnel.className = 'tunnel';
    
    itemList.appendChild(tunnel);
    tunnel.style.left = `${backLeft}%`;
    tunnel.style.backgroundColor = "gray";
  }

  document.getElementById('back-list').appendChild(itemList);
}



// --その他--
for(let i=0; i<100; i++)
{
  const itemList = document.createElement('li');
  itemList.className = 'item';
  itemList.style.width = "50%";

  // 1,UFO
  if(i == 10)
  {
    const UFOImage = document.createElement('img');
    UFOImage.className = 'UFO';
    UFOImage.src = "image/UFO.png";
    UFOImage.alt = "UFOの画像";

    itemList.appendChild(UFOImage);
  }

  // 2,風船
  if(i >= 13 && i < 18)
  {
    for(let j=0;j<3;j++)
    {
      const balloonImage = document.createElement('img');
      balloonImage.className = 'balloon';
      let random_c = getRandomInt(1,5);
      if(random_c == 1) balloonImage.src = "image/balloonRed.png";
      if(random_c == 2) balloonImage.src = "image/balloonBlue.png";
      if(random_c == 3) balloonImage.src = "image/balloonGreen.png";
      if(random_c == 4) balloonImage.src = "image/balloonYellow.png";
      if(random_c == 5) balloonImage.src = "image/balloonPurple.png";
      balloonImage.alt = "風船の画像";

      let random_w = getRandomInt(5,30);
      let random_t = getRandomInt(0,50);
      let random_s = getRandomInt(100,300);
      itemList.style.width = `${random_w}%`;
      itemList.style.top = `${random_t}%`;
      balloonImage.style.width = `${random_s}px`;
      balloonImage.style.height = `${random_s}px`;

      itemList.appendChild(balloonImage);
    }
  }

  // 3,車
  if(i == 20)
  {
    const carImage = document.createElement('img');
    carImage.className = 'car';
    carImage.src = "image/car.png";
    carImage.alt = "車の画像";

    itemList.appendChild(carImage);
    document.getElementById('other-list').style.zIndex = "-1";
  }

  // 4,お金
  if(i > 21 && i <= 25)
  {
    const moneyImage = document.createElement('img');
    moneyImage.className = 'money';
    moneyImage.src = "image/money.png";
    moneyImage.alt = "お金の画像";
  
    itemList.appendChild(moneyImage);

    let random_w = getRandomInt(10,50);
    itemList.style.width = `${random_w}%`;
    document.getElementById('other-list').style.zIndex = "-4";
  }

  // 5,星
  if(i > 36 && i <= 46)
  {
    const starImage = document.createElement('img');
    starImage.className = 'star';
    starImage.src = "image/star.png";
    starImage.alt = "星の画像";

    itemList.appendChild(starImage);

    //星の位置をランダムに調整
    let random_w = getRandomInt(10,30);
    itemList.style.width = `${random_w}%`;

    let random_t = getRandomInt(0,300);
    starImage.style.top = `${random_t}px`;

    let random_s = getRandomInt(1,3);
    starImage.style.animationName = `${random_s}`;

    document.getElementById('other-list').style.zIndex = "-4";
  }

  // 6,おばけ
  if(i == 50)
  {
    const ghostImage = document.createElement('img');
    ghostImage.className = 'ghost';
    ghostImage.src = "image/ghost.png";
    ghostImage.alt = "おばけの画像";
  
    itemList.appendChild(ghostImage);
  }

  // 7,竜
  if(i == 60)
  {
    const dragonImage = document.createElement('img');
    dragonImage.className = 'dragon';
    dragonImage.src = "image/dragon.png";
    dragonImage.alt = "竜の画像";

    itemList.appendChild(dragonImage);
    document.getElementById('other-list').style.zIndex = "-1";
  }

  // 8,文字
  if(i == 80)
  {
    const text = document.createElement('p');
    text.className = 'text';
    text.textContent = "まもなく ◇◇駅　　　まもなく　◇◇駅　　お忘れ物にご注意ください";    
    
    itemList.appendChild(text);
    document.getElementById('other-list').style.zIndex = "-4";
  }

    // クレジット
    if(i == 95)
    {
      const text2 = document.createElement('p');
      text2.className = 'text2';
      text2.textContent = "Thank you for visiting!";
      const text3 = document.createElement('p');
      text3.className = 'text3';
      text3.textContent = "yuki yamazaki 2021/7/14";
      
      itemList.appendChild(text2);
      itemList.appendChild(text3);
      document.getElementById('other-list').style.zIndex = "-1";
    }

  document.getElementById('other-list').appendChild(itemList);
}


window.addEventListener('DOMContentLoaded', function(){
  window.addEventListener('scroll', function(){
    //--横スクロールに変換--
    let backScroll = window.scrollY * 0.7;
    const cloudList = document.getElementById('cloud-list');
    const backList = document.getElementById('back-list');
    const otherList = document.getElementById('other-list');
      
    cloudList.scrollLeft = window.scrollY * 0.5;        
    backList.scrollLeft = window.scrollY * 1.4;      
    otherList.scrollLeft = window.scrollY * 0.7;

    //--背景色を変える--
    //水色
    if(backScroll <= window.innerWidth * 4)
    { 
      document.body.style.backgroundColor = "hsl(180,30%,80%)";
    }

    //UFO出現！
    if(backScroll > window.innerWidth * 4 && backScroll <= window.innerWidth * 5)
    {    
      let random_h = getRandomInt(0,360);
      document.body.style.backgroundColor = `hsl(${random_h},30%,80%)`;
    }

    //水色に戻る
    if(backScroll > window.innerWidth * 5 && backScroll  <= window.innerWidth * 15)
    { 
      document.body.style.backgroundColor = "hsl(180,30%,80%)";
    }

    //夜
    if(backScroll > window.innerWidth * 15 && backScroll <= window.innerWidth * 18)
    { 
      const scrollAmount = backScroll - window.innerWidth * 15;
      let h = 180 + scrollAmount * 0.02;
      let s = 30 + scrollAmount * 0.15;
      let l = 80 - scrollAmount * 0.02;
      if(h > 220) h = 220;
      if(s > 70) s = 70;
      if(l < 30) l = 30;
      document.body.style.background = `hsl(${h},${s}%,${l}%)`;
    }

    //異様
    if(backScroll > window.innerWidth * 20 && backScroll <= window.innerWidth * 26)
    {
      const scrollAmount2 = backScroll - window.innerWidth * 20;
      let h2 = 220 - scrollAmount2 * 0.04;
      let s2 = 70 + scrollAmount2 * 0.02;
      let l2 = 30 + scrollAmount2 * 0.02;
      if(h2 < 25) h2 = 25;
      if(s2 > 100) s2 = 100;
      if(l2 > 60) l2 = 60;
      document.body.style.background = `hsl(${h2},${s2}%,${l2}%)`;
    }

    //水色に戻る
    if(backScroll > window.innerWidth * 31)
    {
      const scrollAmount3 = backScroll - window.innerWidth * 31;
      let h3 = 25 + scrollAmount3 * 0.05;
      let s3 = 100 - scrollAmount3 * 0.03;
      let l3 = 60 + scrollAmount3 * 0.02;
      if(h3 > 180) h3 = 180;
      if(s3 < 30) s3 = 30;
      if(l3 > 80) l3 = 80;
      document.body.style.background = `hsl(${h3},${s3}%,${l3}%)`;
    }
  });
});



