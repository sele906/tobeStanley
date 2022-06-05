//window.localStorage.clear();


const orderbtn = ['Escape', 'Delete', 'Shift', 'Control', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'F2', 'F8', 'F9', '8', 's', 'y', 'u', 'w', 'p', 'm', 'v', 'n', 'z', 'o', 'q'];
let memory = ['dummy', 'Escape'];
let ordertime = 0;
let keynum = 0;
let i = 0;

//대사 횟수
let nonum = 0;
let samenum = 0;
let diffnum = 0; //지정을 안했으니 당연히 동작을 안하지..
let eventnum = 0;

//언어 여부 0이 영어 1이 한글
let lang = 0;

//대사 번호
let noDlgnum = 0;
let sameDlgnum = 0;
let diffDlgnum = 0;

//알림창 대사 번호
let nAlert = 0;
let sAlert = 0;

//첫 시작 특수한 키

document.getElementsByClassName('input')[i].addEventListener('keydown', function(event) {
  const key = event.key; 

  if (key === 'Delete' || key === 'Escape' || key === 'CapsLock' || key === 'Shift' || key === 'Control' || key === 'ArrowLeft' || key === 'ArrowUp' || key === 'ArrowRight' || key === 'ArrowDown' || key === 'F2' || key === 'F6' || key === 'F8' || key === 'F9') {     
    document.getElementsByClassName('input')[i].value = key;
  }
});

function addLoader() {
  if (event.keyCode==13) {
    i++;
    //console.log('i: ', i);

    //무작위 변수
    keynum = Math.floor(Math.random()*orderbtn.length);

    //박스 추가
    var _div = document.createElement('div');
    _div.setAttribute('class', 'orderbox');
 
    //한국어라면
    if (lang === 1) {

      _div.innerHTML = `
      <div class="divisionline">---</div> 
        <div class="order"> 
          <div class="textstart">></div>` + 
  
          //명령어 언어 바꾸기
          `<div class="ordercontent" style="display: none;">Please PRESS '${orderbtn[keynum]}' on your KEYBOARD for ${Math.floor((Math.random() * (70 - 10) + 10))}ms.</div> 
          <div class="ordercontentkor" style="display: inline-block;">키보드에 있는 '${orderbtn[keynum]}' 버튼을 ${Math.floor((Math.random() * (70 - 10) + 10))}ms동안 누르십시오.</div>`
  
        + `</div> 
      <input type="text" class="input" onKeyPress="addLoader()" spellcheck="false" style="font-family: NeoDunggeunmo">
      `; //인풋에 키보드 누를 때 함수 실행해주는 속성 부여해야 새로 생긴 인풋 텍스트박스 동작함

      //document.getElementsByClassName("input")[i-1].style.fontFamily = 'NeoDunggeunmo';
    }

    //영어라면
    if (lang === 0) {

      _div.innerHTML = `
      <div class="divisionline">---</div> 
        <div class="order"> 
          <div class="textstart">></div>` + 
  
          //명령어 언어 바꾸기
          `<div class="ordercontent" style="display: inline-block;">Please PRESS '${orderbtn[keynum]}' on your KEYBOARD for ${Math.floor((Math.random() * (70 - 10) + 10))}ms.</div> 
          <div class="ordercontentkor" style="display: none;">키보드에 있는 '${orderbtn[keynum]}' 버튼을 ${Math.floor((Math.random() * (70 - 10) + 10))}ms동안 누르십시오.</div>`
  
        + `</div> 
      <input type="text" class="input" onKeyPress="addLoader()" spellcheck="false" style="font-family: Roboto Mono">
      `; //인풋에 키보드 누를 때 함수 실행해주는 속성 부여해야 새로 생긴 인풋 텍스트박스 동작함

      //document.getElementsByClassName("input")[i].style.fontFamily = 'Roboto Mono';
    }

    //append _div to keypress
    document.getElementById("Instruction").appendChild(_div);

    //포커스 위치
    document.getElementsByClassName('input')[i].focus();

    //전에 썼던 텍스트 박스는 편집 불가능하게
    document.getElementsByClassName('input')[i-1].readOnly = true;

    //특수한 키 적용하기
    document.getElementsByClassName('input')[i].addEventListener('keydown', function(event) {
      const key = event.key; 

      if (key === 'Delete' || key === 'Escape' || key === 'CapsLock' || key === 'Shift' || key === 'Control' || key === 'ArrowLeft' || key === 'ArrowUp' || key === 'ArrowRight' || key === 'ArrowDown' || key === 'F2' || key === 'F6' || key === 'F8' || key === 'F9') {     
        document.getElementsByClassName('input')[i].value = key;
      }
    });

    //전에 내렸던 지시 기억하기
    memory.shift();
    memory.push(orderbtn[keynum]);

    //다른내용 입력했을 때 생성되는 p 찾기 위해 번호 부여 //이걸 여기다 놓으면 엔터 칠때마다 0이 되잖아..
    //let diffnum = 0;
    //각각에 변수 부여해줬어야 했음

    //만약 내용 없으면
    if (document.getElementsByClassName('input')[i-1].value.length === 0) {
      nonum++;
      noDlgnum = Math.floor(Math.random()*nothingDlg.length);

        //전체 상자 생성
        var emptyCreator = document.createElement('div');
        emptyCreator.setAttribute('class', 'empty');
  
        //내용입력
        emptyCreator.innerHTML = `
        <p class="emptyeng">--${nothingDlg[noDlgnum]}</p> 
        <p class="emptykor">--${nothingDlgKor[noDlgnum]}</p>`;

        //만약 깊게 들어가면 //리스트 추가하기?
        if (nonum === 5) {
          nothingDlg.push.apply(nothingDlg, nothingDlg1);
          nothingDlgKor.push.apply(nothingDlgKor, nothingDlgKor1);
        }
        if (nonum === 10) {
          nothingDlg.push.apply(nothingDlg, nothingDlg2);
          nothingDlgKor.push.apply(nothingDlgKor, nothingDlgKor2);
        }
        if (nonum === 15) {
          nothingDlg.push.apply(nothingDlg, nothingDlg3);
          nothingDlgKor.push.apply(nothingDlgKor, nothingDlgKor3);
        }

        //적용하기
        document.getElementsByClassName('orderbox')[i-1].appendChild(emptyCreator);
  
        //언어여부
        if (lang === 1) {
          let children = document.getElementsByClassName("empty")[nonum-1].getElementsByTagName("*");
          for (let item of children) {
            item.style.fontFamily = 'NeoDunggeunmo';
          }
          
          document.getElementsByClassName("emptykor")[nonum-1].style.display = 'inline-block';
          document.getElementsByClassName("emptyeng")[nonum-1].style.display = 'none';
        }
  
        if (lang === 0) {
  
          let children = document.getElementsByClassName("empty")[nonum-1].getElementsByTagName("*");
          for (let item of children) {
            item.style.fontFamily = 'Roboto Mono;';
          }
          document.getElementsByClassName("emptyeng")[nonum-1].style.display = 'inline-block';
          document.getElementsByClassName("emptykor")[nonum-1].style.display = 'none';
        }
    }

    //만약 내용 같으면 //전에 썼던 코드 기억해서 가져와야함
    if (document.getElementsByClassName('input')[i-1].value === memory[0] ) {
      samenum++;
      sameDlgnum = Math.floor(Math.random()*correctDlg.length);

      //전체 상자 생성
      var sameCreator = document.createElement('div');
      sameCreator.setAttribute('class', 'same');

      //내용입력
      sameCreator.innerHTML = `
      <p class="sameeng">--${correctDlg[sameDlgnum]}</p> 
      <p class="samekor">--${correctDlgKor[sameDlgnum]}</p>`;

      //깊게 들어가면
      if (samenum === 7) {
        correctDlg.push.apply(correctDlg, correctDlg1);
        correctDlgKor.push.apply(correctDlgKor, correctDlgKor1);
      }
      if (samenum === 15) {
        correctDlg.push.apply(correctDlg, correctDlg2);
        correctDlgKor.push.apply(correctDlgKor, correctDlgKor2);
      }
      if (samenum === 20) {
        correctDlg.push.apply(correctDlg, correctDlg3);
        correctDlgKor.push.apply(correctDlgKor, correctDlgKor3);
      }


      //적용하기
      document.getElementsByClassName('orderbox')[i-1].appendChild(sameCreator);

      //언어여부
      if (lang === 1) {
        let children = document.getElementsByClassName("same")[samenum-1].getElementsByTagName("*");
        for (let item of children) {
          item.style.fontFamily = 'NeoDunggeunmo';
        }
        
        document.getElementsByClassName("samekor")[samenum-1].style.display = 'inline-block';
        document.getElementsByClassName("sameeng")[samenum-1].style.display = 'none';
      }

      if (lang === 0) {

        let children = document.getElementsByClassName("same")[samenum-1].getElementsByTagName("*");
        for (let item of children) {
          item.style.fontFamily = 'Roboto Mono;';
        }
        document.getElementsByClassName("sameeng")[samenum-1].style.display = 'inline-block';
        document.getElementsByClassName("samekor")[samenum-1].style.display = 'none';
      }
    }

    //만약 내용 다르면 //내용 다른데 일단 입력하기는 했을 때
    if (document.getElementsByClassName('input')[i-1].value != memory[0] && document.getElementsByClassName('input')[i-1].value.length != 0) {
      diffnum++;
      diffDlgnum = Math.floor(Math.random()*differentDlg.length);

      //전체 상자 생성
      var diffCreator = document.createElement('div');
      diffCreator.setAttribute('class', 'diff');

      //내용입력
      diffCreator.innerHTML = `
      <p class="diffeng">--${differentDlg[diffDlgnum]}</p> 
      <p class="diffkor">--${differentDlgKor[diffDlgnum]}</p> `;

      //깊게 들어가면
      if (diffnum === 6) {
        differentDlg.push.apply(differentDlg, differentDlg1);
        differentDlgKor.push.apply(differentDlgKor, differentDlgKor1);
      }
      if (diffnum === 12) {
        differentDlg.push.apply(differentDlg, differentDlg2);
        differentDlgKor.push.apply(differentDlgKor, differentDlgKor2);
      }
      if (diffnum === 17) {
        differentDlg.push.apply(differentDlg, differentDlg3);
        differentDlgKor.push.apply(differentDlgKor, differentDlgKor3);
      }

      //적용하기
      document.getElementsByClassName('orderbox')[i-1].appendChild(diffCreator);

      //언어 여부
      if (lang === 1) {
        let children = document.getElementsByClassName("diff")[diffnum-1].getElementsByTagName("*");
        for (let item of children) {
          item.style.fontFamily = 'NeoDunggeunmo';
        }
        
        document.getElementsByClassName("diffkor")[diffnum-1].style.display = 'inline-block';
        document.getElementsByClassName("diffeng")[diffnum-1].style.display = 'none';
        
      }
      if (lang === 0) {

        let children = document.getElementsByClassName("diff")[diffnum-1].getElementsByTagName("*");
        for (let item of children) {
          item.style.fontFamily = 'Roboto Mono;';
        }
        document.getElementsByClassName("diffeng")[diffnum-1].style.display = 'inline-block';
        document.getElementsByClassName("diffkor")[diffnum-1].style.display = 'none';
      }
    }

    //이벤트
    // if (eventDlg.hasOwnProperty(document.getElementsByClassName('input')[i-1].value)) {
      if (document.getElementsByClassName('input')[i-1].value in localStorage) {
      eventnum++;
      var eventinput = document.getElementsByClassName('input')[i-1].value;

      //전체 상자 생성
      var eventCreator = document.createElement('div');
      eventCreator.setAttribute('class', 'event');

      //내용입력
      // eventCreator.innerHTML = `
      // <p class="eventeng">--${eventDlg[`${eventinput.value}`][0]}</p> 
      // <p class="eventkor">--${eventDlg[`${eventinput.value}`][1]}</p> `;

      eventCreator.innerHTML = `
      <p class="eventeng">--${JSON.parse(localStorage.getItem(eventinput))[0]}</p> 
      <p class="eventkor">--${JSON.parse(localStorage.getItem(eventinput))[1]}</p> `;

      //적용하기
      document.getElementsByClassName('orderbox')[i-1].appendChild(eventCreator);

      //언어 여부
      if (lang === 1) {
        let children = document.getElementsByClassName("event")[eventnum-1].getElementsByTagName("*");
        for (let item of children) {
          item.style.fontFamily = 'NeoDunggeunmo';
        }
        
        document.getElementsByClassName("eventkor")[eventnum-1].style.display = 'inline-block';
        document.getElementsByClassName("eventeng")[eventnum-1].style.display = 'none';
        
      }
      if (lang === 0) {

        let children = document.getElementsByClassName("event")[eventnum-1].getElementsByTagName("*");
        for (let item of children) {
          item.style.fontFamily = 'Roboto Mono;';
        }
        document.getElementsByClassName("eventeng")[eventnum-1].style.display = 'inline-block';
        document.getElementsByClassName("eventkor")[eventnum-1].style.display = 'none';
      }

      //내용 다를 때 나타나는 문구 숨기기
      document.getElementsByClassName('diff')[diffnum-1].style.display = 'none';
    }
  }
}

function translateLangbtn() { //함수명 너무 흔한걸로 쓰면 원래 있던 메소드와 겹쳐버림

  //영어일때
  if (lang === 1) {

    //버튼 바꾸기
    document.querySelector('button').innerHTML = '번역';
    document.querySelector('button').style.fontFamily = 'NeoDunggeunmo';

    //머리말 바꾸기
    document.title = 'Employee #427 Instructional Prompt';
    document.querySelector('h1').innerHTML = 'Employee #427 Instructional Prompt';
    document.querySelector('h1').style.fontFamily = 'Roboto Mono';
    document.querySelector('p').style.fontFamily = 'Roboto Mono'; //querySelectorAll은 태그 변형되면 사용될 수 없음
    document.querySelector('input').style.fontFamily = 'Roboto Mono';

    //명령 바꾸기
    //기본
    for (j = 0; j < i+1; j++) {
      document.getElementsByClassName("ordercontent")[j].style.display = "inline-block";
      document.getElementsByClassName("ordercontentkor")[j].style.display = "none";
      document.getElementsByClassName("input")[j].style.fontFamily = 'Roboto Mono';
    }
    //입력값 없을 때
    for (n = 0; n < nonum; n++) {
      let children = document.getElementsByClassName("empty")[n].getElementsByTagName("*");
      for (let item of children) {
        item.style.fontFamily = 'Roboto Mono';
      }
      document.getElementsByClassName("emptyeng")[n].style.display = "inline-block";
      document.getElementsByClassName("emptykor")[n].style.display = "none";
    }
    //입력값 같을 때
    for (s = 0; s < samenum; s++) {
      let children = document.getElementsByClassName("same")[s].getElementsByTagName("*");
      for (let item of children) {
        item.style.fontFamily = 'Roboto Mono';
      }
      document.getElementsByClassName("sameeng")[s].style.display = "inline-block";
      document.getElementsByClassName("samekor")[s].style.display = "none";
    }
    //입력값 다를 때
    for (d = 0; d < diffnum; d++) {
      let children = document.getElementsByClassName("diff")[d].getElementsByTagName("*");
      for (let item of children) {
        item.style.fontFamily = 'Roboto Mono';
      }
      document.getElementsByClassName("diffeng")[d].style.display = "inline-block";
      document.getElementsByClassName("diffkor")[d].style.display = "none";
    }
    //이벤트
    for (e = 0; e < eventnum; e++) {
      let children = document.getElementsByClassName("event")[e].getElementsByTagName("*");
      for (let item of children) {
        item.style.fontFamily = 'Roboto Mono';
      }
      document.getElementsByClassName("eventeng")[e].style.display = "inline-block";
      document.getElementsByClassName("eventkor")[e].style.display = "none";
    }

    return lang = 0;
  }
  //한국어일때
   if (lang === 0) {

    //버튼 바꾸기
    document.querySelector('button').innerHTML = 'translate';
    document.querySelector('button').style.fontFamily = 'Roboto Mono';

    //머리말 바꾸기
    document.title = '직원 #427 지시사항';
    document.querySelector('h1').innerHTML = '직원 #427 지시사항';
    document.querySelector('h1').style.fontFamily = "NeoDunggeunmo";
    document.querySelector('p').style.fontFamily = "NeoDunggeunmo";

    //명령 바꾸기
    //기본
    for (j = 0; j < i+1; j++) {
      document.getElementsByClassName("ordercontent")[j].style.display = "none";
      document.getElementsByClassName("ordercontentkor")[j].style.display = "inline-block";
      document.getElementsByClassName("input")[j].style.fontFamily = 'NeoDunggeunmo';
    }
    //입력값 없을 때
    for (n = 0; n < nonum; n++) {
      let children = document.getElementsByClassName("empty")[n].getElementsByTagName("*");
      for (let item of children) {
        item.style.fontFamily = 'NeoDunggeunmo';
      }
      document.getElementsByClassName("emptyeng")[n].style.display = "none";
      document.getElementsByClassName("emptykor")[n].style.display = "inline-block";
    }
    //입력값 같을 때
    for (s = 0; s < samenum; s++) {
      let children = document.getElementsByClassName("same")[s].getElementsByTagName("*");
      for (let item of children) {
        item.style.fontFamily = 'NeoDunggeunmo';
      }
      document.getElementsByClassName("sameeng")[s].style.display = "none";
      document.getElementsByClassName("samekor")[s].style.display = "inline-block";
    }
    //입력값 다를 때
    for (d = 0; d < diffnum; d++) {
      let children = document.getElementsByClassName("diff")[d].getElementsByTagName("*");
      for (let item of children) {
        item.style.fontFamily = 'NeoDunggeunmo';
      }
      document.getElementsByClassName("diffeng")[d].style.display = "none";
      document.getElementsByClassName("diffkor")[d].style.display = "inline-block";
    }
    //이벤트
    for (e = 0; e < eventnum; e++) {
      let children = document.getElementsByClassName("event")[e].getElementsByTagName("*");
      for (let item of children) {
        item.style.fontFamily = 'NeoDunggeunmo';
      }
      document.getElementsByClassName("eventeng")[e].style.display = "none";
      document.getElementsByClassName("eventkor")[e].style.display = "inline-block";
    }

    return lang = 1;
  }


}

function showaddDlgbtn() {
  document.getElementById('addmenu').style.display = "inline-flex";
}

function cancelbtn() {
  document.getElementById('addmenu').style.display = "none";
  document. getElementById('word'). value = "";
  document.getElementById('engDlg').value = "";
  document.getElementById('korDlg').value = "";
}

function confirmbtn() {

  //이미 단어가 있다는 안내문구
  if (document.getElementById('word').value in localStorage) {
    let isexcuted = confirm('Word already exists. Procceed?\n이미 있는 단어입니다. 계속할까요?');
    if (isexcuted) {
      localStorage.setItem( 
        document.getElementById('word').value,
        JSON.stringify([
          document.getElementById('engDlg').value, 
          document.getElementById('korDlg').value,
        ])
      );
      document.getElementById('addmenu').style.display = "none";
      document. getElementById('word'). value = "";
      document.getElementById('engDlg').value = "";
      document.getElementById('korDlg').value = "";
    }
    if (!isexcuted) {} //취소하면 아무것도 하지 않음
  } else if (document.getElementById('word').value === '') { //아무것도 입력하지 않았을 경우
    nAlert = Math.floor(Math.random()*nothingAlert.length);
    alert(`${nothingAlert[nAlert]}`);
  } else { //있던 단어가 아니면
    
    localStorage.setItem( 
      document.getElementById('word').value,
      JSON.stringify([
        document.getElementById('engDlg').value, 
        document.getElementById('korDlg').value,
      ])
    );
    sAlert = Math.floor(Math.random()*saveAlert.length);
    alert(`${saveAlert[sAlert]}`);
    document.getElementById('addmenu').style.display = "none";
    document. getElementById('word'). value = "";
    document.getElementById('engDlg').value = "";
    document.getElementById('korDlg').value = "";
  }

}