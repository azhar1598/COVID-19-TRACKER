import React from 'react'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import './SearchPage.css'
import ChannelRow from "./ChannelRow"
import VideoRow from './VideoRow'

function SearchPage() {
    return (
        <div className="searchPage">
              <div className="searchPageFilter">
                  <TuneOutlinedIcon/> 
                  <h2> Filter</h2>
              </div>
      
       
        <hr/>

        <ChannelRow 
        image="https://careerfoundry.com/en/blog/uploads/web_dev_pillar_page.jpg"
        channel="Life is Beautiful"
        verified
        subs="700k"
        noOfVideos={277}
        description="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        /> 
        <hr/>

        <VideoRow
         image="https://careerfoundry.com/en/blog/uploads/web_dev_pillar_page.jpg"
         channel="Life is Beautiful"
         verified
         views="1M"
         subs="700k"
       timestamp="59 secondes ago"
         description="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
        
        />

        </div>
    )
}

export default SearchPage
