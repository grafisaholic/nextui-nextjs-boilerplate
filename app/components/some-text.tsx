import { Grid, Text } from "@nextui-org/react";

function SomeText() {
	return (
		<Grid css={{ textAlign: "center" }}>
			<Text h1 size={32} css={{ textGradient: "45deg, $red600, $blue600" }}>
				Nextjs Starrter Nextui
			</Text>
			<Text css={{ opacity: 0.6 }}>
				This is nextjs projeect with Next-UI and Typescript setup.
			</Text>
		</Grid>
	);
}

export default SomeText;
