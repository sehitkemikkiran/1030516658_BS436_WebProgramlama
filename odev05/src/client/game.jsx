import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: Math.floor(Math.random()*3),
            durum: undefined,
            kart: ["ArkaKapak.png","ArkaKapak.png","ArkaKapak.png"],
            guess: 0,
            game:false
        };
    }

    selection = (indexA) => {
        const { kart, index, guess, game } = this.state;
        const secondImages = [
            "Kedi.jpg",
            "Kopek.jpg",
            "Kopek.jpg",
        ];

        if(!game){
            const kart = [...kart];
            let durum;

            if(index===indexA){
                kart[indexA] = "Kedi.jpg";
                durum = "Kazandın!!! Tebrik ederiz :)"
            }else{
                if(kart[indexA] = "Kopek.jpg"){
                    if(guess===1){
                        durum = "Kaybettin :( Kediyi seçmen gerekiyordu."
                    }
                }
                if(kart[indexA] = "Kopek.jpg"){
                    if(guess===1){
                        durum = "Kaybettin :( Kediyi seçmen gerekiyordu."
                    }
                }
            }
            this.setState({
                kart:kart,
                guess: this.state.guess+1,
                durum
            });

            if(durum){
                this.setState({
                    game: true
                })
            }
        }

    }

    newGame = () =>{
        this.setState({
            index: Math.floor(Math.random()*3),
            durum: undefined,
            kart: ["ArkaKapak.png","ArkaKapak.png","ArkaKapak.png"],
            guess: 0,
            game:undefined
        })
    }

    render() {
        const { kart, durum } = this.state;
        return (
            <div>
                <p>{durum?durum:"2 hakkınız kaldı."}</p>
                <img className="kart" src={kart[0]} onClick={()=>{this.selection(0)}}/>
                <img className="kart" src={kart[1]} onClick={()=>{this.selection(1)}}/>
                <img className="kart" src={kart[2]} onClick={()=>{this.selection(2)}}/>
                <div className="mesaj">
                    {durum && <button onClick={this.newGame} className="new-game-button">Yeni Oyun</button>}
                </div>
            </div>
        );
    }
}