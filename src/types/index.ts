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
