import {WARNING_MESSAGE} from '../const';

export function createEmptyPointListTemplate(currentFilterType) { //all
  return (
    `<p class="trip-events__msg">${WARNING_MESSAGE[currentFilterType]}</p>`
  );
}
