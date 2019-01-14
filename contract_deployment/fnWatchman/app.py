from chalice import Chalice

app = Chalice(app_name='fnWatchman')
app.debug = True

from tronapi import Tron
from solc import compile_source
from tronapi.utils.help import hex_to_base58, string_utf8_to_hex
import json
import os

full_node = 'https://api.shasta.trongrid.io'
solidity_node = 'https://api.shasta.trongrid.io'
event_server = 'https://api.shasta.trongrid.io'


#
# OMG THIS IS TERRIBLE... the private keys are here
#
#
#
# use your keys for the publishing of contracts.
# This needs to get figured out... for the hackathon
# we are going to code the keys in place and figure out
# a KMS solution to pass them in secure fashion
#

tron = Tron(full_node=full_node,
        solidity_node=solidity_node,
        event_server=event_server,
        default_address='TLvW72EANde7QkGXzRH7bQhN6DzFHYPpCF',
        private_key='45cbd997ee9d17d6750a8f7dde2aaa967a0c7eb5d8a6c80b0ba37aa40db1d6ba'
        )


# Minting function for tweetoken
# when I started the original plan was to just make a tweetable token
# 
# this endpoint takes in 4 options and returns a JSON dump
# in that dump is a contract to be encoded.
# 

@app.route('/mint/{token}/{reciver}/{supply}/{name}', methods=['POST','GET','PUT'])
def mint(token,reciver,supply,name):
    filename = os.path.join(
    os.path.dirname(__file__), 'chalicelib', 'TweetToken.sol')
    contractfile = open(filename)
    contract = contractfile.read()
    replaced_contents = contract.replace('[ISUPPLY]', str(int(supply)))
    replaced_contents = replaced_contents.replace('[TOKENNAME]', str(name))
    replaced_contents = replaced_contents.replace('[TOKENSYMBOL]', str(token))
    replaced_contents = replaced_contents.replace('[TOKENRECIVER]', tron.address.to_hex(str(reciver)))
    compiled_sol = compile_source(replaced_contents)
    contract_interface = compiled_sol['<stdin>:TRC20']
    contract_byte_code = contract_interface['bin']
    hello = tron.trx.contract(
      abi=contract_interface['abi'],
      bytecode=contract_byte_code,
    )
    # Submit the transaction that deploys the contract
    tx_data = hello.deploy(
      fee_limit=10**9,
      call_value=0,
      consume_user_resource_percent=1
    )
    sign = tron.trx.sign(tx_data)
    result = tron.trx.broadcast(sign)
    #result["easyaddress"]  = 
    #app.log.debug("work statement\n========="+json.dumps(result))
    result["contract_address"] = tron.address.from_hex(result["transaction"]["contract_address"]).decode()
    return result

# STO minting function, really a copypasta of what is above with a different endpoint
# this contract has contract overrides for locktime though, and so we have to pass
# a date to the contract and also reference the STOken.sol solidity file.
# 

@app.route('/stoken/{token}/{reciver}/{supply}/{name}', methods=['POST','GET','PUT'])
def stoken(token,reciver,supply,name):
    filename = os.path.join(
    os.path.dirname(__file__), 'chalicelib', 'STOken.sol')
    contractfile = open(filename)
    contract = contractfile.read()
    replaced_contents = contract.replace('[ISUPPLY]', str(int(supply))) # total supply 
    replaced_contents = replaced_contents.replace('[UNLOCKTIME]', str(1546412481)) #lockout time
    replaced_contents = replaced_contents.replace('[TOKENNAME]', str(name)) #name of token
    replaced_contents = replaced_contents.replace('[TOKENSYMBOL]', str(token)) # symbol
    replaced_contents = replaced_contents.replace('[TOKENRECIVER]', tron.address.to_hex(str(reciver))) #hex

    compiled_sol = compile_source(replaced_contents)
    contract_interface = compiled_sol['<stdin>:STOken']
    contract_byte_code = contract_interface['bin']
    hello = tron.trx.contract(
      abi=contract_interface['abi'],
      bytecode=contract_byte_code,
    )
    # Submit the transaction that deploys the contract
    tx_data = hello.deploy(
      fee_limit=10**9,
      call_value=0,
      consume_user_resource_percent=1
    )
    #print (compiled_sol)
    sign = tron.trx.sign(tx_data)
    result = tron.trx.broadcast(sign)
    #result["easyaddress"]  = 
    #app.log.debug("work statement\n========="+json.dumps(result))
    result["contract_address"] = tron.address.from_hex(result["transaction"]["contract_address"]).decode()
    return result

@app.route('/introspect', methods=['POST','GET','PUT'])
def introspect():
    return app.current_request.to_dict()