const e=[{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"uint256",name:"needed",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ERC1155InsufficientBalance",type:"error"},{inputs:[{internalType:"address",name:"approver",type:"address"}],name:"ERC1155InvalidApprover",type:"error"},{inputs:[{internalType:"uint256",name:"idsLength",type:"uint256"},{internalType:"uint256",name:"valuesLength",type:"uint256"}],name:"ERC1155InvalidArrayLength",type:"error"},{inputs:[{internalType:"address",name:"operator",type:"address"}],name:"ERC1155InvalidOperator",type:"error"},{inputs:[{internalType:"address",name:"receiver",type:"address"}],name:"ERC1155InvalidReceiver",type:"error"},{inputs:[{internalType:"address",name:"sender",type:"address"}],name:"ERC1155InvalidSender",type:"error"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"address",name:"owner",type:"address"}],name:"ERC1155MissingApprovalForAll",type:"error"},{inputs:[],name:"OnlyPartyCreator",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"party_id",type:"uint256"}],name:"PartyCreated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"bytes32",name:"task_id",type:"bytes32"},{components:[{internalType:"uint256",name:"temp",type:"uint256"}],indexed:!1,internalType:"struct RevenueHouse.PartyTask",name:"partyTask",type:"tuple"}],name:"PartyTaskCreated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"value",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"burnBatch",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"party_id",type:"uint256"},{internalType:"bytes32",name:"task_id",type:"bytes32"},{internalType:"bytes32",name:"salt",type:"bytes32"}],name:"claim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"createRS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"party_id",type:"uint256"},{components:[{internalType:"uint256",name:"temp",type:"uint256"}],internalType:"struct RevenueHouse.PartyTask",name:"partyTask",type:"tuple"}],name:"createTask",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"},{internalType:"bytes32",name:"_task_id",type:"bytes32"}],name:"generatePrivateKey",outputs:[{internalType:"bytes32",name:"secretKey",type:"bytes32"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"party_id",type:"uint256"}],name:"getTaskId",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"party_id",type:"uint256"}],name:"influencersParty",outputs:[{internalType:"address",name:"influencer",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"lastPartyId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"task_id",type:"bytes32"}],name:"party_tasks",outputs:[{internalType:"uint256",name:"temp",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"values",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"party_id",type:"uint256"}],name:"total_party_tasks",outputs:[{internalType:"uint256",name:"total_party_tasks",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}];export{e as a};