

//대사모음 //2배?

//아무것도 없을 때
let nothingDlg = [
  '',
  "input doesn't exist.",
  'Not Acceptable',
  'Method not allowed',
];
let nothingDlgKor = [
  '',
  '입력값이 존재하지 않습니다',
  '허용되지 않는 요청입니다',
  '허용되지 않는 메소드',
];

//5번 이상
let nothingDlg1 = [
  "Can't find the object",
  'User error - Replace User',
  'Task failed successfully.',
];
let nothingDlgKor1 = [
  '오브젝트를 찾을 수 없습니다',
  '사용자 에러 -  교체된 사용자',
  '성공적으로 실패하였습니다.',
];
//10번이상
let nothingDlg2 = [
  'An error occurred while creating an error report.',
  'Time remaining: About 20304958393 hours.',
  "Run as fast as you can and don't look back.",
  "That's weird",
];
let nothingDlgKor2 = [
  '에러 메세지로 인해 에러가 발생하였습니다',
  '남은 시간: 20304958393 시간.',
  '뒤돌아보지 말고 최대한 빨리 달리세요.',
  "이상하군요",
];
//15번 이상
let nothingDlg3 = [
  'You do that again and see what happens…',
  "I'm sorry, is there a problem?",
  "Choice is important. It's good for your health",
  "If you don't want to work THAT much, go out and watch some youtube.",
];
let nothingDlgKor3 = [
  '또 그런짓을 하면 어떻게 될지 두고봅시다.',
  "혹시 무슨 문제가 있나요?",
  '선택은 중요합니다. 건강에 좋기도 하고요.',
  '그렇게 일하기 싫으면 나가서 유튜브나 보세요.',
];


//맞았을 때
let correctDlg = [
  '',
  'input match perfectly.',
  'Accepted',
  'Success.',
];
let correctDlgKor = [
  '',
  '입력값이 완벽히 일치합니다',
  '전송 완료',
  '성공.',
];

//7번 이상
let correctDlg1 = [
  'Go on',
  'You are doing Great.',
  'Program activatied',
  'The operation completed successfully.',
  'Random error just to annoy you.',
];
let correctDlgKor1 = [
  '계속하세요',
  '멋지게 해내고 있습니다',
  '프로그램이 활성화 되었습니다',
  '완벽히 작동되고 있습니다.',
  '당신을 짜증나게 하기 위한 무작위 에러입니다.',
];
//15번 이상
let correctDlg2 = [
  'Are you enjoying this? Why?',
  'Your device is lonely.',
  'Go outside and see the sun for once and enjoy life.',
  'Your device is sad. Please cheer it up.',
];
let correctDlgKor2 = [
  '이 일을 즐기고 있나요? 이유가 뭐죠?',
  '당신의 기기가 외로워합니다.',
  '밖에 나가서 햇볕도 보고 삶을 즐기세요.',
  '기기가 슬퍼합니다. 위로해 주세요',
];
//20번 이상
let correctDlg3 = [
  'Did you sleep well recently?',
  'Play with me.',
  'What are you going to eat for dinner?',
  'You heartless bastard. The only thing you care about is work!',
];
let correctDlgKor3 = [
  '최근에 잘 주무셨나요?',
  '저와 함께 놀아요',
  '저녁으로는 어떤걸 드실건가요?',
  '냉혈한 놈. 오로지 신경쓰는건 일밖에 없군!',
];

//다를때
let differentDlg = [
  '',
  "input doesn't match",
  'Bad Request',
  'Forbidden',
];
let differentDlgKor = [
  '',
  '입력값이 일치하지 않습니다',
  '요청 실패',
  '금지',
];

//6번 이상
let differentDlg1 = [
  'You have entered an illegal object name character',
  'Service Unavailable',
  'Catasrophic failure!', 
  "Found infected file: 'Eight.exe'. You can't remove it.",
];
let differentDlgKor1 = [
  '불법적인 오브젝트명을 입력하였습니다',
  '서비스 불가능 상태입니다',
  '치명적인 실패!',
  '감염된 파일을 발견했습니다: "Eight.exe". 삭제할 수 없습니다.',
];
//12번 이상
let differentDlg2 = [
  'Are you drunk?',
  "You have gotten so many error messages recently, so here is a random one to let you know that I don't care.",
  'Please leave a dislike.',
  'Wrong way.',
];
let differentDlgKor2 = [
  '술에 취했나요?',
  '지나치게 많은 에러메세지를 전송받고 있으므로, 제가 신경쓰지 않는다는 걸 알리고자 무작위 에러를 내보냅니다.',
  '싫어요를 남겨주세요.',
  '잘못된 시도',
];
//17번 이상
let differentDlg3 = [
  "I'm worried about you.",
  'If you want to do something useful, get a proper computer, and a mouse more than one button. Ask an adult to help you buy one.',
  "I'm not even going to try. I'm out... I'm out...",
];
let differentDlgKor3 = [
  '당신이 걱정됩니다.',
  '유용한 일을 하고 싶다면, 좋은 컴퓨터와 하나이상의 버튼이 있는 마우스를 장만하세요. 어른에게 구매를 부탁하세요.',
  '이제 시도조차 하지 않을겁니다. 전 갈거예요, 갈 거라고요...',
];

window.localStorage.clear();

window.localStorage.setItem('love', JSON.stringify(["No. You can't. Don't try.", '안됩니다. 하지마세요.']));
window.localStorage.setItem('stanley', JSON.stringify(['Focus on work', '일에 집중하세요']));
window.localStorage.setItem('unfunny', JSON.stringify(['UnFUnNy?!', '재미없다고요?!']));
window.localStorage.setItem('button', JSON.stringify(['You have to try 8 button first.', '먼저 8 버튼부터 시도해보세요.']));
window.localStorage.setItem('adventure line', JSON.stringify(['Forget the line.', '라인따위는 잊어버리세요.']));
window.localStorage.setItem('work', JSON.stringify(["We don't have a second to waste", '일초도 낭비할 시간 없어요.']));
window.localStorage.setItem('broom closet', JSON.stringify(["Some weird employee liked it so much.", '어떤 이상한 직원이 참 좋아한답니다.']));
window.localStorage.setItem('wife', JSON.stringify(['Are you still missing her?', '아직까지도 그녀를 그리워하고 있는건가요?']));
window.localStorage.setItem('story', JSON.stringify(["A nice cup of story would be fine", '한 잔의 스토리정도면 충분해요.']));
window.localStorage.setItem('bucket', JSON.stringify(["Yes. I saw one back there, why are you asking?", '저쪽에서 봤던것 같은데, 그건 왜 묻는건가요?']));


//알림창 메세지

//아무것도 입력하지 않았을 때
let nothingAlert = [
  'Nothing added.\n아무것도 입력되지 않았습니다.',
  'Nothing added.\n아무것도 입력되지 않았습니다.',
  'Nothing added.\n아무것도 입력되지 않았습니다.',
  'Are you sure?\n확실한가요?',
  'Emptyness. The wisdom of everything.\n공허함. 모든 것의 지혜가 됩니다.',
  "But... it's nothing,\n하지만... 아무것도 없잖아요,",
  'Is this all you can do?\n이게 최선인가요?',
  "You really don't want to lift a finger, don't you?\n손가락 하나 까딱하고 싶지 않으신가 보군요, 그렇죠?",
  "Here's a suprising news for you: That textbox can ACTUALLY be written!\n놀라운 소식이 있어요, 저 텍스트박스에 진짜로 뭔가를 적을수 있다는 것입니다!"
];

//저장했을 때
let saveAlert = [
  'Saved.\n저장되었습니다.',
  'Saved.\n저장되었습니다.',
  'Saved.\n저장되었습니다.',
  'I like that word.\n그 단어 마음에 듭니다.',
  "I'll save your secret.\n당신의 비밀을 지켜드리겠습니다.",
  'Do I have to say that?\n제가 그걸 말해야 하나요?',
  'Hm... I quite like that.\n흠... 그거 좋군요.',
  "Hm... I'll accept that.\n흠... 뭐 받아들이죠.",
  "I'll remember that.\n기억해두고 있을게요.",
  '...Okay.\n...알겠습니다.'
];