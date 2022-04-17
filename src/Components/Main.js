import AllFilters from './Filters/AllFilters';
import Photos from './Photos/Photos';
// import Cart from './Cart/Cart';

function Main() {
  return (
    <div>
      <h1>A tiny cat that dared to dream BIG.</h1>
      <div className='main'>
        <div>
          <AllFilters />
            <Photos />
        </div>
        {/* <div className='row'>
          <div className='doubleColumn'>
          </div>
          <div className='singleColumn'>
            <Cart />
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Main;