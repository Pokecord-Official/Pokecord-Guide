# Battles

This command is used for `Player vs Player`, `Cross Server` or `AI Trainer` Pokémon battles. The command has two optional arguments, `opponent` and `stake`.

## Player vs Player

To challenge another player for a Pokémon battle, the `opponent` option must be specified. If the mentioned opponent accepts the challenge before it expires, the battle starts.

## Cross Server

Cross server battles are Pokémon battles where two eligible players in different discord servers can battle each other. To start a cross server battle, the command should be used without mentioning the `opponent` option.
:::details Matchmaking
Cross server matchmaking depends on the following factors:<br>

1. **Party Generation**: Party generation is equal to 9 if there is a generation 9 Pokémon present in the party, otherwise 8. The algorithm will only match players with same party generations.<br>
2. **Max Party Level**: Max party level is equal to the highest level Pokémon in the party. The algorithm will match players with max party level of ± 5.
3. **Stake Value**: Users will only be matched with an opponent with a stake value of ± 15% of the provided amount unless 0.
:::
::: tip
It is also possible to match players in the same server but different channels.
:::

## AI Trainer

If a cross server matchmaking fails or times out, the user is matched with an AI trainer. AI trainer battles always have a stake value of 0. The AI will always have the same number of Pokémon and party generation as the player. The levels of the opponent Pokémon cannot be higher than the max party level of the challenger.
:::tip
Despite the stake value, an AI Trainer battle will always yield experience points and effort value points upon winning.
:::

## Stakes

To make battles more exciting, users can compete for a pokecoins. The winner receives the stake amount while it's deducted from the loser's profile. Unstaked PvP or Cross Server battles do not yield experence points or effort value points.
:::info Stake Fee
Upon a successful win, `5%` of the total stake value is deducted before the winner receives the amount.
:::
:::tip
The `Total Wins` displayed on the profile are the amount of staked battles won by the player. A win is only considered for a complete battle, forfeitting a battle does not count as a win for the opponent.
:::

## Battle Actions

Battle actions such as `Z-Move`, `Mega`, `Ultra Burst`, `Dyamax` and `Terastallize` are generation specific and only available in PvP, Cross Server & AI Trainer battles. Terastallizing is only available for generations 9 or above while all other actions are available for generations 8 or below.
