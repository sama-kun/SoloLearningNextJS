import { Children, FC, PropsWithChildren } from 'react';
import Header from './header/Header';
import Meta from '../seo/Meta';
import { IMeta } from '../seo/meta.interface';
import dynamic from 'next/dynamic';

// import { Titillium_Web } from 'next/font/google';

// const titillum = Titillium_Web({
//   weight:['300', '400', '600', '700'],
//   subsets:['latin'],
//   variable:'--titi'
// })

const DFooter = dynamic(()=> import('./Footer'),{
  ssr: false
})

const Layout: FC<PropsWithChildren<IMeta>>= ({children, title, desc}) => {
  return (
    <Meta title={title} desc={desc}>
      <Header/>
      <main>
      {children}
      </main>
      <DFooter/>
    </Meta>
  );
}

export default Layout;