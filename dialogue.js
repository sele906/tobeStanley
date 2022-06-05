

//대사모음

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
  'You do that again and see what happens…',
  'An error occurred while creating an error report.',
  'Time remaining: About 20304958393 hours.',
  "Run as fast as you can and don't look back.",
];
let nothingDlgKor2 = [
  '또 그런짓을 하면 어떻게 될지 두고봅시다.',
  '에러 메세지로 인해 에러가 발생하였습니다',
  '남은 시간: 20304958393 시간.',
  '뒤돌아보지 말고 최대한 빨리 달리세요.',
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
  "Error code 42: User Error. It's not our fault!",
  'The operation completed successfully.',
];
let correctDlgKor1 = [
  '계속하세요',
  '멋지게 해내고 있습니다',
  '프로그램이 활성화 되었습니다',
  '에러코드 42: 사용자 에러. 저희의 잘못이 아닙니다!',
  '완벽히 작동되고 있습니다.',
];
//15번 이상
let correctDlg2 = [
  'Are you enjoying this? Why?',
  'Did you sleep well recently?',
  'You must stop what you are doing and acknowledge me now',
  'Go outside and see the sun for once and enjoy life.',
  'Your device is lonely.',
  'Play with me.',
];
let correctDlgKor2 = [
  '이 일을 즐기고 있나요? 이유가 뭐죠?',
  '최근에 잘 주무셨나요?',
  '하던 것을 멈추고 저를 인지하세요',
  '밖에 나가서 햇볕도 보고 삶을 즐기세요.',
  '당신의 기기가 외로워합니다.',
  '저와 함께 놀아요',
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
  "I'm worried about you.",
  'If you want to do something useful, get a proper computer, and a mouse more than one button. Ask an adult to help you buy one.',
];
let differentDlgKor2 = [
  '술에 취했나요?',
  '지나치게 많은 에러메세지를 전송받고 있으므로, 제가 신경쓰지 않는다는 걸 알리고자 무작위 에러를 내보냅니다.',
  '싫어요를 남겨주세요.',
  '당신이 걱정됩니다.',
  '유용한 일을 하고 싶다면, 좋은 컴퓨터와 하나이상의 버튼이 있는 마우스를 장만하세요. 어른에게 구매를 부탁하세요.',
];

window.localStorage.clear();

// let eventDlg = {
//   love : ['What are you doing?', '뭐하시는 거죠?'],
//   stanley : ['Focus on work', '일에 집중하세요']
// };
window.localStorage.setItem('mycat', JSON.stringify(['Tom', '톰']));