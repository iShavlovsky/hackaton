import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import type { IEventCard, IQuestCard } from '@/types'

export const useQuestsStore = defineStore('quests', () => {
    const questCards: IQuestCard[] = reactive([
        {
            id: 2,
            imageSrc: './images/apebol.jpg',
            title: 'Buying Bonds on Linea with ApeBond',
            description: "Celebrate ApeBond's recent launch on the Linea Mainnet",
            tags: ['NFT marketplace'],
            totalUsers: '4k',
            reward: '15 TBA',
            user1: './images/user1.jpg',
            user2: './images/user2.jpg',
            user3: './images/user3.jpg',
            questSteps: 4,
            events: [
                {
                    title: 'Intro to Ape Bond Value',
                    description:
                        '1 - Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds',
                    status: false
                },
                {
                    title: 'Read Announcement',
                    description:
                        '3 - Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds',
                    status: false
                },
                {
                    title: 'Join ApeBond on TG',
                    description:
                        '4 - Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds',
                    status: false
                },
                {
                    title: 'Purchase a Bond via ApeBond',
                    description:
                        '5 - Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds',
                    status: false
                }
            ]
        },
        {
            id: 4,
            imageSrc: './images/linea.jpg',
            title: 'Swapping on Linea',
            description: 'Explore the Linea ecosystem and its top DEXes.\n',
            tags: ['DeFi'],
            totalUsers: '435',
            reward: '15 TBA',
            user1: './images/user4.jpg',
            user2: './images/user5.jpg',
            user3: './images/user5-1.jpg',
            questSteps: 5,
            events: [
                {
                    title: 'Intro to Ape Bond Value',
                    description:
                        '1 - Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds',
                    status: true
                },
                {
                    title: 'Read Announcement',
                    description:
                        '2 - Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds',
                    status: false
                },
                {
                    title: 'Join ApeBond on Discord',
                    description:
                        '3 - Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds',
                    status: false
                },
                {
                    title: 'Join ApeBond on TG',
                    description:
                        '4 - Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds',
                    status: false
                },
                {
                    title: 'Purchase a Bond via ApeBond',
                    description:
                        '5 - Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds',
                    status: false
                }
            ]
        }
    ])

    const handleSetEvent = ({ cardId, eventTitle }: { cardId: IQuestCard['id']; eventTitle: IEventCard['title'] }) => {
        const card = questCards.find(card => {
            return card.id === cardId
        })

        if (card) {
            const event = card.events.find(event => event.title === eventTitle)
            if (event) {
                event.status = true
            }
        }
    }

    // const localStorage = useLocalStorage()

    return { questCards, handleSetEvent }
})
