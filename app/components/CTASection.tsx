import { Grid, Link, Button } from "@nextui-org/react";
import Image from "next/image";

import ToggleSwitch from "./toggle-switch";

function CTASection() {
	return (
		<Grid.Container
			gap={1}
			alignItems="center"
			justify="center"
			css={{ flexDirection: "column" }}
		>
			<Grid
				css={{
					gap: 10,
					display: "flex",
					marginBottom: 16,
				}}
			>
				<Link
					aria-label="Deploy to vercel"
					target="_blank"
					rel="norefferer noopener"
					href="/"
				>
					<Image
						src="/vercel.svg"
						alt="Vercel Logo"
						width={100}
						height={24}
						priority
					/>
				</Link>
				<Link
					aria-label="Deploy to Netlify"
					target="_blank"
					rel="noreferrer noopener"
					href={`/`}
				>
					<Image
						width={100}
						height={24}
						src="https://www.netlify.com/img/deploy/button.svg"
						alt="Netlify deploy button"
					/>
				</Link>
			</Grid>

			<Grid>
				<Button color={"gradient"} auto>
					Use This Template
				</Button>
			</Grid>

			<Grid css={{ marginTop: 16 }}>
				<ToggleSwitch />
			</Grid>
		</Grid.Container>
	);
}

export default CTASection;
