import { Suspense } from 'react';
import Link from 'next/link';
import Repo from "@/app/components/Repo";
import RepoDirs from '@/app/components/RepoDir';

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        BACK TO REPOSITORY
      </Link>
      {/* <h2>{ name }</h2> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading Directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
      
    </div>
  );
}

export default RepoPage
