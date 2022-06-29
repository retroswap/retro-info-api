# Documentation

All RetroSwap pairs consist of two different tokens. ONE is not a native currency in RetroSwap, and is represented only by WONE in the pairs. 

The canonical WONE address used by the RetroSwap interface is `0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a`.

Results are cached for 5 minutes (or 300 seconds).

## [`/summary`](https://api.retroswap.info/api/summary)

Returns data for the top ~1000 RetroSwap pairs, sorted by reserves. 

### Request

`GET https://api.retroswap.info/api/summary`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "0x..._0x...": {                  // HRC20 token addresses, joined by an underscore
      "price": "...",                 // price denominated in token1/token0
      "base_volume": "...",           // last 24h volume denominated in token0
      "quote_volume": "...",          // last 24h volume denominated in token1
      "liquidity": "...",             // liquidity denominated in USD
      "liquidity_ONE": "..."          // liquidity denominated in ONE
    },
    // ...
  }
}
```

## [`/tokens`](https://api.retroswap.info/api/tokens)

Returns the tokens in the top ~1000 pairs on RetroSwap, sorted by reserves.

### Request

`GET https://api.retroswap.info/api/tokens`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "0x...": {                        // the address of the HRC20 token
      "name": "...",                  // not necessarily included for HRC20 tokens
      "symbol": "...",                // not necessarily included for HRC20 tokens
      "price": "...",                 // price denominated in USD
      "price_ONE": "...",             // price denominated in ONE
    },
    // ...
  }
}
```

## [`/tokens/0x...`](https://api.retroswap.info/api/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82)

Returns the token information, based on address.

### Request

`GET https://api.retroswap.info/api/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "name": "...",                    // not necessarily included for HRC20 tokens
    "symbol": "...",                  // not necessarily included for HRC20 tokens
    "price": "...",                   // price denominated in USD
    "price_ONE": "...",               // price denominated in ONE
  }
}
```

## [`/pairs`](https://api.retroswap.info/api/pairs)

Returns data for the top ~1000 RetroSwap pairs, sorted by reserves.

### Request

`GET https://api.retroswap.info/api/pairs`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "0x..._0x...": {                  // the asset ids of ONE and HRC20 tokens, joined by an underscore
      "pair_address": "0x...",        // pair address
      "base_name": "...",             // token0 name
      "base_symbol": "...",           // token0 symbol
      "base_address": "0x...",        // token0 address
      "quote_name": "...",            // token1 name
      "quote_symbol": "...",          // token1 symbol
      "quote_address": "0x...",       // token1 address
      "price": "...",                 // price denominated in token1/token0
      "base_volume": "...",           // volume denominated in token0
      "quote_volume": "...",          // volume denominated in token1
      "liquidity": "...",             // liquidity denominated in USD
      "liquidity_ONE": "..."          // liquidity denominated in ONE
    },
    // ...
  }
}
```
