

export const pagination = (length , list , currentPge) => {

  const TOUR_PER_PAGE = 6;

  const pages = Math.ceil(length / 6);
  
  const startIndex = (currentPge -1 ) * TOUR_PER_PAGE;
  const finishIndex = (currentPge * TOUR_PER_PAGE)  ;
  const orderTourList = list.slice(startIndex , finishIndex);

  return{ pages , orderTourList}

}