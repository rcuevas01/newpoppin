import React from 'react'
import {Party} from './types'
import PartyCard from './partyCard'

interface PartyListProps {
    parties: Party[]
}

const PartyList = ({parties}: PartyListProps) => {
    return(
        <div className = "party-list">
            {parties.map(party => (
                <PartyCard key = {party.id }party={party}></PartyCard>
            ))
            }
        </div>
    )
}

export default PartyList;