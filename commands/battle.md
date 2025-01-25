# Battles

This command is used for `Player vs Player`, `Cross Server` or `AI Trainer` Pokémon battles.

## Player vs Player

To challenge another player for a Pokémon battle, the `opponent` option must be specified. If the mentioned opponent accepts the challenge before it expires, the battle starts.
:::tip
A win is only considered for a complete battle, forfeitting a battle does not count as a win for the opponent.
:::

## Cross Server

Cross server battles are Pokémon battles where two eligible players in different discord servers can battle each other. To start a cross server battle, the command should be used without mentioning the `opponent` option.
::: tip
It is also possible to match players in the same server but different channels.
:::

## AI Trainer

If a cross server matchmaking fails or times out, the user is matched with an AI trainer. The AI will always have the same number of Pokémon and party generation as the player. The levels of the opponent Pokémon cannot be higher than the max party level of the challenger.
:::Info
Your party generation is equal to the highest generation pokemon in your party.
:::

## Battle Actions

Battle actions such as `Z-Move`, `Mega`, `Ultra Burst`, `Dyamax` and `Terastallize` are generation specific and only available in PvP, Cross Server & AI Trainer battles. Terastallizing is only available for generations 9 or above while all other actions are available for generations 8 or below.