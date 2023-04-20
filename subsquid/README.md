# Subsquid

[The Slides](https://github.com/RaekwonIII/storage-workshop)

[The Docs](docs.subsquid.io)

[The recoding - Comming soon]()


Massimo hold the chat.

He is a Dev Advocate.

## What is Subsuqid

Subsquid is a indexing middleware.

data needs additional computation.

Why? minimize network request. decrease inDevice storage.  
Seamslessly update  
multichain possiblities.  

Its a modulat Architecture  
blockchain, database --> processing --> presenting for data sciene, analalyitcs, graphql

Archives are amazing.^^

There are squids. Some are already build.

SDK offers the following  
aotmated model generation, aotmated abi code, code(typescript), strong typing, aquarium

`npm i -g @subsquid/cli@latest sqd deploy`

Now lets diiiiiive

## Giant Squid is Scary.

subsquid-labs/giant-squid-stats

There is a schema. Always start with the schema. Its a file.

Its new. Giant squid is new.

core logics is in processor.ts

Always take look in processor.ts

in giant squid repo, in processory there is switch case thingie, which enables a giant squid!

There is a bountie. Title is "Data validation tool for giant squid"

There is kalamar. Its a Explorer. Its open source. It uses giant squid.

There is another Bountie. Its about React Compontents. There is a archive status page. Thats kind of the direction what the are looking for.

There is another bountie. Its quite tricky kind of. They have issues with their staking dashboard. There is a issue written. Its from rossbulat. new giant squid api is the title. 

## Setup 
nodejs 16 docker, subsquid cli

`npm i -g @subsquid/cli@latest sqd deploy`

sqd init stoarge-live-workshop

choose substrate

cd storage-live-workshop

npm i

Lets take a look. First look at schema.graphql

assets keep empty.
db does things.
schema.graphl containts all the fetched data.

Schema adding a balance, because of a reason `balance: BigInt`

sqd codegen

sqd typegen

there is typegen.json. you can change it.

events change on the blockchain, subsquid takes care of it, i guess. Massimo has quite a pace today :D

how to work with proxies. all that stuff is nice for the third challenge. 
a hint is use storage. How to acces on-chain stoarge is good question to ask.

I guess massimo has a good clue how to solve challenge 3, so if I tackle it. I will write massimo again. 

there is docker-compose.yml

run sqd up to launch docker container

there are migrations, which is a set of sql statements.
First, clean migration. sql migration:clean and then rerun it sql migration

launch processor.
sqd process
and processor starts running.

There is a github link. Massimo just went thruh the code.

if we dont request storage, it would run faster.

sqd serve runs the sql server.

a proxy is a account which does things on behalft on the normal one, with a bunch of it.
There is a wiki polka and eyplains morea bout proxies.

in subscan we can look at the events and the proxie pallet throws a proxie send or proxie created.

There is a  delivery ethod.

Make a PR via giant squid is possible as well. It under very fast development.

Massimo said we cann work together.

[Medium](medium.com/subsquid)
[YT](youtube.com/c/subsquid)
[Docs](docs.subsquid.io) <-- recommend
[Github](github.com/subsquid)
[Discord](discord.gg/subsquid)
[Telegram](t.me/HydraDevs)

Slides: https://github.com/RaekwonIII/storage-workshop


how the exampley subscan

I im intrested in balances.
balances pallet
There are events, its quite neated listes.
click on transfer events,
it folds up
there are 3 fields.

Overall the issue gives a lot forward.



