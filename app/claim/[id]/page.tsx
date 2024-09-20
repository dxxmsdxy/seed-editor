import ClaimPage from '@/components/Editor/ClaimPage';

export default function Page({ params }: { params: { id: string } }) {
  return <ClaimPage params={params} />;
}