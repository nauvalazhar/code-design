import { Category } from 'app/page';

import { Difficulty } from './difficulties';

export type Challenge = {
  name: string;
  slug: string;
  description: string;
  difficulty: Difficulty;
  category: Category;
  image: string;
  accent: `#${string}`;
  accent2: `#${string}`;
  figma: `https://www.figma.com/community/${string}`;
  designer: {
    name: string;
    avatar: `/${string}`;
    url: `https://www.figma.com/@${string}`;
  }[];
};

const challenges: Challenge[] = [
  {
    name: 'Lidia',
    slug: 'lidia',
    description:
      'Digital library landing page design with a modern and clean layout, this page features a striking hero section with a bold call-to-action, along with easy-to-scan service descriptions, reviews, and location sections.',
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/lidia.png',
    accent: '#D3DDF7',
    accent2: '#4475F2',
    figma: 'https://www.figma.com/community/file/1334838385104638513',
    designer: [
      {
        name: 'Muhammad Alfian',
        avatar: '/alfian.jpeg',
        url: 'https://www.figma.com/@alpi'
      }
    ]
  },
  {
    name: 'Al Nasr',
    slug: 'al-nasr',
    description:
      'A beautifully designed website for al hajj and umrah travel agency. This design features a stunning hero section with an eye-catching image, services, packages, airways accomadation, facilities, testimonials, and gallery. This design is perfect for any travel agency looking to attract new customers and take their business to new heights!',
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/al-nasr.png',
    accent: '#C1FFFA',
    accent2: '#1DA599',
    figma: 'https://www.figma.com/community/file/1261583437014427177',
    designer: [
      {
        name: 'Rafiq Al Hafizh Adha',
        avatar: '/rafiq.png',
        url: 'https://www.figma.com/@rafiqadha'
      }
    ]
  },
  {
    name: 'DressLy',
    slug: 'dressLy',
    description:
      "Introducing our latest fashion landing website design! This captivating design includes a stunning hero section with an eye-catching image, a partner section featuring prestigious brands, a carefully curated top selection section, a showcase of our best-selling items, an easy-to-follow 'How to Order' section, and a newsletter sign-up to stay updated with the latest trends and exclusive offers.",
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/dressly.png',
    accent: '#FDFDFD',
    accent2: '#E09370',
    figma: 'https://www.figma.com/community/file/1231249131456152871',
    designer: [
      {
        name: 'Muhammad Fauzan Alkhairi',
        avatar: '/fauzan.jpeg',
        url: 'https://www.figma.com/@muhammadfauzana'
      }
    ]
  },
  {
    name: 'Team Collaboration',
    slug: 'team-collaboration',
    description:
      'Take your team collaboration platform to new heights with a cutting-edge UI design that features a stunning hero section with an eye-catching illustration, along with sections on clients, capabilities, features, integrations, customer support, testimonials, and email subscriptions.',
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/team-collaboration.png',
    accent: '#D2D2FF',
    accent2: '#8988F8',
    figma: 'https://www.figma.com/community/file/1033884363291199985',
    designer: [
      {
        name: 'Irvan Moses',
        avatar: '/irvan.jpeg',
        url: 'https://www.figma.com/@irvan'
      }
    ]
  },
  {
    name: 'Online Learning',
    slug: 'online-learning',
    description:
      "A sleek and modern UI design that features an eye-catching hero section with a stunning illustration, along with sections on tools, about, features, integrations, testimonials, and blog. This design file is the ultimate learning tool for developers of all levels, providing valuable insights into the latest trends and industry best practices. Whether you're a beginner or an experienced developer, this design file is the perfect resource to take your skills to the next level.",
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/online-learning.png',
    accent: '#FFF3E4',
    accent2: '#F48C06',
    figma: 'https://www.figma.com/community/file/1029023791566203786',
    designer: [
      {
        name: 'Irvan Moses',
        avatar: '/irvan.jpeg',
        url: 'https://www.figma.com/@irvan'
      }
    ]
  },
  {
    name: 'Tailor',
    slug: 'tailor',
    description:
      'The UI design for a tailor landing page boasts a stunning hero section, an informative benefits section, a persuasive testimonial section, and a clear services section. This tailor-made design strikes the perfect balance between aesthetics and functionality, helping you to attract and convert visitors into customers and take your business to new heights!',
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/tailor.png',
    accent: '#DCD1FF',
    accent2: '#B299FF',
    figma: 'https://www.figma.com/community/file/1222591392920510949',
    designer: [
      {
        name: 'Arie',
        avatar: '/arie.jpeg',
        url: 'https://www.figma.com/@ariar'
      }
    ]
  },
  {
    name: 'Agenone',
    slug: 'agenone',
    description:
      'This digital agency landing website features a bold hero section with clear benefits, a comprehensive services section to showcase their offerings, an experience statistic to highlight their expertise, a portfolio of their past projects, testimonials from satisfied clients, and a prominent call-to-action to encourage potential clients to take the next step.',
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/agenone.png',
    accent: '#B1FCDD',
    accent2: '#7ADCB3',
    figma: 'https://www.figma.com/community/file/1220307995673140735',
    designer: [
      {
        name: 'Muhammad Afin',
        avatar: '/afin.jpeg',
        url: 'https://www.figma.com/@maafin_ui'
      }
    ]
  },
  {
    name: 'Omah',
    slug: 'omah',
    description:
      'A beautifully designed house listings website that features a stunning hero section with an advanced search form, making it easy for users to find their dream home. The website also includes a listing section with high-quality images and detailed information about each property. Users can read testimonials from satisfied clients and browse informative blog posts about buying and selling real estate. The newsletter section allows users to stay up-to-date with the latest property listings and industry news.',
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/omah.png',
    accent: '#FFD4B5',
    accent2: '#F58634',
    figma: 'https://www.figma.com/community/file/1213834016475813705',
    designer: [
      {
        name: 'Dzaki Muzhaffar',
        avatar: '/dzaki.jpeg',
        url: 'https://www.figma.com/@dzakiimuzh'
      }
    ]
  },
  {
    name: 'Suxz',
    slug: 'suxz',
    description:
      'This online course platform features a captivating hero section with an illustration on the right and a prominent call-to-action button. Below the hero section, you\'ll find a comprehensive list of available classes. The "About Us" section provides a brief overview of the platform\'s mission and values. The platform\'s partnerships with reputable companies are highlighted in the "Companies Partners" section. Testimonials from satisfied alumni add credibility to the platform in the "Testimonials" section. Finally, a clear and compelling call-to-action is displayed at the bottom of the page, encouraging visitors to take the next step in their education.',
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/suxz.png',
    accent: '#CDC9FD',
    accent2: '#A39BF9',
    figma: 'https://www.figma.com/community/file/1211276735395024758',
    designer: [
      {
        name: 'Irham Shidiq',
        avatar: '/irham.jpeg',
        url: 'https://www.figma.com/@irhammshidiq'
      }
    ]
  },
  {
    name: 'Construction',
    slug: 'Construction',
    description:
      'This new construction landing page design features a hero section with an engaging illustration background, a small stats section to showcase the company\'s success, and an experience section to highlight the team\'s expertise. The "How We Work" section provides a glimpse into the company\'s approach to construction projects, while the "Featured Projects" section showcases the company\'s portfolio. Testimonials from satisfied clients add social proof, and visitors can easily request a quote or get in touch via the "Send a Quote" and "Contact" sections.',
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/construction.png',
    accent: '#FFA873',
    accent2: '#FF7420',
    figma: 'https://www.figma.com/community/file/1209577571885853711',
    designer: [
      {
        name: 'BrainStew Studio',
        avatar: '/brainstew.jpeg',
        url: 'https://www.figma.com/@brainstewstudio'
      }
    ]
  },
  {
    name: 'Bubble Bash',
    slug: 'bubble-bash',
    description:
      "This agency landing page design features a striking hero section with bold text and a captivating image below it. A small stats section provides some key numbers to showcase the agency's success. The 'Our Services' section highlights the various services offered by the agency, while the 'Recent Projects' section displays some of the agency's most recent and impressive work. Testimonials from satisfied clients lend credibility to the agency's expertise. A clear callout encourages visitors to take action and get in touch.",
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/bubble-bash.png',
    accent: '#8DEFC2',
    accent2: '#34E392',
    figma: 'https://www.figma.com/community/file/1210888180615972372',
    designer: [
      {
        name: 'Glenn Vhalado',
        avatar: '/glenn.jpeg',
        url: 'https://www.figma.com/@glennvhalado'
      }
    ]
  },
  {
    name: 'Edufree',
    slug: 'edufree',
    description:
      "Edufree is a free education website that provides access to quality education for everyone. The design includes a visually appealing hero section with an illustration that represents the website's mission, followed by a section that highlights the website's partners and impressive statistics. The features section provides a glimpse of the website's offerings, while the about section gives more information about the organization. The recommended courses section helps users find the most relevant courses for their needs, and the testimonial section showcases feedback from happy users. The FAQ section answers common questions, and the register section allows users to sign up for the website. Finally, the blog section provides valuable insights and updates about the website's offerings.",
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/edufree.png',
    accent: '#CCCEFF',
    accent2: '#FCD980',
    figma: 'https://www.figma.com/community/file/1210964542508506746',
    designer: [
      {
        name: 'Dimas Rizky Maulana',
        avatar: '/dimas.jpeg',
        url: 'https://www.figma.com/@dimasrizkym'
      }
    ]
  },
  {
    name: 'Bertumbuh',
    slug: 'bertumbuh',
    description:
      'Bertumbuh is a trees planting organization website, featuring a hero section with an illustration of a tree and a call-to-action button, a section showcasing the total number of planted trees, an about section, a section explaining the importance of planting trees, a contributor section, a news section, and a newsletter.',
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/bertumbuh.png',
    accent: '#D3FDF9',
    accent2: '#72E8DD',
    figma: 'https://www.figma.com/community/file/1210968203740282497',
    designer: [
      {
        name: 'Dimas Rizky Maulana',
        avatar: '/dimas.jpeg',
        url: 'https://www.figma.com/@dimasrizkym'
      }
    ]
  },
  {
    name: 'Adoptme',
    slug: 'adoptme',
    description:
      'Adopting a pet has never been easier! Check out Adoptme, our new pet adoption website. With a simple and intuitive interface, you can easily browse through pets up for adoption, sponsor your favorite furry friend, and learn about our mission to help animals in need.',
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/adoptme.png',
    accent: '#C7D4E7',
    accent2: '#8CA8D0',
    figma: 'https://www.figma.com/community/file/1210923071730191941',
    designer: [
      {
        name: 'Yohana Marlina',
        avatar: '/yohana.jpeg',
        url: 'https://www.figma.com/@yohanamarlina'
      }
    ]
  },
  {
    name: 'Destinize',
    slug: 'destinize',
    description:
      'Discover your next dream vacation spot with our Destinize. Featuring a stunning hero illustration and easy-to-use reservation and find place features, you can find the perfect getaway in no time. Check out our gallery and blog for inspiration, and hear from happy travelers in our testimonial section. Have questions? Our FAQ has got you covered.',
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/destinize.png',
    accent: '#A9C0FB',
    accent2: '#749BFE',
    figma: 'https://www.figma.com/community/file/1210601516714970320',
    designer: [
      {
        name: 'Syauqizaidan Khairan Khalaf',
        avatar: '/syauqi.jpeg',
        url: 'https://www.figma.com/@syaufy'
      }
    ]
  },
  {
    name: 'Evenity',
    slug: 'evenity',
    description:
      "Evenity is an event management landing page that's sure to impress. With a striking hero section, informative 'about' section, venues showcases, past featured events, events schedule, and partner section, it's the ideal platform to promote your event management services.",
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/evenity.png',
    accent: '#C889DC',
    accent2: '#D13FFF',
    figma: 'https://www.figma.com/community/file/1210265697580558125',
    designer: [
      {
        name: 'Rafiq Al Hafizh Adha',
        avatar: '/rafiq.png',
        url: 'https://www.figma.com/@rafiqadha'
      },
      {
        name: 'Taufik Hidayatulloh',
        avatar: '/taufik.jpeg',
        url: 'https://www.figma.com/@opik'
      }
    ]
  },
  {
    name: 'Agency',
    slug: 'agency',
    description:
      "Agency landing page with a modern and clean layout, this page features a striking hero section with a large image and bold call-to-action, along with easy-to-scan service descriptions. The featured projects section showcases the agency's best work, while the pricing and team sections provide important information about rates and expertise. Testimonials, blog content, and client logos add social proof, and a newsletter signup helps keep users engaged.",
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/agency.png',
    accent: '#FFE479',
    accent2: '#FACC15',
    figma: 'https://www.figma.com/community/file/1208800587833558237',
    designer: [
      {
        name: 'Rafiq Al Hafizh Adha',
        avatar: '/rafiq.png',
        url: 'https://www.figma.com/@rafiqadha'
      }
    ]
  },

  {
    name: 'Clone Netflix',
    slug: 'clone-netflix',
    description:
      'A sleek and modern streaming service design, featuring a stunning hero section, an easy-to-navigate list of features, handpicked featured shows, and a clear pricing and subscription callout. Perfect for any streaming service looking to give their platform a fresh new look.',
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/clone-netflix.png',
    accent: '#FA6A74',
    accent2: '#CA1622',
    figma: 'https://www.figma.com/community/file/1207958204889189717',
    designer: [
      {
        name: 'Muhammad Fauzan Alkhairi',
        avatar: '/fauzan.jpeg',
        url: 'https://www.figma.com/@muhammadfauzana'
      }
    ]
  },
  {
    name: 'Hangeulin',
    slug: 'hangeulin',
    description:
      "Discover a new way to learn Korean with our language landing page. With a big hero section featuring stunning illustrations, a video element showcasing our top features, pricing options to suit any budget, testimonials from our satisfied learners, and a call-to-action to join our community, you'll be well on your way to speaking Korean fluently.",
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/hangeulin.png',
    accent: '#FFDF87',
    accent2: '#F4C237',
    figma: 'https://www.figma.com/community/file/1207962513945950554',
    designer: [
      {
        name: 'Muhammad Fauzan Alkhairi',
        avatar: '/fauzan.jpeg',
        url: 'https://www.figma.com/@muhammadfauzana'
      }
    ]
  },
  {
    name: 'NFT',
    slug: 'nft',
    description:
      "Get a glimpse of the world of NFTs with this sleek and stylish landing page design. Featuring a big hero component with a prominent search bar, this design showcases the latest auctions and top sellers, along with an overview of the different categories available. Whether you're an experienced NFT collector or just starting out, this landing page has everything you need to dive right in.",
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/nft.png',
    accent: '#A889FD',
    accent2: '#7545FA',
    figma: 'https://www.figma.com/community/file/1203011565411594218',
    designer: [
      {
        name: 'Mahyu Aspant',
        avatar: '/mahyu.jpeg',
        url: 'https://www.figma.com/@mahyuaspant'
      }
    ]
  },
  {
    name: 'Movies',
    slug: 'movies',
    description:
      "This UI design is for a movie detail page that showcases all the relevant information about a particular film. The design features an eye-catching hero component with a large header image and movie title, along with sections for the storyline, rating, and more. The color palette is carefully selected to complement the movie's artwork and tone, and the typography is clear and easy to read. The overall look and feel of the design is modern and engaging, and it provides a great user experience for movie enthusiasts who are looking to learn more about their favorite films.",
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/movies.png',
    accent: '#ABBEF5',
    accent2: '#5380FF',
    figma: 'https://www.figma.com/community/file/1205860363512453151',
    designer: [
      {
        name: 'Taufik Hidayatulloh',
        avatar: '/taufik.jpeg',
        url: 'https://www.figma.com/@opik'
      }
    ]
  },
  {
    name: 'Kourse',
    slug: 'kourse',
    description:
      "The Kourse Hero component is a visually striking and highly functional element of an online course website. It features a clean and modern design, with a large headline on the left side and a featured course card on the right side. Under both the headline and course card, there are two key features that highlight the benefits and features of the online courses offered. The hero component is a key part of the website's overall aesthetic and user experience, and can be used to showcase the benefits and features of the online courses, including their quality, relevance, and convenience.",
    difficulty: 'Intermediate',
    category: 'Component',
    image: '/kourse.png',
    accent: '#FBBC99',
    accent2: '#FF5C00',
    figma: 'https://www.figma.com/community/file/1189172588130726972',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: 'The Malaka',
    slug: 'the-malaka',
    description:
      'The Malaka is a landing page for a book product. The design features a large hero section with a catchy headline and a 3D illustration of the book. The page also includes several sections such as a preface from the designer, sample screenshots, testimonials, pricing information, and information about the designer. The page is designed to be visually appealing and user-friendly, making it easy for visitors to learn more about the book and purchase a copy.',
    difficulty: 'Expert',
    category: 'Page',
    image: '/the-malaka.png',
    accent: '#90F7FE',
    accent2: '#00BAC7',
    figma: 'https://www.figma.com/community/file/1064953526065340295',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: 'Priced',
    slug: 'priced',
    description:
      'The Priced page is a key element of a cloud storage website, as it is where users can learn about the different pricing plans and options available to them. The page features a clean and modern design, with a headline under the nav component and three pricing cards with features checklist and CTA on each. The pricing cards clearly and concisely describe the different plans and their features, making it easy for users to compare and contrast the options. The pricing page is an important part of the user journey, as it helps users understand the costs and benefits of using the cloud storage service, and helps them make informed decisions about which plan is best for them.',
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/priced.png',
    accent: '#DBD6FF',
    accent2: '#7C67FE',
    figma: 'https://www.figma.com/community/file/1189234166168014977',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: 'digidaw',
    slug: 'digidaw',
    description:
      "The digidaw Hero component is a visually striking and highly functional element of a UI kit collection website. It features a clean and modern design, with a headline and call-to-action button on the left side and an illustration of UI elements on the right side. Under the left side, there is a single key feature that highlights the benefits and features of the UI kits offered on the website. The hero component is a key part of the website's overall aesthetic and user experience, and can be used to showcase the benefits and features of the UI kit collection, including the variety of kits available and their quality and usability.",
    difficulty: 'Intermediate',
    category: 'Component',
    image: '/digidaw.png',
    accent: '#9AFFE7',
    accent2: '#FFB802',
    figma: 'https://www.figma.com/community/file/1189141799778804767',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: 'Jobless',
    slug: 'jobless',
    description:
      "The Jobless Hero component is a visually striking and highly functional element of a job board website. It features a clean and modern design, with a centered headline, subheadline, and two call-to-action buttons. Underneath the headline and subheadline, there are three featured jobs that showcase the variety and quality of the job openings available on the website. The hero component is a key part of the website's overall aesthetic and user experience, and can be used to showcase the benefits and features of the job board, including the variety of job openings available and the ease of use of the search and application process.",
    difficulty: 'Intermediate',
    category: 'Component',
    image: '/jobless.png',
    accent: '#ACB5FF',
    accent2: '#C274FF',
    figma: 'https://www.figma.com/community/file/1189127953764369425',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: 'Nowted',
    slug: 'nowted',
    description:
      "The Nowted Hero component is a visually striking and highly functional element of a note-taking app website. It features a clean and modern design, with a centered headline, subheadline, and a single call-to-action button inviting users to try the product. Underneath the headline and subheadline, there is a screenshot of the note-taking app, highlighting its key features and benefits. The hero component is a key part of the website's overall aesthetic and user experience, and can be used to showcase the benefits and features of the note-taking app, including its intuitive interface and advanced organization tools.",
    difficulty: 'Intermediate',
    category: 'Component',
    image: '/nowted.png',
    accent: '#8688F3',
    accent2: '#B490FF',
    figma: 'https://www.figma.com/community/file/1189112793273091079',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: 'Enlighten',
    slug: 'enlighten',
    description:
      "The Enlighten coming soon page is a visually striking and highly functional element of a website. It features a clean and modern design, with two distinct sides. On the left side, there is the website's name, a headline, a subheadline, and an email form for users to subscribe for notifications when the website goes live. On the right side, there is a photograph that adds visual interest and helps to set the tone and mood of the website. It is a key part of the website's overall aesthetic and user experience, and can be used to create excitement and anticipation for the website's launch.",
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/enlighten.png',
    accent: '#9CAEEC',
    accent2: '#5A79E7',
    figma: 'https://www.figma.com/community/file/1188881154147948453',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: 'Nowted App',
    slug: 'nowted-app',
    description:
      "Nowted is a visually striking and highly functional note-taking app with a variety of features and tools to help users organize, edit, and access their notes. The app has a clean and modern design, with a three-column layout that allows users to easily navigate and access their notes. The first column is a sidebar that contains a list of folders, recent opened files, a search function, and other features. The second column is a list of the files in the opened folder, and the third column is a WYSIWYG (What You See Is What You Get) editor that allows users to edit and format their notes. It is a key part of the user's overall note-taking experience, and can be used to organize and access notes in a variety of ways.",
    difficulty: 'Advanced',
    category: 'App',
    image: '/nowted-app.png',
    accent: '#8688F3',
    accent2: '#B490FF',
    figma: 'https://www.figma.com/community/file/1188856976000269208',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: 'Holadok',
    slug: 'holadok',
    description:
      "The Holadok Hero component is a visually striking and highly functional element of a doctor appointment website. It features a clean and modern design, with a left side that includes a headline, subheadline, and a single call-to-action button inviting users to make an appointment. On the right side, there is a photograph of a doctor, along with a single user testimonial card. Underneath both sides, there are three key features that highlight the benefits and services of the website. It is a key part of the website's overall aesthetic and user experience, and can be used to showcase the benefits and features of the website, including its easy appointment booking process, a wide range of medical specialties and services, and convenient location and hours.",
    difficulty: 'Easy',
    category: 'Component',
    image: '/holadok.png',
    accent: '#9BEAE0',
    accent2: '#647DD4',
    figma: 'https://www.figma.com/community/file/1186316679638101335',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: 'Testimoni',
    slug: 'testimoni',
    description:
      "The Testimoni testimonial section is a visually striking and highly functional element of a website. It features a clean and modern design, with a gradient headline and prev/next buttons to control the carousel of user testimonials. The carousel is easy to navigate, with a list of user testimonials that highlight the benefits and experiences of using the website or product. It is a key part of the website's overall aesthetic and user experience, and can be used to showcase the positive experiences and feedback of real users, helping to build trust and credibility with potential customers.",
    difficulty: 'Intermediate',
    category: 'Component',
    image: '/testimoni.png',
    accent: '#FEA080',
    accent2: '#E248D5',
    figma: 'https://www.figma.com/community/file/1186278277855305013',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: 'ChatFlow Landing',
    slug: 'chatFlow-landing',
    description:
      "The ChatFlow landing page is a visually striking and highly functional element of a website. It features a clean and modern design, with angular gradient styles and a variety of sections that showcase the features, benefits, and pricing of the ChatFlow customer live chat support service. It is a key part of the website's overall aesthetic and user experience, and can be used to showcase the features and benefits of the ChatFlow service, as well as to provide detailed pricing information and a call-to-action for users to sign up for the service. The landing page is an effective way to introduce users to the ChatFlow service, and to encourage them to try it out.",
    difficulty: 'Advanced',
    category: 'Page',
    image: '/chatflow-landing.png',
    accent: '#63B0F8',
    accent2: '#FCC47D',
    figma: 'https://www.figma.com/community/file/1186225915682214172',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: 'ChatFlow',
    slug: 'chatFlow',
    description:
      "The ChatFlow widget is a highly functional and visually appealing element of a website. It features a toggle button that serves as a trigger to open and close the floating live chat widget. The widget itself is a card-style design, with a headline, input text field, and a list of conversations between the user and the customer support agent. The ChatFlow widget is designed with two different modes: light and dark, allowing users to choose the one that best fits their preferences and needs. It is a key part of the website's overall user experience, providing users with an easy and convenient way to get live support and assistance.",
    difficulty: 'Intermediate',
    category: 'App',
    image: '/chatflow.png',
    accent: '#C6BDFA',
    accent2: '#FB72C7',
    figma: 'https://www.figma.com/community/file/1186160562744519943',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: 'Profile Hover',
    slug: 'profile-hover',
    description:
      "The Profile Hover card is a simple yet effective element of a website or app that provides users with quick and easy access to important information about other users. It appears as a card when a user hovers over the avatar of another user, and displays details such as the user's name, username, bio, and total number of followers and following. It also includes a follow button that allows users to easily follow or unfollow other users. The Profile Hover card is a useful and convenient way for users to learn more about each other and connect with one another. It is a key part of the website or app's overall user experience and social functionality.",
    difficulty: 'Intermediate',
    category: 'Component',
    image: '/profile-hover.png',
    accent: '#65EFE7',
    accent2: '#BBA9F6',
    figma: 'https://www.figma.com/community/file/1185936637370242220',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: 'Pricy',
    slug: 'pricy',
    description:
      'Pricy is a clean and modern pricing page designed for a web hosting provider. It features a centered headline and subheadline, and three different pricing cards that showcase the various web hosting plans available. Each card includes a list of features and a call-to-action button that allows users to choose the plan that best suits their needs. With its clear and easy-to-understand layout, Pricy makes it simple for users to compare and select the right web hosting plan for their needs.',
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/pricy.png',
    accent: '#88D4FF',
    accent2: '#00A3FF',
    figma: 'https://www.figma.com/community/file/1185998177179693269',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: 'Faceless',
    slug: 'faceless',
    description:
      'Faceless is a sleek and modern login page designed to provide a smooth and intuitive user experience. The page is split into two sides: the left side features a login form with the brand logo, headline, and other relevant information, while the right side showcases a large photograph and a navigation bar at the top. The login form includes fields for users to enter their email and password, as well as a button to submit their login request.',
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/faceless.png',
    accent: '#6DDAF1',
    accent2: '#1FB1D0',
    figma: 'https://www.figma.com/community/file/1185928405696612520',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: 'Musix Player',
    slug: 'musix-player',
    description:
      'Musix Player is a simple music player that allows you to play, pause, and skip through tracks in a playlist. It also displays the progress of the current track. The design includes a playlist that sits underneath the player controls.',
    difficulty: 'Advanced',
    category: 'Component',
    image: '/musix-player.png',
    accent: '#FDCFA6',
    accent2: '#A395FC',
    figma: 'https://www.figma.com/community/file/1185892344067377288',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: 'Comments',
    slug: 'comments',
    description:
      "The Comments UI design is a visually appealing and functional comments section for a website. It includes a comment form with the user's name and avatar displayed within the input field, encouraging users to engage with the content. The design also features a list of comments from other users, each with an upvote/downvote button for easy interaction. The layout is well-organized and user-friendly, making it easy for users to leave their own comments and engage with the content of others.",
    difficulty: 'Intermediate',
    category: 'Component',
    image: '/comments.png',
    accent: '#8CCAFF',
    accent2: '#0089FF',
    figma: 'https://www.figma.com/community/file/1185876619562059904',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: 'Hoster Support',
    slug: 'hoster-support',
    description:
      'Hoster Support is a knowledge base page for a web hosting provider. The page is designed to help users find answers to their questions quickly and easily. It has a header with a clear and concise headline, as well as a search input so users can search for specific articles. The main content of the page is a list of knowledge base articles, organized into different categories. Overall, the Hoster Support design is a user-friendly and efficient resource for web hosting support.',
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/hoster-support.png',
    accent: '#C1C1FC',
    accent2: '#8888FF',
    figma: 'https://www.figma.com/community/file/1185627568002793481',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: 'Twitter Embed',
    slug: 'twitter-embed',
    description:
      "Twitter Embed is a simple card that displays a single tweet from Twitter. It includes the user's avatar, name, username, the tweet itself, the total number of likes, and the date it was published. The design is intended to be easily integrated into other websites and provides a way for users to view and interact with a tweet without leaving the page they are on. The design is clean and intuitive, making it easy for users to quickly and easily access the content they are interested in.",
    difficulty: 'Beginner',
    category: 'Component',
    image: '/twitter-embed.png',
    accent: '#AADFFE',
    accent2: '#1DA1F2',
    figma: 'https://www.figma.com/community/file/1185598379810917358',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: 'Swiftship',
    slug: 'swiftship',
    description:
      'Swiftship is a sleek and modern hero component for a package delivery service website. The design features a dark background with blue accents on the buttons and key features cards. The left side of the component includes a headline, subheadline, and CTA button. The right side features an illustration of a delivery. Underneath both of these elements are three key features of the delivery service.',
    difficulty: 'Intermediate',
    category: 'Component',
    image: '/swiftship.png',
    accent: '#A1B0FF',
    accent2: '#7288FF',
    figma: 'https://www.figma.com/community/file/1185561395612371921',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: 'The Starter',
    slug: 'the-starter',
    description:
      'The Starter is a personal website design featuring a visually striking hero section with a background image and purple overlay. The hero includes a headline, subheadline, and a call-to-action (CTA) button. The rest of the page is divided into several sections, including a profile section and a contact form. This design is meant to provide a professional and attractive online presence for individuals.',
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/the-starter.png',
    accent: '#FBF2A3',
    accent2: '#A281FE',
    figma: 'https://www.figma.com/community/file/1184411948334356434',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: 'Grolin',
    slug: 'grolin',
    description:
      'Grolin is an authentication page designed for a social media accounts manager. The page is split into two columns. On the left side, there is a gradient-style background with the brand logo, headline, and description. Below these elements, there are several social media supported cards. On the right side, there is a login form for users to sign in to their accounts.',
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/grolin.png',
    accent: '#F4C195',
    accent2: '#FC728B',
    figma: 'https://www.figma.com/community/file/1107456640392351621',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: 'The Zeitplan',
    slug: 'the-zeitplan',
    description:
      "The Zeitplan is a landing page for a todo-list mobile app. The page features a large hero image that showcases a screenshot of the app. The page also includes several sections that highlight the app's features and provide information on how to download the app.",
    difficulty: 'Advanced',
    category: 'Page',
    image: '/the-zeitplan.png',
    accent: '#FDB6AA',
    accent2: '#FF745E',
    figma: 'https://www.figma.com/community/file/1061304266818856605',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: 'Wumbo',
    slug: 'wumbo',
    description:
      'Wumbo is a landing page designed for Figma social media content templates. The page features a modern and clean design, with a variety of sections that showcase the templates and their capabilities. The features section highlights the unique elements of the templates, such as the ability to easily customize colors and text. The demo section allows users to see the templates in action, with a preview of what the final product will look like. The license section details the terms of use for the templates, and the preview section allows users to see a selection of the templates before committing to a purchase. Overall, Wumbo is an effective and user-friendly landing page that is sure to attract social media marketers and content creators.',
    difficulty: 'Advanced',
    category: 'Page',
    image: '/wumbo.png',
    accent: '#ABCFFF',
    accent2: '#6FA2FA',
    figma: 'https://www.figma.com/community/file/1061539222183309028',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: 'Authed',
    slug: 'authed',
    description:
      'Authed is a modern and sleek authentication page designed for an online course website. The page features a two-column layout, with a form on the left side and an illustration and headline with a satirical style on the right. The form allows users to easily sign in or create an account, ensuring a smooth and seamless process for accessing course content. The page is designed to be user-friendly and intuitive, making it easy for users to navigate and find what they need. The illustration and headline on the right add a touch of personality to the page, making it stand out from traditional authentication pages.',
    difficulty: 'Advanced',
    category: 'Page',
    image: '/authed.png',
    accent: '#C3C0FD',
    accent2: '#8179FD',
    figma: 'https://www.figma.com/community/file/1061307506373261985',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: 'Collosal',
    slug: 'collosal',
    description:
      "Collosal is a visually stunning landing page designed for a software house company. With several pages including a home page, services page, about page, and even a blog page, this design is perfect for showcasing the capabilities of the company. The theme is dark with a blurry background and gradient, giving it a glassmorphism effect that is sure to impress. The various pages allow you to highlight the company's services, team, and culture, making it easy for potential clients to get a feel for what you have to offer. With a responsive design that adapts to different screen sizes and devices, Collosal ensures an optimal user experience for all visitors.",
    difficulty: 'Master',
    category: 'Page',
    image: '/collosal.png',
    accent: '#BAB4FF',
    accent2: '#9969FF',
    figma: 'https://www.figma.com/community/file/1061303456713302684',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: "Chat n' rechat",
    slug: 'chat-n-rechat',
    description:
      "Chat n' Rechat is a landing page for a mobile chatting app, featuring a clean and modern design with a hero component showcasing the app illustration. The page includes several sections, including a list of key features, a call-to-action for users to download the app, and a frequently asked questions section.",
    difficulty: 'Expert',
    category: 'Page',
    image: '/chat-n-rechat.png',
    accent: '#CDD8FF',
    accent2: '#4A72FF',
    figma: 'https://www.figma.com/community/file/1061306005803309728',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: 'MSTSKP',
    slug: 'mstskp',
    description:
      'MSTSKP is a landing page for a social media analytics tool. The design features a dark, striking hero component with an illustration underneath, as well as several sections including features and a blog. The design incorporates dummy content text with a satirical style, adding personality and character to the overall look and feel of the page.',
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/mstskp.png',
    accent: '#FFD8A5',
    accent2: '#FFA32A',
    figma: 'https://www.figma.com/community/file/1064536438320565974',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: 'Epictetus',
    slug: 'epictetus',
    description:
      'Epictetus is a modern and stylish blogging platform that features a dark design. The home page features a single, large featured post at the top, with a grid of smaller articles below. Navigating to other pages, such as the search page or a single article page, provides users with a seamless and intuitive experience. With its sleek look and user-friendly design, Epictetus is sure to be a hit with bloggers and readers alike.',
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/epictetus.png',
    accent: '#C0C6D1',
    accent2: '#879DC2',
    figma: 'https://www.figma.com/community/file/1061308766782882467',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  },
  {
    name: "The Sugiharto's",
    slug: 'the-sugihartos',
    description:
      "The Sugiharto's is a personal website designed with a dark style. It features several pages, including a home page with a headline, subheadline, and illustration of favorite projects, as well as overview, skills, and contact pages. The website showcases the owner's personal brand and allows visitors to learn more about their skills and work.",
    difficulty: 'Intermediate',
    category: 'Page',
    image: '/the-sugihartos.png',
    accent: '#9CFFE7',
    accent2: '#2BA386',
    figma: 'https://www.figma.com/community/file/1061308081642950306',
    designer: [
      {
        name: 'Nauval',
        avatar: '/nauval.jpg',
        url: 'https://www.figma.com/@mhd'
      }
    ]
  }
];

export default challenges;
