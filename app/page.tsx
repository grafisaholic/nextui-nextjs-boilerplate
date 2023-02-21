"use client";

import { Grid } from "@nextui-org/react";

import SomeText from "@/app/components/some-text";
import CTASection from "@/app/components/CTASection";

export default function Home() {
	return (
		// <NextUIProvider>
		<Grid.Container
			gap={8}
			alignItems="center"
			justify="center"
			css={{ minHeight: "70vh", flexDirection: "column", paddingTop: "$52" }}
		>
			<SomeText />
			<CTASection />
		</Grid.Container>
		// </NextUIProvider>
	);
}
