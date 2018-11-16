# Patient Health Report
Simple Ethereum Decentralized web app adds patient health report as a block to a blockchain with the help of ReactJs,Truffle,Web3.
# Prerequisite
```
Install NodeJs
npm install -g truffle npm
install -g geth
npm install web3
npm install -g ethereumjs-testrpc
npm install -g create-react-app
```
# Running the ethereum nodes
```
$ geth --datadir ./directorynameyourchoice init ./genesis.json

$ geth --port 3001 --networkid 58343 --datadir=./directorynameyourchoice --maxpeers=5  --ipcdisable --rpc --rpcport 8541 --rpcaddr 127.0.0.1 --rpccorsdomain "*" --rpcapi "eth,net,web3,personal,miner,admin"

$ geth attach http://127.0.0.1:8541
$ personal.newAccount('AccountNameYourChoice')
$ personal.unlockAccount(web3.eth.coinbase,"AccountNameYourChoice",17000)
$ personal.listAccounts
$ personal.listWallets
```
### Get the account id
```
eth.coinbase
```
### Get the admin node info
```
$ admin.nodeInfo.enode
```
### Add Peer node to admin
```
$ admin.addPeer() // copy paste the output of the above command
```

### Check admin peers
```
$ admin.peers
```

### Start Mining 
```
$ miner.start()
```
### Stop Mining
```
$ miner.stop()
```
### Check admin peers
```
$ admin.peers
```
### Check Balance
```
eth.getBalance(eth.coinbase)
```

### Compile and deploy contract
```
$ truffle compile
$ truffle migrate
$ truffle console
$ ContractName.address
$ ContractName.abi
```