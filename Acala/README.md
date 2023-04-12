# Acala Workshop 

[The Slides](https://docs.google.com/presentation/d/1EWPsl_Agzum3H1ct38pf36NM822Knph5DZ764PS-0n8/edit#slide=id.g22cc3e900dc_0_24)

[The Workshop Repo](https://www.github.com/ermalkaleci/encode-workshop-example-trader)

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
