export default function Page() {
  return (
    <div>
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_ID}`}>
        Login with github
      </a>
    </div>
  );
}
