import { AdminAuthForm, buttonVariants } from "@/app/components";
import Link from "next/link";
import { RiHome2Line } from "react-icons/ri";

const LoginPage = () => {
  return (
    <>
      <div className='absolute inset-0 mx-auto container flex h-screen flex-col items-center justify-center'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 max-w-lg'>
          <div className='flex flex-col items-center gap-6 text-center'>
            <Link
              className={buttonVariants ({
                variant: 'ghost',
                className: 'w-fit',
              })}
              href='/'>
              <RiHome2Line className='mr-2 h-4 w-4' />
              Back to home
            </Link>

            <h2>Welcome back!</h2>
            <p>Please sign in using your Google account.</p>
          </div>
          <AdminAuthForm />
        </div>
      </div>
    </>
  )
};

export default LoginPage;