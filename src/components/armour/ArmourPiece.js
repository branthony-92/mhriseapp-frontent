import { useState } from "react";
import Card from "react-bootstrap/Card";
import ArmourStats from "./ArmourStats";

function ArmourPiece(props) {

    function handleToggleStats() {
        //console.log("clicked")
        props.onSelect(props.info)
    }

    return (
        <Card onClick={handleToggleStats} style={{height: 75, width: 75}}>
            {props.info && <Card.Img src={props.img}/>}
        </Card>
    );
}

export default ArmourPiece;