## fnWatchman - a tron contract deployer

This AWS Chalice application is used to deploy
contracts to the tronChain.

Two contracts are included.
* TweetToken.sol - A utility token created from tweets to @trc20mint
* STOKen.sol - A securities token with whitelists blacklists and trade restrictions.

### TweetToken.sol
tweetoken uses this to mint a contract via twitter.

#### tweet to this
>
> @trc20mint #SYMBOL #TOKENNAME_NOSPACES_OR_FUNKYCHARS #NUMBER_OF_TOKENS #SHASTA_ADDRESS
>
#### optionally, you can just curl it to.
    curl 'https://sbz6grdk4j.execute-api.us-west-2.amazonaws.com/api/mint/#SYMBOL/#SHASTA_ADDRESS/#NUMBER_OF_TOKENS/#TOKENNAME_NOSPACES_OR_FUNKYCHARS'


### STOKen.sol
tweetoken uses this to mint a contract via twitter.

#### sideload office extension
>
> https://docs.microsoft.com/en-us/office/dev/add-ins/testing/create-a-network-shared-folder-catalog-for-task-pane-and-content-add-ins
>
#### optionally, you can just curl it to.
    curl 'https://sbz6grdk4j.execute-api.us-west-2.amazonaws.com/api/stoken/#SYMBOL/#SHASTA_ADDRESS/#NUMBER_OF_TOKENS/#TOKENNAME_NOSPACES_OR_FUNKYCHARS'


modify as needed, replace with your private keys.

###license under MIT
###https://opensource.org/licenses/MIT