import { api } from '../services/api';

const updateCurrentTime = async (
  currentTime: number,
  watched: boolean,
  lesson_id: any
) => {
  await api.put(`/watch/watch-data/${lesson_id}`, {
    timeWatched: currentTime,
    watched,
  });
};
export { updateCurrentTime };
