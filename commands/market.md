# Market

Market can be used to sell eligible Pokémon to the bot or to other players. The market is designed to prevent spam entries and unreasonable prices and comes with strict quality and inflation control. This design comes with a few limitations and a small learning curve.
:::warning Notice
Market notifications are sent via direct messages. Users with their DMs disabled wont receive any notifications.
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

There is a chance to hit a jackpot when selling a Pokémon to the bot. The jackpot doubles the received pokecoin amount along with a few additional rewards.
:::tip
Higher IV Pokémon yield better jackpot rewards.
:::

## Mystery Shop

The Mystery Shop is located at the top section of the market, offering Pokémon with hidden IV% values capped between `76%` and `92%`. Players have two options:

1. Purchase the Pokémon directly using pokecoins or gems.
2. Choose to reveal the stats before buying. However, revealing the stats increases the price.

Below is the pricing structure for Pokémon after their stats are revealed based on their rarity and IV% value:

### Price List (Revealed Stats)

#### Paradox
- IV 90% or above: 💰 `16,000` Coins | 💎 `250` Gems  
- IV 89% or below: 💰 `14,000` Coins | 💎 `225` Gems  

#### Mythical
- IV 90% or above: 💰 `14,000` Coins | 💎 `225` Gems  
- IV 89% or below: 💰 `12,000` Coins | 💎 `200` Gems  

#### Legendary
- IV 90% or above: 💰 `12,000` Coins | 💎 `200` Gems  
- IV 89% or below: 💰 `10,000` Coins | 💎 `175` Gems  

#### Ultra Beast
- IV 90% or above: 💰 `10,000` Coins | 💎 `175` Gems  
- IV 89% or below: 💰 `8,000` Coins | 💎 `150` Gems  