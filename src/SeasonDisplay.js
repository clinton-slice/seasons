import './SeasonDisplay.css'
import React from 'react';

const seasonConfig = {
    summer: {text: "It's Summer Time !!!", iconName: 'sun'},
    winter: {text: "Burr, it's chilly", iconName: 'snowflake'}
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else  {
        return lat < 0 ? 'winter' : 'summer';
    }
};
const SeasonDisplay = (props) => {
    console.log(props)
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
            <div className="ui divided selection list">
                <div className={'item'}>
                    <div className="ui black large label">{props.date.toLocaleString()}</div>
                </div>

                    <h1>{text}</h1>

            </div>

            <i className={`icon-right massive ${iconName} icon`}/>
        </div>

    )
}

export default SeasonDisplay;
