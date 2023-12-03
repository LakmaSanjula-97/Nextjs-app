import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
import { resolve } from "styled-jsx/css";


async function fetchRepos() {
  const response = await fetch(
    'https://api.github.com/users/bradtraversy/repos',
    {
      next: {
        revalidate: 60,
      },
    }
  );

  await new Promise((resolve) => setTimeout(resolve, 1000));
  // wait for 1 second

  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {

  const repos = await fetchRepos();


  return (
    <div className="repos-container">
      <h2>REPOSITIRIES</h2>
      <ul className="repo-list">
        {repos.map((repo) => (
          <Link href={`/code/repos/${repo.name}`}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <div className="repo-details">
              <span>
                <FaStar /> {repo.stargazers_count}
              </span>
              <span>
                <FaCodeBranch /> {repo.forks_count}
              </span>
              <span>
                <FaEye /> {repo.watchers_count}
              </span>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default ReposPage
