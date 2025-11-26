# Market

Market can be used to sell eligible Pokémon to the bot or to other players. The market is designed to prevent spam entries and unreasonable prices and comes with strict quality and inflation control. This design comes with a few limitations and a small learning curve.
:::danger Notice
Market notifications and the option to claim market earnings is sent via direct messages. Users with their DMs disabled won't be able to claim their pokecoins.
:::

## Eligibility

Pokémon with `Common` and `Regional` rarity can only be sold to the bot and cannot be listed on the market. These Pokémon must be at least `72 IV`. Bred Pokémon in this rarity are not eligible.
:::info
Shiny Pokémon or Pokémon holding an item cannot be listed on the market.
:::

## Buying

Pokémon buying limit is equal to `Total - 60` pokecoins. The buy button is disabled if a user is ineligible to buy a Pokémon.
:::tip
Users cannot buy their own Pokémon.
:::

## Selling

Minimum price for listing a Pokémon on the market is `60` pokecoins. The max price is calculated using the formula `Total + 15%` for `Legendary` rarity, the percentage value goes up by `5%` when moving up the rarity list.
:::info Market Fee
Upon a successful sale, `5%` of the total sale value is deducted before the seller receives the amount.
:::
:::tip
The button on the very right in the [/view](./view.html) message changes from `Remove Party` to `Add Market`.
:::
:::details
- `72 IV` or more `Common` Pokémon yield `50` pokecoins.
- `72 IV` or more `Regional` Pokémon yield `60` pokecoins.
:::

## Jackpot

There is a chance to hit a jackpot when selling a Pokémon to the bot. The jackpot gives a random [reward ticket](./rewards.md).
:::tip
Higher IV Pokémon yield better jackpot rewards.
::: 