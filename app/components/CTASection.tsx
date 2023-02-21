import { Grid, Link, Button, Image } from "@nextui-org/react";

import ToggleSwitch from "./toggle-switch";

const repoName = "nextui-nextjs-boilerplate";
const repoLink = `https://github.com/grafisaholic/nextui-nextjs-boilerplate`;

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
					href={`https://vercel.com/import/git?s=${repoLink}`}
				>
					<Image
						src="https://vercel.com/button"
						alt="Vercel Logo"
						showSkeleton
					/>
				</Link>
				<Link
					aria-label="Deploy to Netlify"
					target="_blank"
					rel="noreferrer noopener"
					href={`https://app.netlify.com/start/deploy?repository=${repoLink}`}
				>
					<Image
						showSkeleton
						src="https://www.netlify.com/img/deploy/button.svg"
						alt="Netlify deploy button"
					/>
				</Link>
			</Grid>

			<Grid>
				<Button
					as="a"
					href={`${repoLink}/generate`}
					target="_blank"
					rel="noreferrer noopener"
					color="gradient"
					shadow
					rounded
				>
					Use This Template
				</Button>
			</Grid>

			<Grid css={{ marginTop: 16 }}>
				<ToggleSwitch />
			</Grid>

			<Grid
				css={{
					display: "flex",
					alignItems: "center",
					gap: 8,
					marginTop: "$56",
				}}
			>
				<Button
					as="a"
					href={repoLink}
					target="_blank"
					rel="noreferrer noopener"
					size="sm"
					rounded
					bordered
				>
					Open in Github
				</Button>
				<Link href={repoLink} target="_blank" rel="noreferrer noopener">
					<Image
						src={`https://img.shields.io/github/stars/codedruid13/${repoName}?style=social`}
						alt="github stars"
					/>
				</Link>
			</Grid>
		</Grid.Container>
	);
}

export default CTASection;
