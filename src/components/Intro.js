import React from 'react';
import ContentBox from './ContentBox';
import './Intro.scss';

            
              
const Intro = () => {
    return(
        <div className="Intro">
            <h2>Designed for the future</h2>
            <div className="left">
            <ContentBox title="Introducing an extensible editor"
                        content="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                        The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                        videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                        change the looks of a blog."
            />
            <ContentBox title=" Robust content management"
                        content="  Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                        by adding customized categories, sections, format, or flow. With this functionality, you’re in full control."
            />
            </div>
            
            <div className="right">
                
            </div>                 
        </div>
    )
}
export default Intro;