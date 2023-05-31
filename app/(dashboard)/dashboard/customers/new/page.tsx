import { Header, NewCustomer } from "@/app/components";
import SearchCustomer from "@/app/components/dashboard/SearchCustomer";

export default function CustomerPage() {
  return (
    <div>
      <Header />
      <div className="pt-8">
        <h3 className="text-lg font-medium">Register new customer!</h3>
        <NewCustomer />
      </div>
    </div>
  );
}
