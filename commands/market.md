# Market

Market can be used to sell eligible pokemon to the bot or to other players. The market is designed to prevent spam entries and unreasonable prices and comes with strict quality and inflation control. This design comes with a few limitations and a small learning curve.
:::warning Notice
Market notifications are sent via direct message. Users with their DMs disabled wont receive this information.
:::

## Eligibility

Pokemon with `Common` and `Regional` rarity can only be sold to the bot and cannot be listed on the market. These pokemon must be above `50 IV`. Bred pokemon in this rarity are not eligible.
:::info
Shiny pokemon or pokemon holding an item cannot be listed on the market.
:::

## Buying

Pokemon buying limit is equal to `Total - 60` pokecoins. The buy button is disabled if a user is ineligible to buy a pokemon.
:::tip
Users cannot buy their own pokemon.
:::

## Selling

Minimum price for listing a pokemon on the market is `60 Pokecoins`. The max price is calculated using the formula `Total + 15%` for `Legendary` rarity, the percentage value goes up by `5%` when moving up the rarity list.
:::info Market Fee
Upon a successful sale, `5%` of the total sale value is deducted before the seller receives the amount.
:::
:::tip
The button on the very right in the [/view](./view.html) message changes from `Remove Party` to `Add Market`.
:::
:::details
- `75 IV` or more `Common` pokemon yield `50 Pokecoins`.
- `75 IV` or more `Regional` pokemon yield `60 Pokecoins`.
- Both `Common` and `Regional` pokemon below `75 IV` yield `1x Rare Candy`.
:::

## Jackpot

There is a chance to hit a jackpot when selling a `75 IV` or more pokemon to the bot. The jackpot doubles the received pokecoin amount along with a few additional rewards.
:::tip
Higher IV pokemon yield better jackpot rewards.
:::
