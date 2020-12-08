import React from 'react';
import useLatestData from '../utils/useLatestData';
import LoadingGrid from '../components/LoadingGrid';
import { HomePageGrid } from '../styles/Grids';
import ItemGrid from '../components/ItemGrid';
// sannity graphql

function CurrentlySlicing({ slicemasters }) {
    // console.log(slicemasters);
    return (
      <div>
          <h2 className="center">
              <span className="mark tilt">Slicemasters</span>
          </h2>
          <p>Standing by ready to cut you up</p>
          {/* if there are no slicemasters */}
        {!slicemasters && <LoadingGrid count={4} />}
        {/* if there are slicemasters but array is empty */}
        {slicemasters && !slicemasters?.length && (
          <p>No one is working right now!</p>
        )}
        { slicemasters?.length && <ItemGrid items={slicemasters} /> }
      </div>
    );
  }
  function HotSlices({ hotSlices }) {
    
    return (
      <div>
          <h2 className="center">
              <span className="mark tilt">Hot Slices</span>
          </h2>
          <p>come on by, buy the slice</p>
        {!hotSlices && <LoadingGrid count={4} />}
        {hotSlices && !hotSlices?.length && <p>Nothin' in the Case</p>}
        { hotSlices?.length && <ItemGrid items={hotSlices} /> }
      </div>
    );
  }

export default function HomePage() {
    const {slicemasters, hotSlices} = useLatestData();
    
    return (
        <div className="center">
            <h1>The Best Pizza Downtown!</h1>
            <p>Open 11am to 11pm Every Single Day</p>
            <HomePageGrid>
            <CurrentlySlicing slicemasters={slicemasters} />
            <HotSlices hotSlices={hotSlices} />
            </HomePageGrid>
        </div>
    )
}
