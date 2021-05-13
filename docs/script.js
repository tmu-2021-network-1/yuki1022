const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';
const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';
const sheet = 'Studio';
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;

const renderJson = (json) => {
  const studios = json.records;
  studios.pop();
  
  //ホームの左側に表示する写真
  for(let i=0; i<studios.length/2; i++){
    const studioArr = studios[i];
          
    const homeDivLeft = document.createElement('div');
    const homePhotoLeft = document.createElement('img');
    homePhotoLeft.className = 'home-photo-left';
    homePhotoLeft.src = studioArr['photo2'];
    homePhotoLeft.alt = `${studioArr['name-ja']}の写真`;
    //<img>(写真)を<div>(homeDivLeft)の子として追加
    homeDivLeft.appendChild(homePhotoLeft);
    //<div>(homeDivLeft)をHTML内の<div>(home-photos-left)の子として追加
    document.getElementById('home-photos-left').appendChild(homeDivLeft);
  }

  //ホームの右側に表示する写真
  for(let i=(studios.length)/2; i<studios.length; i++){
    const studioArr = studios[i];
  
    const homeDivRight = document.createElement('div');
    const homePhotoRight = document.createElement('img');
    homePhotoRight.className = 'home-photo-right';
    homePhotoRight.src = studioArr['photo2'];
    homePhotoRight.alt = `${studioArr['name-ja']}の写真`;
    //<img>(写真)を<div>(homeDivRight)の子として追加
    homeDivRight.appendChild(homePhotoRight);
    //<div>(homeDivLeft)をHTML内の<div>(home-photos-left)の子として追加
    document.getElementById('home-photos-right').appendChild(homeDivRight);
  }

  /*<div class = "page-studios">
      <div class = "studios"> studioDiv
        <div class = "studios-left"><p>四角</p></div> studioLeftDiv
        <div class = "studios-center"> studioCenterDiv
          <div class = "studios-about"><p>エディティングスタジオについて</p></div> studioAboutDiv
          <div class = "studios-detail"> studioDetailDiv
            <div class = "studios-photo"><p>写真</p></div> studioPhotoDiv
            <div class = "studios-info"><p>情報</p></div>  studioInfoDiv
          </div>
        </div>
      <div class = "studios-right"><p>四角なのだよ</p></div> studioRightDiv         
      </div>*/

  studios.forEach((studio,index) => {
   const studioDiv = document.createElement('div');
   studioDiv.className = 'studios';
   
   //左側の四角
   const studioLeftDiv = document.createElement('div');
   studioLeftDiv.className = 'studios-left';
   for(let i=0; i<studios.length/2; i++){
    const LeftSquDiv = document.createElement('div');
    LeftSquDiv.className = 'left-square';
    LeftSquDiv.style.background = `hsl(${index*25},70%,80%)`;
    studioLeftDiv.appendChild(LeftSquDiv);
   }  
   
   
      
   //真ん中
   const studioCenterDiv = document.createElement('div');
   studioCenterDiv.className = 'studios-center';
   
    //スタジオについて
    const studioAboutDiv = document.createElement('div');
    studioAboutDiv.className = 'studios-about';
        //スタジオの日本語名
        const studioTitle = document.createElement('h1');
        studioTitle.className = 'studio-title';
        studioTitle.textContent = studio['name-ja'];
        //スタジオの英語名
        const studioTitleEn = document.createElement("h2");
        studioTitleEn.className = 'studio-title-en';
        studioTitleEn.textContent = studio['name-en'];
        //スタジオの説明
        const studioIntro = document.createElement('p');
        studioIntro.className = 'studio-intro';
        studioIntro.textContent = studio['description-ja'];
    
    //スタジオについて　入れ子構造
    studioAboutDiv.appendChild(studioTitle);
    studioAboutDiv.appendChild(studioTitleEn);
    studioAboutDiv.appendChild(studioIntro);
   
    //スタジオの詳細
    const studioDetailDiv = document.createElement('div');
    studioDetailDiv.className = 'studios-detail';
        //スタジオの写真
        const studioPhotoDiv = document.createElement('div');
        studioPhotoDiv.className ='studios-photo'
          const studioPhoto = document.createElement("img");
          studioPhoto.className = 'studio-photo';
          studioPhoto.src = studio['photo1'];
          studioPhoto.alt = `${studio['name-ja']}の写真`;
        //スタジオの情報
        const studioInfoDiv = document.createElement('div');
        studioInfoDiv.className = 'studios-info';
          const studioInfo = document.createElement('span');
          studioInfo.className = 'studio-info';
            const studioCourse = document.createElement('p');
            studioCourse.ClassName = 'studio-course';
            studioCourse.textContent = `コア：${studio['core-ja']}`;
            const studioProfessor = document.createElement('p');
            studioProfessor.ClassName = 'studio-pro';
            studioProfessor.textContent = `担当教員:${studio['faculty-ja']}`;
            //const studioMajor = document.createElement('p');
            //studioMajor.ClassName = 'studio-major';
            //studioMajor.textContent = `専攻：${studio[]}`;
   
            const indus = ['N','D','U','S','T','R','I','A','L','A','R','T'];
            const indusText = document.createElement('span');
            indusText.className = 'indus-text';
            indusText.textContent = indus[index];
            indusText.style.color = `hsl(${index*25},70%,80%,50%)`;  
    
   //スタジオの詳細　入れ子構造
   studioInfo.appendChild(studioCourse);
   studioInfo.appendChild(studioProfessor);
   studioInfo.appendChild(indusText);

   studioPhotoDiv.appendChild(studioPhoto);
   studioInfoDiv.appendChild(studioInfo);

   studioDetailDiv.appendChild(studioPhotoDiv);
   studioDetailDiv.appendChild(studioInfoDiv);
  
  //真ん中　入れ子構造
  studioCenterDiv.appendChild(studioAboutDiv);
  studioCenterDiv.appendChild(studioDetailDiv);
  　



   //右側の四角
   const studioRightDiv = document.createElement('Div');
   studioRightDiv.className = 'studios-right';
   for(let i=0; i<studios.length/2; i++){
    const RightSquDiv = document.createElement('div');
    RightSquDiv.className = 'right-square';
    RightSquDiv.style.background = `hsl(${index*25},70%,80%)`;
    studioRightDiv.appendChild(RightSquDiv);
   }
   
  //スタジオ全体の入れ子構造
  studioDiv.appendChild(studioLeftDiv);
  studioDiv.appendChild(studioCenterDiv);
  studioDiv.appendChild(studioRightDiv);

   //<div>(studioDiv)をHTML内の<div>(studios)の子として追加
   document.getElementById('page-studios').appendChild(studioDiv);
 });
}








const getData = async () => {
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const jsonResponse = await response.json();
			renderJson(jsonResponse);
    }
  }
  catch (error) {
    console.log(error);
  }
}

getData();
