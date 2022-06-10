window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

//대사모음 //2배?

//아무것도 없을 때
let nothingDlg = [
  // '',
  'Ehem. Hello?',
  "input doesn't exist.",
  'Not Acceptable',
  'wait...wait, what?',
];
let nothingDlgKor = [
  // '',
  '에헴, 저기요?',
  '입력값이 존재하지 않습니다',
  '허용되지 않는 요청입니다',
  '잠시만... 잠시만, 뭐라고요?'
];

//5번 이상
let nothingDlg1 = [
  "You're screwed.",
  "Can't find the object",
  'User error - Replace User',
  'Task failed successfully.',
  'No! No, no! What are you doing?!',
  'Are you teasing me?',
];
let nothingDlgKor1 = [
  '해고당하려 작정했군요.',
  '오브젝트를 찾을 수 없습니다',
  '사용자 에러 -  교체된 사용자',
  '성공적으로 실패하였습니다.',
  '이럴수는 없어요! 뭐하시는 거죠?!',
  '지금 절 놀리는 건가요?',
];
//10번이상
let nothingDlg2 = [
  'An error occurred while creating an error report.',
  'Time remaining: About 20304958393 hours.',
  "Run as fast as you can and don't look back.",
  "That's weird",
  "I'm sorry, is there a problem?",
];
let nothingDlgKor2 = [
  '에러 메세지로 인해 에러가 발생하였습니다',
  '남은 시간: 20304958393 시간.',
  '뒤돌아보지 말고 최대한 빨리 달리세요.',
  "이상하군요",
  "혹시 무슨 문제가 있나요?",
];
//15번 이상
let nothingDlg3 = [
  'Try input something, would you.',
  'For really?',
  "Choice is important. It's good for your health",
  "Just press the button. Is it that hard?",
  "You just couldn't do it, can't you.",
  "I don't understand.",
];
let nothingDlgKor3 = [
  '뭐라도 좀 입력해 보세요.',
  '정말로요?',
  '선택은 중요합니다. 건강에 좋기도 하고요.',
  '그냥 버튼을 누르는 것 뿐이잖아요. 그게 그렇게 어렵나요?',
  '그냥 하지 않는 거군요, 그렇죠?',
  "전 이해를 못하겠군요.",
];
//20번 이상
let nothingDlg4 = [
  "If you don't want to work THAT much, go out and watch some youtube.",
  "That blackness we were looking for",
  'Look at that cursor. Doing nothing.',
  "You're favorite button is 'Enter'. Let's give a big applause to 'Enter'.",
  'I wish I could show you some instructional video.',
  'You Win! Congratulations.',
];
let nothingDlgKor4 = [
  '그렇게 일하기 싫으면 나가서 유튜브나 보세요.',
  '우리가 찾던 암흑',
  '아무것도 하지 않는 저 커서를 보세요.',
  '당신이 가장 좋아하는 버튼은 "엔터"로군요. "엔터"버튼에 큰 박수를 보냅시다.',
  '교육 영상을 보여드리면 좋을텐데.',
  '당신이 이겼어요! 축하합니다.',
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

//5번 이상
let correctDlg0 = [
  "I'm quite enjoying this.",
  'Go on',
  'Program activatied',
  'You are doing Great.',
];
let correctDlgKor0 = [
  '꽤나 즐겁군요.',
  '계속하세요',
  '프로그램이 활성화 되었습니다',
  '멋지게 해내고 있습니다',
];

//10번 이상
let correctDlg1 = [
  "I can see you're burning with passion.",
  "You're so GOOD at this, everyone is admiring you!",
  'Random error just to annoy you.',
  'I applaud your effort, I really do.',
  "You're deeply fell in love with control.",
  "I'm glad that you liked buttons so much.",
];
let correctDlgKor1 = [
  '열정으로 불타는 것이 느껴지는군요.',
  '당신은 무척 뛰어나서, 모두가 당신을 우러러보고 있습니다!',
  '당신을 짜증나게 하기 위한 무작위 에러입니다.',
  '당신의 노력에 찬사를 보냅니다. 정말이에요.',
  '통제와 깊은 사랑에 빠졌군요.',
  '당신이 버튼을 좋아해서 다행힙니다.',
];
//15번 이상
let correctDlg2 = [
  'Are you enjoying this? Why?',

  'Go outside and see the sun for once and enjoy life.',
  'Happy?',
];
let correctDlgKor2 = [
  '이 일을 즐기고 있나요? 이유가 뭐죠?',

  '밖에 나가서 햇볕도 보고 삶을 즐기세요.',
  '즐거우신가요?',
];
//20번 이상
let correctDlg3 = [
  'Your device is lonely.',
  'Did you sleep well recently?',
  "Is this want you wanted? Living a controlled Life?",
  'What a workaholic.',
  'Your device is sad. Please cheer it up.',
];
let correctDlgKor3 = [
  '당신의 기기가 외로워합니다.',
  '최근에 잘 주무셨나요?',
  '이게 당신이 원하던 것인가요? 통제된 삶을 사는 것?',
  '일벌레같으니라고.',
  '기기가 슬퍼합니다. 위로해 주세요',
];
//25번 이상
let correctDlg4 = [
  'Happy, happy Stanley.',
  "I'm starting to wonder if you're an AI",
  "I've never seen an employee like you.",
  'Work, work, always work.',
  "It's that button causing all problem. You're drawn to it.",
];
let correctDlgKor4 = [
  '행복하고도 행복한 스탠리.',
  '당신이 AI가 아닌지 궁금해지기 시작했습니다.',
  '당신같은 직원을 본 적이 없어요.',
  '일, 일, 항상 일.',
  '모든 문제의 근원은 버튼입니다. 당신은 버튼에 제대로 빠졌어요.'
];

//다를때
let differentDlg = [
  'Do you want to be fired?',
  'Focus on work',
  "input doesn't match",
  'Bad Request',
  'Forbidden',
  "This isn't right at all.",
];
let differentDlgKor = [
  '해고되기를 바라는 겁니까?',
  '일에 집중하세요',
  '입력값이 일치하지 않습니다',
  '요청 실패',
  '금지',
  '전혀 다릅니다.',
];

//6번 이상
let differentDlg1 = [
  'You have entered an illegal object name character',
  'Service Unavailable',
  'Catasrophic failure!', 
  "Found infected file: 'Eight.exe'. You can't remove it.",
  "Ugh, it's ruined!",
  'What-really?',
];
let differentDlgKor1 = [
  '불법적인 오브젝트명을 입력하였습니다',
  '서비스 불가능 상태입니다',
  '치명적인 실패!',
  '감염된 파일을 발견했습니다: "Eight.exe". 삭제할 수 없습니다.',
  '윽, 완전히 망가졌군요!',
  '뭐-진짜로요?',
];
//12번 이상
let differentDlg2 = [
  'Are you drunk?',
  "You have gotten so many error messages recently, so here is a random one to let you know that I don't care.",
  'Please leave a dislike.',
  'Wrong way.',
  "Well, try the other one.",

];
let differentDlgKor2 = [
  '술에 취했나요?',
  '지나치게 많은 에러메세지를 전송받고 있으므로, 제가 신경쓰지 않는다는 걸 알리고자 무작위 에러를 내보냅니다.',
  '싫어요를 남겨주세요.',
  '잘못된 시도',
  '다른것을 시도해 보세요.',

];
//17번 이상
let differentDlg3 = [
  'I think you need a new glasses.',
  "It's incredible you weren't fired years ago.",
  'If you want to do something useful, get a proper computer, and a mouse more than one button. Ask an adult to help you buy one.',
  "I'm not even going to try. I'm out... I'm out...",
  'Do you really want to destroy our company?',

];
let differentDlgKor3 = [
  '제 생각에 당신은 새로운 안경이 필요한 것 같군요.',
  '몇 년 전에 해고당하지 않은게 신기할 정도군요.',
  '유용한 일을 하고 싶다면, 좋은 컴퓨터와 하나이상의 버튼이 있는 마우스를 장만하고 어른에게 구매를 부탁하세요.',
  '이제 시도조차 하지 않을겁니다. 전 갈거예요, 갈 거라고요...',
  '정말 우리 회사를 망가뜨리고 싶은 건가요?',

];
//25번 이상
let differentDlg4 = [
  "I'm worried about you.",
  "I think I know what the problem here. Some cat must be stepping on the keyboard.",
  "It's you. You are all causing this problem.",
  'Forget about this. What do you do after work?',
  'You do that again and see what happens…',
];
let differentDlgKor4 = [
  '당신이 걱정됩니다.',
  '무엇이 문제인지 알 것 같군요. 고양이가 자판을 밟고 있는게 틀림없어요.', 
  '당신이 이 모든 문제의 근원이란 말입니다.',
  '이 따위것은 잊어버리죠. 퇴근하면 뭐하시나요?',
  '또 그런짓을 하면 어떻게 될지 두고봅시다.',
];

//새로고침할 때마다 다시 시작하기
//window.localStorage.clear();

window.localStorage.setItem('love', JSON.stringify(["No. You can't. Don't try.", '안됩니다. 하지마세요.']));
window.localStorage.setItem('stanley', JSON.stringify(['Why are you endtering your own name? You narcissist.', '당신이름은 왜 입력하시는 거죠? 이런 나르시스트 같으니.']));
window.localStorage.setItem('unfunny', JSON.stringify(['UnFUnNy?!', '재미없다고요?!']));
window.localStorage.setItem('button', JSON.stringify(['You have to try 8 button first.', '먼저 8 버튼부터 시도해보세요.']));
window.localStorage.setItem('adventure line', JSON.stringify(['Forget the line.', '라인따위는 잊어버리세요.']));
window.localStorage.setItem('work', JSON.stringify(["We don't have a second to waste. Please do go on.", '일초도 낭비할 시간 없습니다. 어서 계속하세요.']));
window.localStorage.setItem('broom closet', JSON.stringify(["Some weird employee liked it so much.", '어떤 이상한 직원이 참 좋아한답니다.']));
window.localStorage.setItem('wife', JSON.stringify(['Are you still missing her?', '아직까지도 그녀를 그리워하고 있는건가요?']));
window.localStorage.setItem('story', JSON.stringify(["A nice cup of story would be fine", '한 잔의 스토리정도면 충분하죠.']));
window.localStorage.setItem('bucket', JSON.stringify(["Yes. I saw one back there, why are you asking?", '저쪽에서 봤던것 같은데, 그건 왜 묻는건가요?']));
window.localStorage.setItem('hello', JSON.stringify(["I don't think I have time for this", '이럴시간이 없는것 같은데요.']));
window.localStorage.setItem('hello narrator', JSON.stringify(["Wait... You're not stanley.", '잠시만... 당신은 스탠리가 아니잖아.']));
window.localStorage.setItem('narrator', JSON.stringify(["Yes, Why?", '왜 그러시죠?']));
window.localStorage.setItem('sleep', JSON.stringify(["Are you sleeping at work?", '회사에서 자려고요?']));


//알림창 메세지

//똑같은 걸 입력했을 때
let equalAlert = [
  'Word already exists. Proceed?\n이미 있는 단어입니다. 진행할까요?',
  'Word already exists. Continue?\n이미 있는 단어입니다. 계속할까요?',
  'I remember that word. Do you want to change it?\n그 단어 기억하고 있었어요. 변경할까요?',
  'Yes, the old thing needs to change. Please proceed.\n그래요, 오래된 것은 바뀌어야 하죠. 계속 진행하세요.',
];

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
  "Here's a suprising news for you: That textbox can ACTUALLY be written!\n놀라운 소식이 있어요, 저 텍스트박스에 진짜로 뭔가를 적을수 있다는 것입니다!",
  "It's empty. Can't you see?\n비었잖아요. 안보이시나요?"
];

//저장했을 때
let saveAlert = [
  'Saved.\n저장되었습니다.',
  'Saved.\n저장되었습니다.',
  'Saved.\n저장되었습니다.',
  'I like that word.\n그 단어 마음에 듭니다.',
  'Hm... I quite like that.\n흠... 그거 좋군요.',
  "Hm... I'll accept that.\n흠... 뭐 받아들이죠.",
  "I'll remember that.\n기억해두고 있을게요.",
  "It's our little secret.\n이건 우리사이의 작은 비밀입니다."
];
