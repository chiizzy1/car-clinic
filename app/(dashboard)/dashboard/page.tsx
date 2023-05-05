import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main className="relative flex items-center justify-center">
      <section className="container max-w-7xl mx-auto">
        <h1 className="font-bold">DASHBOARD</h1>
      </section>
    </main>
  );
};

export default page;
