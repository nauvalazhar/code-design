# Contributing

First of all, thank you for taking your valuable time to contribute.

Here, we would explain everything about all you need to know to start your first contribution to this project.

## UI Design Contribution
For UI design contributions, please consult the [UI Design Contribution Guideline document](https://github.com/nauvalazhar/code-design/blob/main/CONTRIBUTING_DESIGN.md).

## Code Contribution

### Tech Stacks

We use Next JS as our front-end framework, there are several reasons why we use Next JS. Objectively, Next JS has a better developer experience compared to others that are available on the market. Subjectively, because it's React, we all love React and so do you.
Besides React, we use Tailwind CSS for our styling tool. We don’t use a UI kit library here, since we design every UIs from scratch. Using a UI kit library in this kind of situation would only bring us to tears.
For any interactive components, we use Radix UI as our headless components.

### Requirements

Since the project is still not Dockerized yet, so you have to install all the following requirements into your machine:

- Node JS v16
- Yarn

### How To Run The Front-end App

Since we use Next JS as our framework, the development workflow is simple:

1. Fork this repository
2. Run the `cd` command into the project directory like `cd code-design`
3. Run the `yarn` command to start installing all the Node JS dependencies
4. To start the development server, run the `yarn dev` command

### How To Contribute

There are no formal steps that you need to follow to contribute, but here are some tips:
- Find some opening issues
- Have some discussion about the issue before you working on
- Confirm to the maintainers that you will working on the issue

Worth noting, please **do not** implement any new feature without opening a new issue first and have disscussion with the maintainers.

### Commit Your Changes

You need to follow [conventional commits](https://www.conventionalcommits.org/) for your commit message before you push all the changes.

### Submit Pull Request

To help the maintainers review your changes, you could follow the following tips:
- Write a detailed description if you made several changes in a single pull request
- You may make changes to some component's interactivity, please attach a related Gif or video so that the maintainers know the expected behavior
- Please attach a screenshot if your changes related to the UI in general
- Please put any link reference if you think that would help the maintainers

Currently, the only maintainer is [@nauvalazhar](https://github.com/nauvalazhar), so if your pull request has not been reviewed within 24 hours, feel free to mention him on Twitter or any other platform that he lives on.

---

Thank you for any kind of contribution to the project, it helps us to grow the project faster!
