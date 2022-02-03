import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'

import { ExhibitionDetailLayout } from '../../components/layouts/exhibitions'
import Item, { DetailItemProps } from '../../components/exhibitions/DetailItem'

type DetailProps = {
  data: DetailItemProps | null,
  error: string
}

const Detail: any = (props: DetailProps) => {
  const { data, error } = props;

  return (
    <div>
      <Head>
        <title>Exhibition Detail</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ExhibitionDetailLayout>
          <Link href={'/exhibitions'}>
            <p className='text-xl text-blue-300 cursor-pointer hover:text-blue-600'>
              &#8592;&nbsp;BACK
            </p>
          </Link>
          {data && <Item { ...data } />}
          {error && <p>{error}</p>}
        </ExhibitionDetailLayout>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const id = context.params.id
  
  let res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/exhibitions/${id}`)

  if (res.status === 200) 
    return { props: { data: res.data.data, error: '' }}
  else if (res.status === 404) 
    return { props: { data: null, error: 'Item Not Found' }}
  else
    return { props: { data: null, error: 'Fetch Item Failed'}}
}

export default Detail

