# Custom Rulesets

The `Gym Toolkit` allows server owners to add custom battle rulesets per channel. This is a more advanced feature of the bot and requires basic knowledge of [JSON](https://json.org) file format, [Git](https://git-scm.com/) and [GitHub](https://docs.github.com/en).
:::info
Rulesets are only enforced in unstaked PvP battles.
:::

## Getting Started

Adding rulesets involves forking the GitHub repository, editing a JSON file and submitting it to the repository via a Pull Request (PR). Users and the servers that they're allowed to add rulesets for need to be explicitly whitelisted. This is a manual process and requires an administrator of the server to get in touch.

## Submitting PR

A sample JSON template can be found in the rulesets folder. The new ruleset file must be renamed to the [Discord Server ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID) of the author. The structure of the file begins with `channelId` which needs to be replaced with the `Discord Channel ID` that the ruleset needs to take effect in. The file can have up to `25` comma separated channel IDs with their own ruleset.
:::info
- Structure of the JSON file must not be changed.
- The PR must have a proper `Description` and `Title`.
:::