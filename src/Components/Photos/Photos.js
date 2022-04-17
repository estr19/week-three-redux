import photos from '../../data/catalog';
import Photo from "./Photo";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/photoSlice";

const Photos = () => {
  const selectedCategory = useSelector(getSelectedCategory);
  const data = photos; // .sort(() => Math.random() - 0.5)
  
  return (
    <div>
      <h2>Make your photograph and size selections below:</h2>
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