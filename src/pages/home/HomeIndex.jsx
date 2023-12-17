import Banner from "components/banner/Banner";
import HeroHeader from "components/hero-header/HeroHeader";
import NewsLetter from "components/news-letter/NewsLetter";
import Pagination from "components/pagination/Pagination";
import Services from "components/services/Services";
import SortInput from "components/sort-input/SortInput";
import ToursList from "components/tours/ToursList";
import { toursList } from "data";
import { useState } from "react";
import { pagination } from "utils/pagination";


const HomeIndex = () => {
  const [currentPge, setcurrentPge] = useState(1);
  const [sortItem, setsortItem] = useState("recomended");
    //sort tour
  const sortedTourList = sortItem === "low" ? toursList.sort((a , b)=> a.priceFrom - b.priceFrom)
  : sortItem === "high" ? toursList.sort((a,b)=> b.priceFrom - a.priceFrom) : toursList.sort((a,b)=> b.rating - a.rating );
  

  const {pages , orderTourList} =  pagination(toursList.length , sortedTourList , currentPge);




  return (
    <>
  
     <HeroHeader/>
     <Services/>
     <SortInput toursLength={toursList.length} setsortItem={setsortItem} sortItem={sortItem}/>
     <ToursList orderTourList={orderTourList}/>
     <Pagination pages={pages} currentPge={currentPge} setcurrentPge={setcurrentPge}/>
    <Banner/>
    <NewsLetter/>
  
  </>
  )
}

export default HomeIndex