# Timeout and Forfeit
Forfeiting battles or allowing certain interactions to time out results in penalties. These penalties are not applied if the bot is restarted or updated while a battle or interaction is in progress.
:::tip
Most interactions time out after `60` seconds of inactivity.
:::

## Staked Battles
For staked [PvP](./commands/battle.md#stakes) or [Cross Server](./commands/battle.md#cross-server) battles, forfeiting or timing out results in the following penalties:
- A loss of `10` pokecoins.
- A decrease in the happiness value of all pokemon in the party.
:::tip
If the battle times out or is forfeited at turn `0` and neither player has selected a move, no penalty is applied.
:::

## Unstaked Battles
For unstaked battles (except [AI Trainer](./commands/battle.md#ai-trainer) battles) forfeit or timeout results in a decrease in the happiness value of all pokemon in the party. <br>
Pokecoin penalty depends on the user's current pokecoin amount:
- If the user has `100` or more pokecoins, the penalty is `1%` of the total balance, capped at a maximum of `10` pokecoins.
- If the user has less than `100` pokecoins, a significantly longer cooldown is applied instead.

## Spawn
Forfeiting or timing out a [spawn](./commands/spawn.md) battle results in:
- A loss of `1` Pokecoin.
- A decrease in the happiness value of all pokemon in the party.
:::tip
This does not apply to the `Run` button.
:::

## Hangmon
Letting a game of [Hangmon](./commands/hangmon.md) time out results in a loss of `1` pokeball.