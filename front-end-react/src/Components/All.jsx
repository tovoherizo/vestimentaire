import React from 'react'
import chaussur from './photo/section2/chaussur.jpg';
import sac from "./photo/section2/sac.jpg";
import dame from "./photo/section2/dame.jpg";
import capuche from "./photo/section2/capuche.jpg";
import lunette from "./photo/section2/lunette.jpg";
import skate from "./photo/section2/skate.jpg";
import './All.css';
function All() {
  return (
    <div className="All">
      <div className="class0">
        <div className="class1">
          <div>
            <img
              src={chaussur}
              alt="chaussur"
              style={{ marginRight: "10px" }}
            />
          </div>
          <div>
            <img src={sac} alt="sac" style={{ marginTop: "18px" }} />
          </div>
        </div>
        <div className="class2">
          <img src={dame} alt="dame" />
        </div>
        <div>
          <div className="class3">
            <img src={capuche} alt="capuche" style={{ marginLeft: "10px" }} />
          </div>
          <div>
            <img
              src={lunette}
              alt="lunette"
              style={{ marginTop: "18px", marginLeft: "10px" }}
            />
          </div>
        </div>
      </div>
      <div>
        <img
          src={skate}
          alt="skate"
          style={{ width: "74vw", marginTop: "8px"}}
        />
      </div>
    </div>
  );
}

export default All