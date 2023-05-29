import { Header } from "@/app/components";

const Repair = async ({ params }: any) => {
  const { carId } = params;

  return (
    <div>
      <Header />
      <h3>Edit </h3>
    </div>
  );
};

export default Repair;
