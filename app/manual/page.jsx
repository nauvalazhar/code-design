import clsx from 'clsx';

export default function Page() {
  return (
    <div
      className={clsx(
        'relative p-10 lg:p-20',
        'bg-brand border-4 border-black',
        'shadow-solid'
      )}
    >
      <h1 className="font-display text-2xl lg:text-4xl">Manual</h1>
      <div className="mt-4 space-y-6 text-xl lg:text-2xl">
        <h2 className="font-display text-xl lg:text-2xl">Motivation</h2>
        <p>
          As a developer, it&apos;s important to continually challenge yourself
          and improve your skills. Code The Design was created with this goal in
          mind. We believe that the best way to learn and grow is by tackling
          real-life projects and challenges, rather than just following along
          with tutorials or practicing with contrived exercises.
        </p>
        <p>
          That&apos;s why we&apos;ve created a platform that offers a wide
          variety of challenges, inspired by real-world designs and use cases.
          These challenges are meant to push you to think creatively,
          problem-solve, and develop your skills as a developer.
        </p>
        <p>
          We understand that everyone has different levels of experience and
          expertise, which is why we&apos;ve included a subjective difficulty
          rating for each challenge. This allows you to choose challenges that
          are appropriate for your current skill level, and gradually work your
          way up as you improve.
        </p>
        <p>
          We also understand that the website is in a very early stage and far
          from being stable. Our focus is on getting the website visible as soon
          as possible, which is why we don&apos;t currently offer pre-exported
          assets and specific objectives for the challenges. However, we provide
          Figma design files for each challenge, which you can learn how the
          designs work and use to export any assets you need.
        </p>
        <p>
          We hope that Code The Design will serve as a valuable resource for you
          as you work to improve your skills and become a more confident and
          capable developer. Happy coding!
        </p>
        <h2 className="font-display text-xl lg:text-2xl">Technologies</h2>
        <p>
          You have the freedom to choose the technologies that you feel
          comfortable using in order to complete the challenges on our website.
          We do not have a preferred tech stack, and we welcome developers from
          all backgrounds and skill levels to participate in our challenges.
          Whether you prefer to use front-end technologies like HTML, CSS, and
          JavaScript, or back-end technologies like PHP, Python, or Ruby, you
          are free to use whatever tools and frameworks you feel most
          comfortable with. Our goal is to provide you with real-life use case
          challenges that allow you to showcase your skills and abilities, and
          we believe that the best way to do this is by giving you the freedom
          to choose the technologies that work best for you.
        </p>
        <h2 className="font-display text-xl lg:text-2xl">Contribution</h2>
        <p>
          We are glad that you are interested in contributing to our project. As
          a reminder, our project is open source and we welcome contributions
          from anyone who is interested in helping us build a better product.
        </p>
        <p>
          We believe that open source projects thrive when there is a diverse
          range of perspectives and skillsets involved. Whether you are a
          developer, designer, or simply have an idea that you think could
          improve the project, we encourage you to reach out and get involved.{' '}
        </p>
        <p>
          There are many ways you can contribute to our project. You can submit
          bug reports and feature requests, help us by testing new features and
          fixing issues, or even contribute code or design assets directly. No
          matter how you choose to get involved, your contribution will make a
          difference and help us to continue building a great product.
        </p>
      </div>
    </div>
  );
}
