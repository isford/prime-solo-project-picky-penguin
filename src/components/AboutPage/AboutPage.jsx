import React from 'react';
import './AboutPage.css'

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h2>Why is this Needed?</h2>
        <p>African Penguins historically had a population 
          of 4 million birds at the advent of the 19th 
          century but due to poaching and habitat destruction 
          their numbers have reduced to 50,000 birds, and 
          they are still declining. Zoos around the world 
          have heard the plight of these amazing animals 
          and are breeding them in captivity to release back 
          into the wild. Currently for general health most zoos 
          record feeding numbers to better understand how a bird 
          is doing, and it is recorded on a tally sheet which is 
          then transcribed into a hardcopy and then stored locally 
          into a program such as excel. This wastes valuable time 
          to keepers who could better use that time enriching 
          animals.</p>

        <p>Picky Penguins allows users to see all the birds 
          in their care and then start recording how much each 
          bird has eaten. After you are done feeding you can 
          look at individual birds to see what their typical 
          eating pattern has been, and look for trends. </p>

          <p>
           Through the use of this app patterns can be more 
           easily recognized, and adjustments to diet can be 
           made to keep these amazing animals happy and healthy 
           to ultimately re-invigorate the wild populations.
          </p>
      </div>
    </div>
  );
}

export default AboutPage;
