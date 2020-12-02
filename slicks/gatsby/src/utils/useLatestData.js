import { useState, useEffect } from "react";

export default function useLatestData() {
    // hotslices
    const [hotSlices, setHotSlices ] = useState();
    // slicemasters
    const [ slicemasters, setSliceMasters ] = useState();
    // use a side effect to fetch the data from the graphQl endpoint
    useEffect(function() {
        // when the component loads, fetch the data
        fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                query {
                    StoreSettings(id: "downtown") {
                        name
                        slicemaster {
                            name
                        }
                        hotSlices {
                            name
                        }
                    }
                }
                `,
            })
        })
        .then((res) => res.json())
        .then((res) => {
            // TODO: check for errors
            // set the data to state
            setHotSlices(res.data.StoreSettings.hotSlices);
            setSliceMasters(res.data.StoreSettings.slicemaster);
        });
    },[]);
    return {
        hotSlices,
        slicemasters,
    }
}