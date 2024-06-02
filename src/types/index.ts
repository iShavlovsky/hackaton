export interface IEventCard {
    title: string
    description: string
    status: boolean
}

export interface IQuestCard {
    id: number
    imageSrc: string
    title: string
    description: string
    tags: string[]
    totalUsers: string
    reward: string
    user1: string
    user2: string
    user3: string
    questSteps: number
    events: IEventCard[]
}

export interface IPartyMembers {
    id: string | number
    name: string
    description: string
    revenue: number | null
}

export interface ICreatePartyForm {
    name: string
    description: string
    owner: string
    share: number | null
    partyMembers: IPartyMembers[]
}

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

export interface PartyMember {
    id: string | number
    name: string
    description: string
    revenue: number | null
}

export interface PartyData {
    index: number
    party: Party
    owner: Owner
    share: number | null
    partyMembers: PartyMember[]
    people: number
    yourTokens: number
    yourTokensPercentage: number
    totalDistributed: number
    totalDistributedPercentage: number
}

export type ContractFuncctionName =
    | 'burn'
    | 'burnBatch'
    | 'claim'
    | 'createRS'
    | 'createTask'
    | 'safeBatchTransferFrom'
    | 'safeTransferFrom'
    | 'setApprovalForAll'
