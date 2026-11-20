const n=`{
  "model": {
    "type": "minecraft:select",
    "property": "minecraft:component",
    "component": "minecraft:custom_name",
    "cases": [
      {
        "when": "Iron",
        "model": {
          "type": "minecraft:model",
          "model": "minecraft:item/plushify_iron_small"
        }
      },
      {
        "when": "Netherite",
        "model": {
          "type": "minecraft:model",
          "model": "minecraft:item/plushify_netherite_small"
        }
      },
      {
        "when": "Diamond",
        "model": {
          "type": "minecraft:model",
          "model": "minecraft:item/plushify_diamond_small"
        }
      },
      {
        "when": "Gold",
        "model": {
          "type": "minecraft:model",
          "model": "minecraft:item/plushify_gold_small"
        }
      },
      {
        "when": "Copper",
        "model": {
          "type": "minecraft:model",
          "model": "minecraft:item/plushify_copper_small"
        }
      },
      {
        "when": "Chain",
        "model": {
          "type": "minecraft:model",
          "model": "minecraft:item/plushify_chain_small"
        }
      }
    ],
    "fallback": {
      "type": "minecraft:model",
      "model": "minecraft:item/plushy_small"
    }
  }
}
`;export{n as default};
