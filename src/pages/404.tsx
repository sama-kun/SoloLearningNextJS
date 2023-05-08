import Layout from '@/components/layouts/Layout'
import { NextPage } from 'next'
import Image from 'next/image';


const NotFound: NextPage = () => {
  return <Layout title='Page Not Found' desc='Invalid path'>
    <div style={{
        display:'flex',
        textAlign:'center',
        justifyContent: 'center'
      }}
    >
      <Image 
        priority
        src='/404.png' 
        alt=""
        width={450}
        height={433}
      />
    </div>
  </Layout>
}

export default NotFound