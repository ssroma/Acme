import moment  from 'moment-timezone'


const dataFarmater = (time) => {
    let getTime = moment(time).format('LT');
    let getGMT = moment(time).toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1];
    return `${getTime} ${getGMT}`;
}


export {
    dataFarmater
}