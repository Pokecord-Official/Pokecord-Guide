# Custom Rulesets

Server owners can add custom battle rulesets per channel. This is a more advanced feature of the bot and requires a basic knowledge of the [JSON](https://json.org) file format, [Git](https://git-scm.com/) and [GitHub](https://docs.github.com/en).

## Getting Started

Adding rulesets involves forking the GitHub repository, editing a JSON file and submitting it to the repository via a Pull Request (PR). Users and servers that they're allowed to edit or add rulesets for need to be explicitly whitelisted. This is a manual process and requires an administrator of the server to get in touch with the team.
:::tip
Usernames and the server IDs that a user is allowed to edit or add can be found in `allow.json` in the root of the repository.
:::

## Submitting PR

A sample JSON template can be found in the rulesets folder. The new ruleset file must be renamed to the [Discord Server ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID) of the author. The structure of the file begins with `channelId` which needs to be replaced with the `Discord Channel ID` that the ruleset needs to take effect in. The file can have up to `25` comma separated channel IDs with their own rulesets.
:::info
- Structure of the JSON file must not be changed.
- The PR must have a proper `Description` and `Title`.
:::