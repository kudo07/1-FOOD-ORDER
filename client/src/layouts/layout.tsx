import Header from '@/components/Header';

type Props = {
  children: React.ReactNode;
};
const layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="cotainer mx-auto flex-1 py-10"></div>
    </div>
  );
};
// 
export default layout;
// 52:00