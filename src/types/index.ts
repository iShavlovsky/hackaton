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
    events: IEventCard[]
}
