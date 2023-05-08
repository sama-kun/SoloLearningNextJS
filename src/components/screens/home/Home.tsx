import { FC } from "react";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from "@/components/layouts/Layout";
import './Home.module.scss';
import { Titillium_Web } from 'next/font/google';

const titillum = Titillium_Web({
  weight:['300', '400', '600', '700'],
  subsets:['latin'],
  variable:'--titi'
})

const inter = Inter({ subsets: ['latin'] })

const Home: FC = () => {
    return (
      <Layout title="Home Page" desc="My first Meta">
        <h1 className={titillum.className} style={{color:'#fff'}}>
          Samgar font 
        </h1>
      </Layout>
    );
}


export default Home