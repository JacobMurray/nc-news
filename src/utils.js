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

export const timeSince = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}