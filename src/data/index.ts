import { ProjectData } from '@interfaces/index';

export const resumeUrl = 'https://bit.ly/3d7lxAr';

const STACK = {
  REACT: 'React',
  NEXTJS: 'Next.js',
  TYPESCRIPT: 'TypeScript',
  JAVASCRIPT: 'JavaScript',
  SCSS: 'CSS(Sass)',
  CSS: 'CSS',
  UNITY: 'Unity(C#)',
  FIREBASE: 'Firebase',
};

export const techSkills = [
  STACK.TYPESCRIPT,
  STACK.REACT,
  STACK.SCSS,
  STACK.UNITY,
];

export const devProjects: ProjectData[] = [
  {
    title: 'Portfolio site',
    summary: '포트폴리오 사이트',
    stacks: [STACK.REACT, STACK.TYPESCRIPT, STACK.SCSS],
    role: '개인 프로젝트',
    desc: [
      'React, TypeScript를 사용해 현재 포트폴리오 사이트 제작',
      'HTML을 Symantic하게 마크업',
      '미디어쿼리를 사용해 반응형으로 개발',
    ],
    github: 'https://bit.ly/2USOkSX',
  },
  {
    title: 'Daily Planner',
    summary: 'Todo + Timer Web App',
    stacks: [STACK.REACT, STACK.TYPESCRIPT, STACK.SCSS],
    role: '개인 프로젝트',
    desc: [
      'React, TypeScript를 사용해 Todo + 시간관리 Application 개발',
      '데이터를 그래프, 표 등으로 시각화하여 제공',
      'React hooks를 사용한 상태관리',
    ],
    videos: [{ name: 'todo.mov', width: '100%' }],
    github: 'https://bit.ly/30SRry3',
    url: 'https://bit.ly/3fxKhn6',
  },
  {
    title: 'YPER-SHIELD',
    summary: '건별 탁송보험 서비스 - Web App Prototype',
    stacks: [STACK.NEXTJS, STACK.REACT, STACK.TYPESCRIPT, STACK.SCSS],
    role: '프론트엔드',
    roleDesc: '(기업 협업)',
    desc: [
      '기업에서 제플린을 통해 제공받은 디자인을 충실하게 구현',
      '공용 컴포넌트를 분리하고 재사용하여 DRY하게 작성',
      'React hooks를 사용한 상태관리',
    ],
    videos: [
      { name: 'yper1.mov', width: '49%' },
      { name: 'yper2.mov', width: '49%' },
    ],
  },
  {
    title: 'Board project',
    summary: '제로보드 게시판 클론 (비회원 CRUD, 댓글, 검색)',
    stacks: [STACK.REACT, STACK.JAVASCRIPT, STACK.CSS],
    role: '프론트엔드',
    desc: [
      'react-router-dom 모듈을 사용해 SPA 개발',
      '게시판 CRUD 기능별로 페이지 라우팅',
      'URL 파라미터를 사용한 게시물 검색결과 페이지 라우팅',
    ],
    videos: [{ name: 'board.mov', width: '100%' }],
  },
  {
    title: 'LoL 사운드 퀴즈',
    summary: 'Android 게임 앱',
    stacks: [STACK.UNITY, STACK.FIREBASE],
    role: '클라이언트, 서버',
    desc: [
      '유니티를 사용해 게임 클라이언트 개발',
      'Firebase를 사용해 유저 데이터 저장 및 랭킹 시스템 구현',
      'UI/UX 개발',
    ],
    images: [
      { name: 'lol1.webp', width: '49%' },
      { name: 'lol2.webp', width: '49%' },
    ],
    url: 'https://bit.ly/2Y6EsH9',
  },
];
export const gameDesignProjects: ProjectData[] = [
  {
    title: '도망가 친구들',
    summary: 'Android, iOS 게임 앱 (100만+ 다운로드)',
    role: '게임 기획',
    desc: ['시스템 기획자로 참여하여 게임 메커닉, 밸런싱 설계'],
    images: [{ name: 'runner.webp', width: '100%' }],
  },
  {
    title: '김준현의 공기놀이 for Kakao',
    summary: 'Android, iOS 게임 앱 (300만+ 다운로드)',
    role: '게임 기획',
    desc: ['시스템 기획자로 참여하여 게임 메커닉, 밸런싱 설계'],
    images: [{ name: 'jacks.png', width: '100%' }],
  },
  {
    title: 'Medieval Castle Defense',
    summary: 'Android 게임 앱 (400만+ 다운로드)',
    role: '게임 기획',
    desc: ['메인 기획자로 참여하여 게임 전체 시스템 기획, 밸런싱'],
    images: [{ name: 'td.jpeg', width: '100%' }],
  },
];
