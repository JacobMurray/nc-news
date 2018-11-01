import * as api from './api';

export const handleVoteMod = (voteMod, direction, id , type) => {
    if(voteMod === 0){
        api.patchVote(direction, id , type)
        return direction === 'up' ? 1 : -1
    }
    if(voteMod < 0){
        api.patchVote('up', id, type)
        if(direction === 'up'){
            api.patchVote(direction , id, type)
            return 1
        }
        return 0
    }
    if(voteMod > 0){
        api.patchVote('down' , id, type)
        if(direction === 'down'){
            api.patchVote(direction, id, type)
            return -1
        }
        return 0
    }
}