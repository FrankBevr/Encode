# Astar Workshop

[No Slides]()

[Swanky & Tutorials](https://docs.astar.network/docs/build/wasm/from-zero-to-ink-hero/)

[The recording](https://www.youtube.com/watch?v=x7Ebz_ofpr0)

We build a Psp 22

01 Astar Wasm stack
02 ink!
03 tools
04 Developer Journey


## The Stack

Substacte, pallet contracts, languages ask! and ink!, psp's 

psp means polkadot stadards proposals

pallet contracts, transactions fees are diffrent. 
There is a thing that weight.
There is a mechnism. The name is storage rent, It exists. It permints of spamming.

There is a 2 step deployment
There is a wasm blob and there is contract address&storage are decoubled.

eDSLs to build on pallet-contracts 
pallet contracts exposes API to interact with contracts.
Wasm is language agnostic, most advanced is currently rust version.

## ink!

it feels like rust, obviously 
there is a nice picture. Just adding macros on top of it.

ink! uses macros. 
4 are important. 
`#[ink(constructor)]` 
`#[ink(storage)]` 
`#[ink(message)]` 
`#[ink(even)]` 

## tools

swanky suite is a tool. Phala is also working on it.  
Its an all-in-one tool for wasm smart contracts.  
Similar like truffle, hardhat, foundry.  

There is an open brush wizzard.  
Its like open zeppelin.  
Quite neat.  
Open brush is Open zeppling for wasm contracts.  


## Developer journey

1. learnk ink!
Enviornment Setup 
- Rust 
- cargo-contract
- swanky

2. Documentation
- Astar docs:Build > Wasm smart contracts
- use.ink
- openBrush docs

3. Learn ink! - Astar tutorials
- Basic: Flipper
- Intermediate: NFT
Advanced: DEX UniswapV2

4. Develop your contracts - Local
- use swanky
  - Quickly spin up 
  - build
  - test
  - deploy
  - swanky node
  - manage network accounts

- for testing
  - ink end to end test (rust test)
  - typechain-Polkadot (typescript)


5. UI
- libaries (polkadot.js or astar.js)
- templates -Swanky dApps
  - lottery
  - NFT
  - NFT marketplace

6. Deploy your contracts
- first local, then shiden, then astar.

## Lets build

There is Astar docs. There are tutorials.

Swanky dapps are on github. dex is a repo, its audited. its production level.  
There is a nft marketplace. Its good.  

lets start coding
emebed domain specifc language
we are targeting pallet contracts.
ink! is a edsl and is made out of rust.


`swanky init`  

psp 22 and ink!  

test are in test.  
artifacts in artifasts.  
let look at cargo-tom  
we use the latest.  

swanky contracts --help  
swanky contracts compile my_psp_22  
swanky contracts compile my_psp_22  --verbose  

there is contracts ui
swanky node has to be run
swanky node

contracts ui can be found under

www.contracts-ui.substrate.io/contract/ ???

let transfer from Alice to Bob

woooa, first contract done :D

