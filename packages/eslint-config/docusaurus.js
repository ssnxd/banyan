import { config as baseConfig } from "./base.js";

export const docusaurusConfig = {
	...baseConfig,
	extends: ["plugin:@docusaurus/recommended"],
	rules: {
		"@docusaurus/no-untranslated-text": [
			"warn",
			{ ignoredStrings: ["·", "—", "×"] },
		],
	},
};
