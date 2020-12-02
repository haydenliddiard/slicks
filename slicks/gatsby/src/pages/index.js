import React from 'react';
import useLatestData from '../utils/useLatestData';
import LoadingGrid from '../components/LoadingGrid';
import { HomePageGrid } from '../styles/Grids';
// sannity graphql
//https://romuqopg.api.sanity.io/v1/graphql/production/default

function CurrentlySlicing ({ slicemasters }) {
    return (
    <div>
        {!slicemasters && <LoadingGrid count={4}/>}
        {slicemasters && !slicemasters?.length && (
            <p>no ones working right now</p>
        )}
    </div>
    )
}
function HotSlices ({ hotSlices }) {
    return (
        <div>
        {!hotSlices && <LoadingGrid count={4} />}
        {hotSlices && !hotSlices?.length && 
            <p>nothing in the case</p>
            }
    </div>
    )
}

export default function HomePage() {
    const {slicemasters, hotSlices} = useLatestData();
    
    return (
        <div className="center">
            <h1>The Best Pizza Downtown!</h1>
            <p>Open 11am to 11pm Every Single Day</p>
            <HomePageGrid>
            <CurrentlySlicing slicemasters={slicemasters} />
            <HotSlices hotslices={hotSlices} />
            </HomePageGrid>
        </div>
    )
}
