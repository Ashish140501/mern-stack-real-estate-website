import { listData } from '../../lib/dummydata'
import './listPage.scss'
import Filter from '../../components/filter/filter'
import Card from '../../components/card/Card'

function ListPage() {
  const data = listData;
  console.log(data)

  return (
    <div className='listPage'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter />

          {listData.map(item => (
            <Card key={item.id} item={item} />
          ))}

        </div>
      </div>
      <div className="mapContainer">MapContainer</div>
    </div>
  )
}

export default ListPage