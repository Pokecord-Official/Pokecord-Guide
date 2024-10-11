# Viewing Pokemon

This is an all in one command that is used to quickly view and edit your pokemon. In addition, this command allows the user to edit the party, select a pokemon, release a pokemon, give or take items and add or remove a pokemon from the market.
:::tip
The very first select menu is used to select a pokemon while the rest of the menus are used to perform actions on the selected pokemon. 
:::

## Search
The 🔍 button can be used to search for pokemon. Search can contain rarity keywords like `legendary`, `mythical`, `ultrabeast`, `paradox` and `special` in addition to pokemon names and dex numbers. The keyword `all` can be used to view all pokemon after a previous search.
:::info
Searching for `common` and `regional` rarity is not supported.
:::
:::tip
The search button can also be found in [/trade](/commands/trade.html), [/gift](/commands/gift.html) and [/breed](/commands/breed.html) messages.
:::

## Multi Release
This is a lesser known feature of the view command that allows users to release multple pokemon from a given range of `IV` values. The `Release` button changes to `Multi Release` when viewing the selected pokemon. This button will only release pokemon that belong to `Common` and `Regional` rarity.
:::tip
Pokemon present in the party and pokemon holding an item are ignored.
:::
:::info
This button is disabled if the user has less than `200` pokemon.
::: 
:::details Examples
1. **Min: 10 | Max: 10**: Releases pokemon with IVs equal to `10%`.
2. **Min: 0 | Max: 10.69**: Releases pokemon with IVs `10.69% or less`.
3. **Min: 10 | Max: 0**: Releases pokemon with IVs `10% or more`.
4. **Min 15.69 | Max: 50**: Releases pokemon with IVs `15.69% or more` but `50% or less`.
:::