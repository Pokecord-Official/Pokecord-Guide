# Battles

This command is used for `Player vs Player`, `Cross Server` or `AI Trainer` pokemon battles. The command has two optional arguments, `opponent` and `stake`. 

## Player vs Player

In order to challenge another player for a pokemon battle, the user must specify the `opponent` option. If the mentioned opponent accepts the challenge before it times out, the battle begins.

## Cross Server

Cross server battles are pokemon battles where two eligible players in different discord servers can battle each other. In order to start a cross server battle, the user can use the command without mentioning the `opponent` option.
:::details
Cross server matchmaking depends on a few factors:<br>
1. **Party Generation**: Party generation is equal to 9 if there is a generation 9 pokemon present in the party, otherwise 8. The algorithm will only match players with same party generations.<br>
2. **Stake Value**: Users will only be matched with an opponent with a stake value of ± 15% of the provided amount unless 0.
:::
::: tip
It is also possible to match players in the same server but different channels.
:::
## AI Trainer

If a cross server matchmaking fails or times out, the user is matched with an AI trainer. AI trainer battles always have a stake value of 0. The AI will always have the same number of pokemon as the player. The levels of the opponent pokemon cannot be higher than the max levelled pokemon in the player's party.
:::tip
Despite the stake value, an AI Trainer battle will always yield experience points, effort value points and happiness upon winning.
:::

## Stakes

To make battles more exciting, users can compete for a pokecoins. The winner receives the stake amount while it's deducted from the loser's profile. Unstaked PvP or Cross Server battles do not yield experence points, effort value points or happiness.
:::tip
The `Total Wins` displayed on the profile are the amount of staked battles won by the player. A win is only considered for a complete battle, forfeitting a battle does not count as a win for the opponent.
:::
:::warning
Forfeitting a staked PvP or Cross Server battle results in a loss of `10` pokecoins and reduction of happiness value of all pokemon in the party.
:::

## Battle Actions

Battle actions such as `Z-Move`, `Mega`, `Ultra Burst`, `Dyamax` and `Terastallize` are generation specific and only available in PvP, Cross Server & AI Trainer battles. Terastallizing is only available for generations 9 or above while all other actions are available for generations 8 or below.