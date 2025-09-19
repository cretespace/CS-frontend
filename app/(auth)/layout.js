import TopSection from "@/components/layout/TopSection";

export default function RootLayout({ children }) {
  return (
    <>
      <TopSection />
      <div className="px-[162px]">{children}</div>
    </>
  );
}
