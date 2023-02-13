import { Switch, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";

function ToggleSwitch() {
	const { setTheme } = useNextTheme();
	const { isDark } = useTheme();

	return (
		<Switch
			css={{ marginLeft: "auto" }}
			checked={isDark}
			onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
		/>
	);
}

export default ToggleSwitch;
