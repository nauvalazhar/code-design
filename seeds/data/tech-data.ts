import { NewTech } from 'schemas/techs';

export const techsData: NewTech[] = [
  {
    name: 'JavaScript',
    slug: 'javascript',
    description:
      'JavaScript is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
    classification: 'language',
    environment: 'frontend',
  },
  {
    name: 'Python',
    slug: 'python',
    description:
      "Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant whitespace.",
    classification: 'language',
    environment: 'backend',
  },
  {
    name: 'Ruby',
    slug: 'ruby',
    description:
      'Ruby is an interpreted, high-level, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan.',
    classification: 'language',
    environment: 'backend',
  },
  {
    name: 'TypeScript',
    slug: 'typescript',
    description:
      'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.',
    classification: 'language',
    environment: 'frontend',
  },
  {
    name: 'Go',
    slug: 'go',
    description:
      'Go is a statically typed, compiled programming language designed at Google. Go is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency.',
    classification: 'language',
    environment: 'backend',
  },
  {
    name: 'Rust',
    slug: 'rust',
    description:
      'Rust is a multi-paradigm programming language designed for performance and safety, especially safe concurrency. Rust is syntactically similar to C++, but can guarantee memory safety by using a borrow checker to validate references.',
    classification: 'language',
    environment: 'backend',
  },
  {
    name: 'Kotlin',
    slug: 'kotlin',
    description:
      'Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version of its standard library depends on the Java Class Library.',
    classification: 'language',
    environment: 'backend',
  },
  {
    name: 'Swift',
    slug: 'swift',
    description:
      'Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. and the open-source community. Swift is designed to work with Apple’s Cocoa and Cocoa Touch frameworks and the large body of existing Objective-C code written for Apple products.',
    classification: 'language',
    environment: 'mobile',
  },
  {
    name: 'Dart',
    slug: 'dart',
    description:
      'Dart is a programming language designed for client development, such as for the web and mobile apps. It is developed by Google and can also be used to build server and desktop applications.',
    classification: 'language',
    environment: 'fullstack',
  },
  {
    name: 'Clojure',
    slug: 'clojure',
    description:
      'Clojure is a modern, dynamic, and functional dialect of the Lisp programming language on the Java platform. Like other Lisps, Clojure treats code as data and has a Lisp macro system.',
    classification: 'language',
    environment: 'backend',
  },
  {
    name: 'Elixir',
    slug: 'elixir',
    description:
      'Elixir is a functional, concurrent, general-purpose programming language that runs on the Erlang virtual machine. Elixir builds on top of Erlang and shares the same abstractions for building distributed, fault-tolerant applications.',
    classification: 'language',
    environment: 'backend',
  },
  {
    name: 'Haskell',
    slug: 'haskell',
    description:
      'Haskell is a standardized, general-purpose, purely functional programming language with non-strict semantics and strong static typing. It is named after logician Haskell Curry.',
    classification: 'language',
    environment: 'backend',
  },
  {
    name: 'Scala',
    slug: 'scala',
    description:
      'Scala is a general-purpose programming language providing support for functional programming and a strong static type system. Designed to be concise, many of Scala’s design decisions are aimed to address criticisms of Java.',
    classification: 'language',
    environment: 'backend',
  },
  {
    name: 'Julia',
    slug: 'julia',
    description:
      'Julia is a high-level, high-performance, dynamic programming language. While it is a general-purpose language and can be used to write any application, many of its features are well-suited for high-performance numerical analysis and computational science.',
    classification: 'language',
    environment: 'backend',
  },
  {
    name: 'Perl',
    slug: 'perl',
    description:
      'Perl is a family of two high-level, general-purpose, interpreted, dynamic programming languages. "Perl" refers to Perl 5, but from 2000 to 2019 it also referred to its redesigned "sister language", Perl 6, before the latter’s name was officially changed to Raku in October 2019.',
    classification: 'language',
    environment: 'backend',
  },
  {
    name: 'PHP',
    slug: 'php',
    description:
      'PHP is a general-purpose scripting language geared towards web development. PHP code is usually processed on a web server by a PHP interpreter implemented as a module, a daemon, or as a Common Gateway Interface (CGI) executable.',
    classification: 'language',
    environment: 'backend',
  },
  {
    name: 'C#',
    slug: 'csharp',
    description:
      'C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.',
    classification: 'language',
    environment: 'backend',
  },
  {
    name: 'C++',
    slug: 'cplusplus',
    description:
      'C++ is a general-purpose programming language created as an extension of the C programming language. C++ is regarded as a middle-level language, as it comprises a combination of both high-level and low-level language features.',
    classification: 'language',
    environment: 'backend',
  },

  // frameworks without logos
  {
    name: 'Angular',
    slug: 'angular',
    description:
      'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.',
    classification: 'framework',
    environment: 'frontend',
  },
  {
    name: 'Next.js',
    slug: 'nextjs',
    description:
      'Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications.',
    classification: 'framework',
    environment: 'frontend',
  },
  {
    name: 'Nuxt.js',
    slug: 'nuxtjs',
    description:
      'Nuxt.js is a free and open-source web application framework based on Vue.js, Node.js, Webpack, and Babel.js. The framework is advertised as a "meta-framework for universal applications".',
    classification: 'framework',
    environment: 'frontend',
  },
  {
    name: 'Gatsby',
    slug: 'gatsby',
    description:
      'Gatsby is a free and open-source framework based on React that helps developers build blazing-fast websites and apps.',
    classification: 'framework',
    environment: 'frontend',
  },
  {
    name: 'Django',
    slug: 'django',
    description:
      'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, Django takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel.',
    classification: 'framework',
    environment: 'backend',
  },
  {
    name: 'Ruby on Rails',
    slug: 'rubyonrails',
    description:
      'Ruby on Rails, or Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages.',
    classification: 'framework',
    environment: 'backend',
  },
  {
    name: 'Laravel',
    slug: 'laravel',
    description:
      'Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony.',
    classification: 'framework',
    environment: 'backend',
  },
  {
    name: 'Express.js',
    slug: 'expressjs',
    description:
      'Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.',
    classification: 'framework',
    environment: 'backend',
  },
  {
    name: 'Spring',
    slug: 'spring',
    description:
      'Spring is a popular and widely deployed open-source framework that helps developers build high quality applications faster. Spring is a lightweight framework that provides a well-organized container for your Java code and libraries.',
    classification: 'framework',
    environment: 'backend',
  },
  {
    name: 'Flask',
    slug: 'flask',
    description:
      'Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries. It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions.',
    classification: 'framework',
    environment: 'backend',
  },
  {
    name: 'Phoenix',
    slug: 'phoenix',
    description:
      'Phoenix is a web development framework written in Elixir which implements the server-side Model-View-Controller pattern. It is similar to other web frameworks like Ruby on Rails, but is built on the Elixir language and the Erlang VM.',
    classification: 'framework',
    environment: 'backend',
  },
  {
    name: 'Hapi.js',
    slug: 'hapijs',
    description:
      'Hapi.js is a rich framework for building applications and services. It enables developers to focus on writing reusable application logic instead of spending time building infrastructure.',
    classification: 'framework',
    environment: 'backend',
  },
  {
    name: 'React',
    slug: 'react',
    description:
      'React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.',
    classification: 'library',
    environment: 'frontend',
  },
  {
    name: 'Vue.js',
    slug: 'vuejs',
    description:
      'Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.',
    classification: 'library',
    environment: 'frontend',
  },
  {
    name: 'Redux',
    slug: 'redux',
    description:
      'Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.',
    classification: 'library',
    environment: 'frontend',
  },
  {
    name: 'jQuery',
    slug: 'jquery',
    description:
      'jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, and animation much simpler with an easy-to-use API that works across a multitude of browsers.',
    classification: 'library',
    environment: 'frontend',
  },
  {
    name: 'Webpack',
    slug: 'webpack',
    description:
      'Webpack is an open-source JavaScript module bundler. It is made primarily for JavaScript, but it can transform front-end assets like HTML, CSS, and images if the corresponding plugins are included.',
    classification: 'tool',
    environment: 'frontend',
  },
  {
    name: 'Babel',
    slug: 'babel',
    description:
      'Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.',
    classification: 'tool',
    environment: 'frontend',
  },
  {
    name: 'ESLint',
    slug: 'eslint',
    description:
      'ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code. It was created by Nicholas C. Zakas in 2013.',
    classification: 'tool',
    environment: 'frontend',
  },
  {
    name: 'Prettier',
    slug: 'prettier',
    description:
      'Prettier is an opinionated code formatter. It removes all original styling and ensures that all outputted code conforms to a consistent style.',
    classification: 'tool',
    environment: 'frontend',
  },
  {
    name: 'Jest',
    slug: 'jest',
    description:
      'Jest is a delightful JavaScript testing framework with a focus on simplicity. It works with projects using Babel, TypeScript, Node.js, React, Angular, Vue, and more.',
    classification: 'tool',
    environment: 'frontend',
  },
  {
    name: 'Cypress',
    slug: 'cypress',
    description:
      'Cypress is a front end automated testing application created for the modern web. Cypress is built on a new architecture and runs in the same run-loop as the application being tested.',
    classification: 'tool',
    environment: 'frontend',
  },
  {
    name: 'Storybook',
    slug: 'storybook',
    description:
      'Storybook is an open-source tool for developing UI components in isolation for React, Vue, and Angular. It makes building stunning UIs organized and efficient.',
    classification: 'tool',
    environment: 'frontend',
  },
  {
    name: 'Sass',
    slug: 'sass',
    description:
      'Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself.',
    classification: 'style',
    environment: 'frontend',
  },
  {
    name: 'Less',
    slug: 'less',
    description:
      'Less is a backwards-compatible language extension for CSS. This is the official documentation for Less, the language and Less.js, the JavaScript tool that converts your Less styles to CSS styles.',
    classification: 'style',
    environment: 'frontend',
  },
  {
    name: 'Stylus',
    slug: 'stylus',
    description:
      'Stylus is a revolutionary new language, providing an efficient, dynamic, and expressive way to generate CSS. Supporting both an indented syntax and regular CSS style.',
    classification: 'style',
    environment: 'frontend',
  },
  // css frameworks without logos
  {
    name: 'Tailwind CSS',
    slug: 'tailwindcss',
    description:
      'Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.',
    classification: 'style',
    environment: 'frontend',
  },
  {
    name: 'Bootstrap',
    slug: 'bootstrap',
    description:
      'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
    classification: 'style',
    environment: 'frontend',
  },
  {
    name: 'Bulma',
    slug: 'bulma',
    description:
      'Bulma is a free, open-source CSS framework based on Flexbox and used by more than 200,000 developers. Very easy to learn and use, Bulma is a CSS framework that is built with modern web technologies.',
    classification: 'style',
    environment: 'frontend',
  },
  {
    name: 'Foundation',
    slug: 'foundation',
    description:
      'Foundation is a responsive front-end framework. Foundation provides a responsive grid and HTML and CSS UI components, templates, and code snippets, including typography, forms, buttons, navigation, and other interface components, as well as optional functionality provided by JavaScript extensions.',
    classification: 'style',
    environment: 'frontend',
  },
  {
    name: 'Materialize',
    slug: 'materialize',
    description:
      'Materialize is a modern responsive front-end framework based on Material Design. It is a design language that combines the classic principles of successful design along with innovation and technology.',
    classification: 'style',
    environment: 'frontend',
  },
];
