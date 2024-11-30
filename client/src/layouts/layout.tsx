import Header from '@/components/Header';
import Hero from '@/components/Hero';

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="cotainer mx-auto flex-1 py-10">{children}</div>
    </div>
  );
};
//
export default Layout;
// 52:00
