# Ruleset Structure

The JSON file structure for each channel begins with ruletypes. The ruletypes include, `pokemon`, `moves`, `abilities` and `items`. Each ruletype can have multiple filters and modes.

Example: `333749099897683980.json`
```json
"1257054038332276860": {
    "description": "Channel 1",
    "pokemon": {
        ...filters
        "legal":{
            ...more filters
        }
    },
    ...more ruletypes
    },
"1209782242814070784": {
    "description": "Channel 2",
    "pokemon": {
        ...filters
        "legal":{
            ...more filters
        }
    },
    ...more ruletypes
    },
}
```

## Filters

Both ruletypes and modes can have filters. Filter values are case sensitive and require specific delimiters. Mode filters are optional and can be left unchanged.
:::tip
Some Pokémon species have special characters in their names. The [/info](../commands/info.html) command can be used to get the exact species name of the Pokémon.
:::
:::details Filter Schema
- Values in `types`, `species` and `abilities` use title case and each word is separated by a space.
  > Example: `Ghost`, `Type: Null`, `Keen Eye`
- Values in `allowedRarities`, `names` and `items` are in lower case and hyphenated.
  > Example: `legendary`, `destiny-bond`, `kings-rock`
:::

## Modes

There are two available modes, `legal` and `illegal`. Only one mode can be used per ruletype. The `legal` mode is enforced if both are populated.

### Mode Exceptions

- When adding a filter for `pokemon`->`legal`->`types`, Pokémon that include one of the given types are considered legal. To disable a combination of Pokémon types, they can be added to `pokemon`->`illegal`->`types`.
> Example:
 ```json
 "1257054038332276860": {
  "pokemon": {
         "legal":{
             "types": ["Grass"]
         },
         // Pokémon with types Grass + any other type are legal
         // But Grass + Poison are illegal
         "illegal":{
             "types": ["Poison"]
         }
     }
 },
 ```
- The `species` filter for `pokemon` ruletype always takes priority. If this filter is populated in either mode, `types` check is ignored.