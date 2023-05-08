import { FC, PropsWithChildren } from "react"
import { IMeta } from "./meta.interface"
import Head from "next/head"

const getTitle = (title: string) => `${title} | Red Cars`

const Meta: FC<PropsWithChildren<IMeta>> = ({title,desc, children}) => {
  return <>
    <Head>
      <title>{getTitle(title)}</title>

      <meta charSet="UTF-8"/>
      <meta name="description" content={desc}/>
      <meta name="keywords" content="HTML, CSS, JavaScript"/>
      <meta name="author" content="Seriknur Samgar"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      {
      desc ?
      <>
        <meta name="og:title" content={getTitle(title)}/>
        <meta name="og:description" content={desc}/>

      </>:
      <meta name="robots" content="noindex, nofollow"/>
      }
    </Head>
    {children}
  </>
}

export default Meta