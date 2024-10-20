import React from 'react';
import Img from './Img';
import Content from './Content';
import data from './data';

export default function Cards() {
   
    return (
        <div>
        <div className="card" style={{width: 18 +'rem'}}>
            <Img src="https://avatars.mds.yandex.net/get-mpic/5236458/img_id4368617225065161954.jpeg/orig" alt="Image cap"/>
            <Content title="Card title">{data[0].text}</Content>
        </div>

        <div className="card" style={{width: 18 +'rem', marginTop: 100 +'px'}}>       
            <Content title="Special title treatment">{data[1].text}</Content>
        </div>
        </div>
        
    )
}