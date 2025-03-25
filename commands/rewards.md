# Reward Tickets

This command is used to redeem items and pokecoins in exchange for reward tickets. Tickets can be obtained through [voting](../strategies//voting.md), [quests](./daily.md) and other jackpots throughout the bot.

## Ticket Rates

Rewards are categorized into four rarities, `Common`, `Legendary`, `Mythical` and `Royal`. Every ticket can pick items from any rarity but the roll rate differs between each ticket. The `Royal Ticket` always picks from the rare reward pools and ignores the common items. The `Cosmic Ticket` has the best chance for rare reward rolls followed by the `Master Ticket` and the `Basic Ticket`. 

:::tip
Both `Cosmic Ticket` and `Master Ticket` guarantee at least one rare item.
:::

## Vote Ticket

The `Vote Ticket` has a fixed reward with a chance for a jackpot which activates the [Rare Element](../items.md#rare-element). More information about vote rewards can be found in the [voting](../strategies/voting.md) section.

## Morph Ticket

The Morph Ticket allows you to combine two eligible Pokémon of the same rarity to create a brand-new Pokémon of the same rarity.

### Eligibility

The following Pokémon cannot be morphed:
- Bred, locked or morphed Pokémon
- Pokémon belonging to the `Special` rarity
- Pokémon holding an item
- Pokémon in your party

### Outcome

- The new Pokémon will have an `IV%` equal to the highest IV Pokémon used in the morph, adjusted for its stats.
- It will always share at least one type with one of the Pokémon used in the morph.
- If either of the Pokémon used is shiny, the new Pokémon will also be shiny.

:::info
A morphed Pokémon is indicated with a [symbol](./view.md#symbols).
:::
## Royal Rewards

Royal Rewards are the most powerful and exclusive rewards in the bot. They are unlocked by maintaining a [voting streak](../strategies/voting.md#streaks) and are added to the ticket reward pool as you progress. The `Royal Ticket` offers the highest chance of obtaining these coveted rewards.