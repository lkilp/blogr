import React from 'react';
import './Application.scss';
import ContentBox from './ContentBox';

const Application = () => {
    return(
        <div className="Application">
            <div className="left"></div>
            <div className="right">
                <ContentBox title="Free, open, simple" content="Blogr is a free and open source application backed by a large community of helpful developers. It supports 
  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."/>
                <ContentBox title="Powerful tooling" content="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
  capable of producing even the most complicated sites."/>
            </div>
        </div>
    )
}
export default Application;