import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return <div>Car repairs page

    {/* Add ability for admin to add/delete repair */}

    <p>Edit desc</p>
    <p>cost</p>
    <p>repair status</p>
    <ul>
        <p>handle with drop down menu</p>
        <p>Options:</p>
        <li>confirmed</li>
        <li>in progress</li>
        <li>complete</li>
    </ul>
    <p>finish date</p>
    <p>payment status</p>
    <p>fixed</p>
  </div>
}

export default page