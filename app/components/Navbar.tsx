import Image from "next/image";
import { close, logo, menu } from "../../assets";
import { navLinks } from "../../constants";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import SignInButton from "./ui/SignInButton";
import SignOutButton from "./ui/SignOutButton";
import { authOptions } from "@/lib/auth";

export default async function Navbar() {
  const session = await getServerSession(authOptions)
// console.log(session?.user.role)
  return (
    <div className='fixed backdrop-blur-sm bg-white z-50 top-0 left-0 right-0 h-16 shadow-lg flex items-center justify-between'>
      <div className='container max-w-7xl mx-auto w-full flex justify-between items-center'>
        <Link href='/' className="text-2xl text-dimPurple font-bold">
          Car Clinic
        </Link>

        {/* <div className='md:hidden'>
          <ThemeToggle />
        </div> */}

        <div className='hidden md:flex gap-4'>
          {/* <ThemeToggle /> */}
          {/* <Link
            href='/documentation'
            className={buttonVariants({ variant: 'ghost' })}>
            Documentation
          </Link> */}
          {session && session?.user.role === "AUTHORIZED"? (
            <>
              <Link
                className={buttonVariants({ variant: 'ghost' })}
                href='/dashboard'>
                Dashboard
              </Link>
              <SignOutButton page='home' />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </div>
  )
}
