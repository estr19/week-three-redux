import photos from '../../data/catalog';
import Photo from "./Photo";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/photoSlice";
import AllFilters from '../Filters/AllFilters';

const Photos = () => {
  const selectedCategory = useSelector(getSelectedCategory);
  const data = photos; // .sort(() => Math.random() - 0.5)
  
  return (
    <div>
      <div className='main'>
        <AllFilters />
        <h2>Make your photograph and size selections below:</h2>
      </div>
      <div className='list'>
        {data
        .filter(photo => {
          if (selectedCategory === 'ALL') return true;
            return selectedCategory === photo.category;
        })
        .map(photo => <Photo photo={photo} key={photo.id} />)}
      </div>
    </div>
  )
}

export default Photos;