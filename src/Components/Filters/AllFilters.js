import Filter from "./Filter";

const AllFilters = () => {
  return (
    <div className='filterItems'>
      {['ALL', 'Baboon', 'Grandma T', 'Hoonces', 'Friends', 'Bathtub Gin', 'Silly Cat'].map((category, index) => <Filter category={category} key={index} />)}
    </div>
  )
}

export default AllFilters;