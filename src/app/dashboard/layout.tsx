import { ActiveThemeProvider } from "@/components/dashboard/active-theme";
import { cn } from "@/lib/utils";
import { cookies } from "next/headers";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const cookieStore = await cookies();
  const activeThemeValue = cookieStore.get("active_theme")?.value;
  const isScaled = activeThemeValue?.endsWith("-scaled");

  return (
    <div className={cn(
          "bg-background overscroll-none font-sans antialiased",
          activeThemeValue ? `theme-${activeThemeValue}` : "",
          isScaled ? "theme-scaled" : ""
        )}>

    <ActiveThemeProvider>
   
      <div >{children}</div>
    </ActiveThemeProvider>
    </div>
  );
}
