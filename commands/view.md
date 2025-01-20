# Viewing Pokémon

This is an all in one command that is used to quickly view and edit your Pokémon. In addition, this command allows the user to edit the party, select a Pokémon, release a Pokémon, give or take items and add or remove a Pokémon from the [market](./market.md).
:::tip
The very first select menu is used to select a Pokémon while the rest of the menus are used to perform actions on the selected Pokémon. 
:::

## Symbols
There are a few symbols displayed next to some stat values that indicate various conditions of a Pokémon.
- `✦` : Stat has reached max [EV](../strategies/ev.md).
- `✧` : Reached Max [EV](../strategies/ev.md) threshold.
- `⌬` : Indicates bred Pokémon.
- `▲` : Indicates IV reroll by [Magic Flute](../items.md#magic-flute).

## Search
The 🔍 button can be used to search for Pokémon. Search can contain keywords for rarities like `legendary`, `mythical`, `ultrabeast`, `paradox` and `special` or simply `rare` in addition to Pokémon names and dex numbers. The keyword `all` can be used to view all Pokémon after a previous search.
:::info
Searching for `common` and `regional` rarity is not supported.
:::
:::tip
The search button can also be found in [/trade](/commands/trade.html), [/gift](/commands/gift.html) and [/breed](/commands/breed.html) messages.
:::

## Multi Release
This is a lesser known feature of the view command that allows users to release multple Pokémon from a given range of IV values. The `Release` button changes to `Multi Release` when viewing the selected Pokémon. This button will only release Pokémon that belong to `Common` and `Regional` rarity.
:::tip
Pokémon that are shiny, present in the party or holding an item are ignored.
:::
:::info
This button is disabled if the user has less than `200` Pokémon.
::: 
:::details Examples
1. **Min: 10 | Max: 10**: Releases Pokémon with IVs equal to `10%`.
2. **Min: 0 | Max: 10.69**: Releases Pokémon with IVs `10.69% or less`.
3. **Min: 10 | Max: 0**: Releases Pokémon with IVs `10% or more`.
4. **Min 15.69 | Max: 50**: Releases Pokémon with IVs `15.69% or more` but `50% or less`.
:::