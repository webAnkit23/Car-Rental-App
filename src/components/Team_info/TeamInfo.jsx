import React from 'react'
import Card from '../Card/Card';
import './TeamInfo.css'
import team_info from '../../datas/myteam';
export default function TeamInfo() {
  return (
    <section className='team_info_section'> 
          <div className="team_info_container">
            {team_info.map((person) => {
                return (<Card key={person.name} person ={person}></Card>);
            })};
          </div>
    </section>
  )
}
