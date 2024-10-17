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

## Modes

There are two available modes, `legal` and `illegal`. Only one mode can be used per ruletype. The `legal` mode is enforced if both are populated.
:::details Mode Exceptions

- When adding a filter for `pokemon`->`legal`->`types`, pokemon that include one of the given types is considered as a legal pokemon.
  > Example:
  >
  > ```json
  > "1257054038332276860": {
  >  "pokemon": {
  >         "legal":{
  >             // Pokemon with types Grass + any other type are legal
  >             "types": ["Grass"]
  >         }
  >     }
  > },
  >
  > ```
- In order to disable a combination of types, they can be added to `pokemon`->`illegal`->`types`.
  > Example:
  >
  > ```json
  > "1257054038332276860": {
  >  "pokemon": {
  >         "legal":{
  >             "types": ["Grass"]
  >         },
  >         // Pokemon with types Grass + any other type are legal
  >         // But Grass + Poison are illegal
  >         "illegal":{
  >             "types": ["Poison"]
  >         }
  >     }
  > },
  > ```
  >
- If `pokemon`->`legal`->`species` is populated, `types` and `rarity` checks are ignored for the pokemon ruletype.
- If `pokemon`->`illegal`->`species` is populated along with entries for `types` and `rarity` in `legal` mode, the pokemon species is considered as illegal.
:::
## Filters

Both ruletypes and modes can have filters. Filter values are case sensitive and require specific delimiters. Mode filters are optional and can be left unchanged.
:::tip
Some pokemon species have special characters in their names. The [/info](../commands/info.html) command can be used to get the exact species of the pokemon.
:::
:::details Filter Schema
- Values in `types`, `species` and `abilities` use title case and each word is separated by a space.
  > Example: `Ghost`, `Type: Null`, `Keen Eye`
- Values in `rarity`, `names` and `items` are in lower case and hyphenated.
  > Example: `legendary`, `destiny-bond`, `leaders-crest`
:::
