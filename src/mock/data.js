import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Arman Abkar', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Arman Abkar Web Developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Arman',
  subtitle: "I'm Web Developer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Web Developer - focusing on frontend (mostly SPAs; React/Vue/Angular) , I also write RESTful & GraphQL APIs. / Cross platform mobile app developer. ',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1XucbYwjg8BGRtkmh8qYbQ6P1l0Ud0knY/view?usp=sharing', // if no resume, the button will not show up
};

// A Resume maker:
// www.resumemaker.online/es.php

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Reusable Components Library',
    info:
      'A library for sharing reusable components. Using React, Django, GraphQL & ReactMaterialUI.',
    info2: '',
    url: '',
    repo: 'https://github.com/armanabkar/ReusableComponents', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Send Email',
  email: 'armanabkar@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/armanabkar',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/armanabkar/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/armanabkar/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/armanabkar',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
