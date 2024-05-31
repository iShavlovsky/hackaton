export interface Party {
    avatar: string
    name: string
    description: string
}

export interface Owner {
    avatar: string
    name: string
    owner: boolean
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
