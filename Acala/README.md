# Acala Workshop 

[The Slides](https://docs.google.com/presentation/d/1EWPsl_Agzum3H1ct38pf36NM822Knph5DZ764PS-0n8/edit#slide=id.g22cc3e900dc_0_24)

[The Workshop Repo](https://www.github.com/ermalkaleci/encode-workshop-example-trader)

[The recording - Comming soon]()

Acala is a parachains for Defi on Polka.  
Kusama Network called Auruka.  

Acala has a EVM in built into the chain.  

Storage Meter is a thing.  
Incentives to keep the chain clean of garbage.  
You pay for storage rent.  

There is a Developer Mode  
Deployed contract are in dev mode by default. 
In Dev Mode it can be accessed by Maintainer, contracts, Devs.
Maintainer can upgrade/destroy contract.

There are precomiles  

There are mirroed Token. Mirrored Token is a precompiled  
Mirrored Token similar to wraped token like weth  

How a precompiled worked.  
Predeployed contract, will coll the precompiled pallet, which will executed the chain.  

There is Bodji.js. Its a set of tools. It alows substrate rpc calls and ethereum rpc calls.  
Implentent a web3 provider under the hood.  

There is chopsticks, its a substrate testing client.  
Is it like Ganache? Yes, its similar but better.   
Real testing with mainnet, multiple at the same time.  
Testing enviromnet ins seconds  
`npx @acala-network/chopsticks@latest dev --endpoint=wss://acala-rpc.dwellir.com`  
The repo is [here](https://github.com/AcalaNetwork/chopsticks/tree/master/configs).  

How does Copstick works?  
There is smoldot, which provides a client.  
smodlot enables the chopstick client to set up a rpc:  
chopstick connects to chain and fetches state.  
chopstick only reads to chain. It doesnt write to chain.
Yeah similar like ganache, but diffrent.  
I like the picture. Screenshot can be found [here](https://ibb.co/jvBxQHp)  

There is a demo  
github.com/ermalkaleci/encode-workshop-example-trader  

Follow the recordings. I would get to distracted while taking notes.  
these are the recording. [Comming Soon]()  
The code is really readable. I guess, chatgpt could even explain it, because deploy.ts its quite one step after another written. I have to try to to some later point in time.  

The contract does the following.
The goal is how to access the Acala EVM.
The main work is in deploy.ts and how to use chopstick.
We swap tokens.  
The contract does checking if ACA is lower than 1 then deploy.
If higher than not deploy.
If deployed it calls transfer and we swap tokens.

In line 90 in IDEX.sol we can how much.

His name is Ermal and has Twitter.
Its Twitter is @KaleciErmal

There is a [linktree](https://www.linktr.ee/acalanetwork)

Chopstick allows XCM Testing. 
Its quite easy to set up. 
