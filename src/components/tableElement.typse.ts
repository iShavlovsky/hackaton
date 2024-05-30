export interface Party {
    avatar: string
    name: string
    description: string
}

export interface Owner {
    avatar: string
    name: string
}

export interface TableRowData {
    index: number
    party: Party
    owner: Owner
    people: number
    yourTokens: number
    yourTokensPercentage: number
    totalDistributed: number
    totalDistributedPercentage: number
}
