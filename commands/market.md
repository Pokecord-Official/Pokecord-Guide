# Market

Market can be used to sell eligible pokemon to the bot or to other players. Unlike other pokemon market systems on Discord, our market is carefully designed to prevent spam entries and unreasonable prices.
Market comes with strict quality and inflation control. This design comes with a few limitations and a small learning curve.

## Eligibility

Pokemon with `Common` and `Regional` rarity can only be sold to the bot and cannot be listed on the market. These pokemon must be above `50 IV`. Bred pokemon in this rarity are not eligible.
:::info
- Shiny pokemon or pokemon holding an item cannot be listed on the market.
- A user can only have `1` pokemon listed on the market at a time.
:::

## Pricing

Minimum price for listing a pokemon on the market is `10 Pokecoins`. The max price is calculated using the formula `Total User Coins + 15%`.
:::details
- `75 IV` or more `Common` pokemon yield `50 Pokecoins`.
- `75 IV` or more `Regional` pokemon yield `60 Pokecoins`.
- Both `Common` and `Regional` pokemon below `75 IV` yield `1x Rare Candy`.
:::
:::info Market Fee
Upon a successful sale, `5%` of the total sale value is deducted before the seller receives the amount.
:::

## Jackpot

There is a chance to hit a jackpot when selling a `75 IV` or more pokemon to the bot. The jackpot doubles the received pokecoin amount along with a few additional rewards.
:::tip
Higher IV pokemon yield better jackpot rewards.
:::