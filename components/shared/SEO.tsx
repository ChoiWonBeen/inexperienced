import Head from "next/head";
import { useRouter } from "next/router";

export default function SEO(){
  const router = useRouter();
  let titleText = "HOME";

  return (
    <Head>
      <title> {`To Do It! | ${titleText}`} </title>
    </Head>
  )
}