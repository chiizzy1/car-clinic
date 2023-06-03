
import Link from 'next/link'
import { FC } from 'react'
import { buttonVariants } from './components';
import { RiHome2Line } from "react-icons/ri";


const PageNotFound: FC = () => {
  return (
    <section className='container pt-32 max-w-7xl mx-auto text-center flex flex-col gap-6 items-center'>
      <h1>Site not found...</h1>
      <p>Not Authorized.</p>
      <Link
        className={buttonVariants({
          variant: 'ghost',
          className: 'w-fit',
        })}
        href='/'>
        <RiHome2Line className='mr-2 h-4 w-4' />
        Back to home
      </Link>
    </section>
  )
}

export default PageNotFound