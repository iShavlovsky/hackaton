import { reactive, ref, watch } from 'vue'
import { defineStore } from 'pinia'
import type { PartyData } from '@/types'
import { useStorage } from '@vueuse/core'

export const usePartyStore = defineStore('party', () => {
    const initialPartyData: PartyData[] = [
        {
            index: 1,
            party: {
                avatar: './images/party1.jpg',
                name: 'Glitch & Glam',
                description:
                    "It's time for a game party focused on Linea token quests! Join forces with other gamers, tackle challenges, and earn tokens together. Let's m"
            },
            owner: {
                avatar: './images/user7.jpg',
                name: '@meuw',
                owner: false
            },
            share: null,
            partyMembers: [
                {
                    id: 'asdad',
                    name: 'Telegram members',
                    description: 'Those who joined party via TG',
                    revenue: 15
                }
            ],
            people: 28,
            yourTokens: 3069,
            yourTokensPercentage: -4,
            totalDistributed: 15069,
            totalDistributedPercentage: 34
        },
        {
            index: 2,
            party: {
                avatar: './images/party2.jpg',
                name: 'Glitch & Glam',
                description:
                    "Join us for a game party where gamers unite to complete quests and earn Linea tokens. Team up, strategize, and conquer challenges together. Let's embark on this adventure and collect those tokens!"
            },
            owner: {
                avatar: './images/avatar-main.jpg',
                name: '@malamuth (you)',
                owner: true
            },
            share: null,
            partyMembers: [
                {
                    id: 'asdad',
                    name: 'Telegram members',
                    description: 'Those who joined party via TG',
                    revenue: 15
                }
            ],
            people: 46,
            yourTokens: 738,
            yourTokensPercentage: 20,
            totalDistributed: 2069,
            totalDistributedPercentage: 7
        }
    ]

    const bigIntSerializer = {
        read: (v: string | null) => {
            if (!v) return null
            return JSON.parse(v, (_, value) =>
                typeof value === 'string' && /^\d+n$/.test(value) ? BigInt(value.slice(0, -1)) : value
            )
        },
        write: (v: any) => JSON.stringify(v, (_, value) => (typeof value === 'bigint' ? `${value}n` : value))
    }
    const storedParty = useStorage<PartyData[]>('party', initialPartyData, localStorage, {
        serializer: bigIntSerializer,
        mergeDefaults: true
    })

    const party = reactive<PartyData[]>(storedParty.value || initialPartyData)

    watch(
        () => party,
        newVal => {
            storedParty.value = newVal
        },
        { deep: true, immediate: true }
    )

    const clearLocalStorage = () => {
        localStorage.clear()
        party.length = 0
        initialPartyData.forEach(item => party.push(item))
    }

    return { party, clearLocalStorage }
})
