import React from "react";
import ReactDOM from "react-dom";
import {yeniKartlar1, yeniKartlar2, yeniKartlar3} from "./oyun";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...this.state, oyun1:yeniKartlar1(), oyun2:yeniKartlar2(), oyun3:yeniKartlar3()};
    }
    render() {
        const oyun1 = this.state.oyun1;
        const oyun2 = this.state.oyun2;
        const oyun3 = this.state.oyun3;
        return(
            <>
            <p>Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. İlk tercihte Kedi kartını bulamazsan 2. seçim hakkı tanınacaktır.</p>
            <img id="img0" className="kart" src="turuncu.png" onClick={() => this.oyun1.yeniKartlar1()}/>
            <img id="img1" className="kart" src="turuncu.png" onClick={() => this.oyun2.yeniKartlar2()}/>
            <img id="img2" className="kart" src="turuncu.png" onClick={() => this.oyun3.yeniKartlar3()}/>
            <div className="mesaj">
            <p id="alanId">Kedi kartını bulmak için kartın üzerine tıklayın.</p>
            <p id="kazandiId" style="display: none"></p>
            <p id="yenildiId" style="display: none"></p>
            </div>
            </>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));