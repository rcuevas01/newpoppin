import React, { useState, useEffect } from 'react';
import PartyList from './partyList';
import SearchBar from './searchBar';
import { generateRandomParty } from './partyGenerator';
import { Party } from './types';
import './App.css';
import GeneratePartyButton from './generatePartyButton';

const App = () => {
  const [parties, setParties] = useState<Party[]>([])
  const [searchTerm, setSearchTerm] = useState('')


  useEffect(() => {
    // Generate initial parties
    const initialParties = Array(3).fill(null).map(() => generateRandomParty());
    setParties(initialParties);
  }, []);

  const addRandomParty = () => {
    setParties([...parties, generateRandomParty()])
  }

  const filteredParties = parties.filter(party =>
    party.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return(<div className="app">
    <h1>Party Explorer</h1>
    <GeneratePartyButton onClick = {addRandomParty}></GeneratePartyButton>
    <SearchBar onSearch={setSearchTerm}></SearchBar>
    <PartyList parties = {filteredParties}></PartyList>
  </div>)

}

export default App;
