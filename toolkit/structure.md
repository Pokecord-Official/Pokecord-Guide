# Ruleset Structure

The JSON file structure for each channel begins with ruletypes. The ruletypes include, `pokemon`, `moves`, `abilities` and `items`. Each ruletype can have multiple filters and modes.

Example: `333749099897683980.json`
```json
"1257054038332276860": { // Channel 1
    "pokemon": {
        ...filters
        "legal":{
            ...more filters
        }
    },
    ...more ruletypes
    },
"1209782242814070784": { // Channel 2
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

There are two available modes, `legal` and `illegal`. Only one mode can be used per ruletype. The `legal` mode is enforced if both are populated with an exception of `pokemon`->`types`.
:::details Mode Exception

- When adding a filter for `pokemon`->`legal`->`types`, pokemon that include one of the given types will be considered as a legal pokemon.
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
- This might not always be the desired outcome in places where where a certain combination of types need to be disabled. In order to disable a combination of types, they must be added to `pokemon`->`illegal`->`types`.
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
:::

## Filters

Both ruletypes and modes can have filters. Filter values are case sensitive and require specific delimiters. Mode filters are optional and can be left unchanged.
:::tip
Some pokemon species have special characters in their names. The [/info](../commands/info.html) command can be used to get the exact species of the pokemon.
:::
:::details Filter Schema
- Values in `types`, `species` and `abilities` must use title case and each word should be separated by a space.
  > Example: `Ghost`, `Type: Null`, `Keen Eye`
- Values in `rarity`, `names` and `items` must be in lower case and hyphenated.
  > Example: `legendary`, `destiny-bond`, `leaders-crest`
:::
