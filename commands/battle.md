# Battles

This command is used for `Player vs Player`, `Cross Server` or `AI Trainer` Pokémon battles.

## Player vs Player

To challenge another player for a Pokémon battle, the `opponent` option must be specified. If the mentioned opponent accepts the challenge before it expires, the battle starts.

## Cross Server

Cross server battles are Pokémon battles where two players in different discord servers can battle each other. To start a cross server battle, the command should be used without mentioning the `opponent` option.

### Configuration

Server admins may want to configure a specific role to ping users to notify them about cross server challenges. Pokecord++ will automatically pick and mention the first role given to it that contains the word `battle`.

:::tip
Example role name: `Pokecord++ Battles`
:::

## AI Trainer

If a cross server matchmaking fails or times out, the user is matched with an AI trainer. The AI will always have the same number of Pokémon as the player. The levels of the opponent Pokémon cannot be higher than the max party level of the challenger.

## Battle Actions

Battle actions like `Z-Move`, `Mega`, and `Ultra Burst` require the Pokémon to hold the appropriate item, while `Dynamax` and `Terastallize` are tied to specific generations. These actions are available only in PvP, Cross-Server, Gym, and AI Trainer battles. Terastallize is available only in Generation 9 and above, while Dynamax is available only in Generation 8 and below.