# Timeout and Forfeit
Forfeiting battles or allowing certain interactions to time out results in penalties. These penalties are not applied if the bot is restarted or updated while a battle or interaction is in progress.
:::tip
Interactions time out after `60` seconds of inactivity.
:::

## PvP Battles
Forfeit or timeout results in a loss of pokecoins and a decrease in the happiness value of all Pokémon in the party. Pokecoin penalty depends on the user's current pokecoin amount:
- If the user has `100` or more pokecoins, the penalty is `1%` of the total balance, capped at a maximum of `20` pokecoins.
- If the user has less than `100` pokecoins, a significantly longer cooldown is applied instead.
:::tip
If the battle times out or is forfeited at turn `0` and neither player has selected a move, no penalty is applied.
:::

## Spawn
Forfeiting or timing out a [spawn](./commands/spawn.md) battle results in:
- A loss of `1` Pokecoin.
- A decrease in the happiness value of all Pokémon in the party.
:::tip
This does not apply to the `Run` button.
:::

## Hangmon
Letting a game of [Hangmon](./commands/hangmon.md) time out results in a loss of `1` pokeball.