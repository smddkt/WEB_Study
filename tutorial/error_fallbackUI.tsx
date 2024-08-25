// import dynamic from 'next/dynamic';
// import { ErrorBoundary } from '@/app/(routes)/components/utils/ErrorBoundary';
// import ReloadMobileMessage from '../../components/utils/ErrorBoundary/ReloadMobileMessage';

// const JobPostList = dynamic(() => import('@/app/(routes)/components/Home/JobPostList'));

// <>
// <ErrorBoundary
//   fallbackRender={({ error, resetErrorBoundary }) => (
//     <ReloadMobileMessage resetErrorBoundary={resetErrorBoundary} />
//   )}
// >
//   <JobPostList searchText={searchText} isLogin={isLogin} codes={codes} list={jobPosts} />
// </>
// </ErrorBoundary>