import process from "process";

// Environment variables
import dotenv from "dotenv";
dotenv.config();

// Interface
interface IConfig {
	openAIAPIKey: string;
	prefixEnabled: boolean;
	gptPrefix: string;
	dallePrefix: string;
	aiConfigPrefix: string;
}

// Config
const config: IConfig = {
	openAIAPIKey: "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",
	prefixEnabled: false,
	gptPrefix: "!gpt",
	dallePrefix: "!dalle",
	aiConfigPrefix: "!config"
};

export default config;
