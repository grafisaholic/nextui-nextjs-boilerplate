"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

import { darkTheme, lightTheme } from "@/app/styles/theme";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head />
			<body>
				<NextThemeProvider
					defaultTheme="system"
					attribute="class"
					value={{
						light: lightTheme.className,
						dark: darkTheme.className,
					}}
				>
					<NextUIProvider>{children}</NextUIProvider>
				</NextThemeProvider>
			</body>
		</html>
	);
}
