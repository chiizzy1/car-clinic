import "@/app/globals.css";
import styles from "@/style";
import SideBar from "../components/dashboard/SideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // offset navbar height
  return (
    <div className="bg-gray-100 w-full">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <SideBar>{children}</SideBar>
        </div>
      </div>
    </div>
  );
}
