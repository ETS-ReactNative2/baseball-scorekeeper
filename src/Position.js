import React, { Component } from 'react';
import { BaseballField } from './BaseballField';
import './Position.css';
import { PlayerNames } from './PlayerNames';

export class Position extends Component {
    
    results = [];

    constructor(props) {
        super(props);

        if(this.props.stats && this.props.stats.players) {
            this.players = this.props.stats.players;
        }
    }

    handleResultUpdate = (stats) => {
        this.results[stats.inning - 1] = stats;
        
        if (this.props.onUpdate) {
            this.props.onUpdate({ position: this.props.number, results: this.results, players: this.players });
        }
    }

    handlePlayerUpdate = (players) => {
        this.players = players;

        if (this.props.onUpdate) {
            this.props.onUpdate({ position: this.props.number, results: this.results, players: this.players });
        }
    }

    render = () => {
        let players = Array.from({length: 9}, (e, i) => (
            <div key={`${this.props.number}-${i}`} className="inning">
                <BaseballField inning={i + 1} onChange={this.handleResultUpdate} result={this.props.stats.results[i]}/>
            </div>
        ));
        
        return <div className="position">
            <div className="players">
                <PlayerNames onChange={this.handlePlayerUpdate} players={this.props.stats.players}/>
            </div>
            <div className="results">
                {players}
            </div>
        </div>
    }
}

