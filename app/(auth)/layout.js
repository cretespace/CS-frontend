import TopSection from "@/components/layout/TopSection";

export default function RootLayout({ children }) {
  return (
    <div>
      <TopSection />
      <div className="-mx-[162px] px-[162px]">{children}</div>
    </div>
  );
}
