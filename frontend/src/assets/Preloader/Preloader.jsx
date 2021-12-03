import React from 'react';
import s from './Preloader.module.css'

let Preloader = () => {
    return (
      <div className={s.preloader}>
          <div className={s.skWanderingCubes}>
            <div className={s.skCube + ' ' + s.skCube1}></div>
            <div className={s.skCube + ' ' + s.skCube2}></div>
          </div>
      </div>
    )
}

export default Preloader; 