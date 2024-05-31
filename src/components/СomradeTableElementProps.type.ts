export interface Party {
    avatar: string
}

export interface ComradeTableElementProps {
    index: number
    party: Party
    username: string
    type: string
    address: string
    share: string
    yourTokens: number
    yourTokensChange: number
    oneDayTokens: number
    oneDayTokensChange: number
}
