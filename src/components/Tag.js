import React from 'react';
import style from '../css/Tag.module.css';


function Tag ({skillArray}){
    const tag=skillArray.map((element, key) => 
            <div className={style.tagButton} key={key}>{element}</div>
    )

    return(
        <div className={style.tag}>
            {tag}
        </div>
    )
}

export default Tag;