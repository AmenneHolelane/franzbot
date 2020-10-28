// Goatplace //
/* eslint-disable no-fallthrough */
/* eslint-disable max-len */
exports.run = async (client, message, args) => {
	if (args.length < 1) {
		args = ["help"];
	}
	console.log(`FAQ command found in TestTriggers: ${message.channel.name}`);
	const responses = [];
	switch (args[0]) {
		case "help":
			responses.push({
				"embed": {
					"title": "Franzbot FAQ",
					"description": `Supported FAQ commands listed below. Type \`${client.config.prefix}faq <topic>\` to display the content.`,
					"color": client.config.EMBED_NORMAL_COLOR,
					"footer": {
						"text": client.config.FRANZBOT_VERSION,
					},
					"fields": [
						{
							"name": "Known Issues posts",
							"value": "dotnet dotnet48 integrity mactype opcode redist rivatuner rtss runtimes titleedit vcredist",
						},
						{
							"name": "FAQs and Help posts",
							"value": "account av antivirus bsod dalamudtesting dalamudsettings env maintenance patch plugins reshade steam testplugins uninstall update xlhelp",
						},
					],
				},
			});
			break;
			// template
		/*
		case "KEYWORD":
			responses.push({
				"embed": {
					"title": `TITLE text`,
					"description": `DESC`,
					"color": client.config.EMBED_NORMAL_COLOR,
					"footer": {
						"text": client.config.FRANZBOT_VERSION,
					},
				},
			});
			break;
		*/
		// implemented
		// aliases
		case "patch": args[0] = "update";
		case "patches": args[0] = "update";
		case "new patch": args[0] = "update";
		case "maint": args[0] = "maintenance";
		case "xlplugins": args[0] = "plugins";
		case "installplugins": args[0] = "plugins";
		case "integritycheck": args[0] = "integrity";
		case "runtime": args[0] = "redist";
		case "runtimes": args[0] = "redist";
		case "redistributable": args[0] = "redist";
		case "redistributables": args[0] = "redist";
		case "vcredist": args[0] = "redist";
		case "dotnet": args[0] = "redist";
		case "dotnet48": args[0] = "redist";
		case "net48": args[0] = "redist";
		case "net4.8": args[0] = "redist";
		case ".net4.8": args[0] = "redist";
		case "dalamudtesting": args[0] = "dalamudsettings";
		case "dalamudstaging": args[0] = "dalamudsettings";
		case "testplugins": args[0] = "dalamudsettings";
		case "plugintesting": args[0] = "dalamudsettings";
		case "xlsettings": args[0] = "dalamudsettings";
		case "BSOD": args[0] = "bsod";
		case "bluescreen": args[0] = "bsod";
		case "antivirus": args[0] = "av";
		case "anti-virus": args[0] = "av";
		case "defender": args[0] = "av";
		case "bitdefender": args[0] = "av";
		case "removexl": args[0] = "uninstall";
		case "rivatuner": args[0] = "rtss";
		case "msiafterburner": args[0] = "rtss";
		case "afterburner": args[0] = "rtss";
		case "mactype": args[0] = "rtss";
		case "hookfail": args[0] = "rtss";

			// GENERAL STUFF


		// KNOWN ISSUES
		case "integrity":
			responses.push({
				"embed": {
					"title": `Integrity check does not work`,
					"description": `More details [HERE](https://discordapp.com/channels/581875019861328007/586590269063954432/749247804051816498)`,
					"color": client.config.EMBED_NORMAL_COLOR,
					"footer": {
						"text": client.config.FRANZBOT_VERSION,
					},
				},
			});
			break;
		case "opcode":
			responses.push({
				"embed": {
					"title": `OpCodes need to be manually updated.`,
					"description": `You can find the post on DalamudAssets OpCodes [HERE](https://discordapp.com/channels/581875019861328007/586590269063954432/766340668406497341)`,
					"color": client.config.EMBED_NORMAL_COLOR,
					"footer": {
						"text": client.config.FRANZBOT_VERSION,
					},
				},
			});
			break;
		case "redist":
			responses.push({
				"embed": {
					"title": `XL Requires these redistributables`,
					"description": `Please make sure you've installed DirectX, .Net 4.8, and VS2015-2019 packages. More info [HERE](https://discordapp.com/channels/581875019861328007/586590269063954432/740149543466696734)`,
					"color": client.config.EMBED_NORMAL_COLOR,
					"footer": {
						"text": client.config.FRANZBOT_VERSION,
					},
				},
			});
			break;
		case "rtss":
			responses.push({
				"embed": {
					"title": `Plugin GUI does not load`,
					"description": `Please check if you have other programs modifying FFXIV. More details [HERE](https://discordapp.com/channels/581875019861328007/586590269063954432/689136371364790293)`,
					"color": client.config.EMBED_NORMAL_COLOR,
					"footer": {
						"text": client.config.FRANZBOT_VERSION,
					},
				},
			});
			break;
		case "titleedit":
			responses.push({
				"embed": {
					"title": `TitleEdit is dead as of 5.3`,
					"description": `Pending rewrite. See [HERE](https://discordapp.com/channels/581875019861328007/586590269063954432/748671425774092288)`,
					"color": client.config.EMBED_NORMAL_COLOR,
					"footer": {
						"text": client.config.FRANZBOT_VERSION,
					},
				},
			});
			break;

		// FAQs and Help
		case "account":
			responses.push({
				"embed": {
					"title": `XL Saved Credentials`,
					"description": `Having an issue with saved credentials or your FFXIV Account? See [HERE](https://discordapp.com/channels/581875019861328007/586590269063954432/698305374855495731)`,
					"color": client.config.EMBED_NORMAL_COLOR,
					"footer": {
						"text": client.config.FRANZBOT_VERSION,
					},
				},
			});
			break;
		case "av":
			responses.push({
				"embed": {
					"title": `Please whitelist or make AV exceptions for XIV Launcher`,
					"description": `Details can be found [HERE](https://discordapp.com/channels/581875019861328007/586590269063954432/695694479923085474)`,
					"color": client.config.EMBED_NORMAL_COLOR,
					"footer": {
						"text": client.config.FRANZBOT_VERSION,
					},
				},
			});
			break;
		case "bsod":
			responses.push({
				"embed": {
					"title": `I think XIV Launcher is giving me a Blue Screen of Death`,
					"description": `It's probably not XL's fault. But if you really think it is, please answer the questions [HERE](https://discordapp.com/channels/581875019861328007/586590269063954432/705169229539967037)`,
					"color": client.config.EMBED_NORMAL_COLOR,
					"footer": {
						"text": client.config.FRANZBOT_VERSION,
					},
				},
			});
			break;
		case "dalamudsettings":
			responses.push({
				"embed": {
					"title": `How do I enable/disable Dalamud Testing or Plugin Testing?`,
					"description": `See [HERE](https://discordapp.com/channels/581875019861328007/586590269063954432/737080343445897337)`,
					"color": client.config.EMBED_NORMAL_COLOR,
					"footer": {
						"text": client.config.FRANZBOT_VERSION,
					},
				},
			});
			break;
		case "env":
			responses.push({
				"embed": {
					"title": `XL Environment Variables`,
					"description": `You can find the post on XL environment variables [HERE](https://discordapp.com/channels/581875019861328007/586590269063954432/770342806727950406)`,
					"color": client.config.EMBED_NORMAL_COLOR,
					"footer": {
						"text": client.config.FRANZBOT_VERSION,
					},
				},
			});
			break;
		case "xlhelp":
			responses.push({
				"embed": {
					"title": ` What is the command for <insert plugin here>? `,
					"description": `Please type \`xlhelp\` in game`,
					"color": client.config.EMBED_NORMAL_COLOR,
					"footer": {
						"text": client.config.FRANZBOT_VERSION,
					},
				},
			});
			break;
		case "maintenance":
			responses.push({
				"embed": {
					"title": `Please wait for Dalamud and Plugin updates after a patch`,
					"description": ``,
					"color": client.config.EMBED_NORMAL_COLOR,
					"footer": {
						"text": client.config.FRANZBOT_VERSION,
					},
				},
			});
			break;
		case "plugins":
			responses.push({
				"embed": {
					"title": `I get an error message when trying to install/update/disable a plugin`,
					"description": `See [HERE](https://discordapp.com/channels/581875019861328007/586590269063954432/751955960356143144)`,
					"color": client.config.EMBED_NORMAL_COLOR,
					"footer": {
						"text": client.config.FRANZBOT_VERSION,
					},
				},
			});
			break;
		case "reshade":
			responses.push({
				"embed": {
					"title": `Reshade/Gshade/Stormshade/etc not working?`,
					"description": `Please check the faq post [HERE](https://discordapp.com/channels/581875019861328007/586590269063954432/765422769282220042)`,
					"color": client.config.EMBED_NORMAL_COLOR,
					"footer": {
						"text": client.config.FRANZBOT_VERSION,
					},
				},
			});
			break;
		case "steam":
			responses.push({
				"embed": {
					"title": `What are the Steam options for?`,
					"description": `For detail on Steam Integration and Steam Service Account, see [HERE](https://discordapp.com/channels/581875019861328007/586590269063954432/753307018135208029)`,
					"color": client.config.EMBED_NORMAL_COLOR,
					"footer": {
						"text": client.config.FRANZBOT_VERSION,
					},
				},
			});
			break;
		case "uninstall":
			responses.push({
				"embed": {
					"title": `How do I uninstall XIV Launcher?`,
					"description": `Instructions can be found [HERE](https://discordapp.com/channels/581875019861328007/586590269063954432/695677579574640642)`,
					"color": client.config.EMBED_NORMAL_COLOR,
					"footer": {
						"text": client.config.FRANZBOT_VERSION,
					},
				},
			});
			break;
		case "update":
			responses.push({
				"embed": {
					"title": `Please wait for Dalamud and Plugin updates after a patch`,
					"description": `[Again, please see the faq](https://discordapp.com/channels/581875019861328007/586590269063954432/742835941319901235)`,
					"color": client.config.EMBED_NORMAL_COLOR,
					"footer": {
						"text": client.config.FRANZBOT_VERSION,
					},
				},
			});
			break;


		default:
			responses.push({
				"embed": {
					"title": `Faq not found for '${args[0]}'`,
					"color": client.config.EMBED_ERROR_COLOR,
					"footer": {
						"text": client.config.FRANZBOT_VERSION,
					},
				},
			});
			break;
	}
	return responses;
};