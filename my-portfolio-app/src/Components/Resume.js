import React, { Component } from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

export default class Resume extends Component {
  render() {
    return (
      
      <div className= "container">
        <div className= "heading">
            <h1>Experience</h1>
        </div>
        <hr></hr>
     
        <Timeline lineColor={'#000000'}>
        <TimelineItem
            dateText="09/2006 – Present"
            dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3 style={{ color: '#61b8ff' }}>Founder</h3>
            <h4 style={{ color: '#61b8ff' }}>Synapses Adventures Pvt Ltd</h4>
            <hr></hr>
            <p>
              <strong>Organisational behaviour consultant, experiential learning trainer, project manager and expedition leader.</strong>
            </p>
            <p>
              •	Identify, analyse and improve the organisations’ culture via policies, procedures and coordinate the development cycle of the projects.
              •	Conduct employee surveys and create reports to asses the effectiveness of change through trainings and engagement activities.
              •	Build performance management systems for tracking the development cycle and impact analysis.
              •	Create and manage member participants related to the various stages of the projects.
              •	Work closely with the sponsors and team leaders to successfully complete the projects.
              •	Effectively and accurately communicate project information to the team leaders and provide relevant updates to the sponsor via communication charts and tools.
              •	Design and conduct experiential learning workshops based on teamwork, leadership, communication, risk management and mitigation processes, time management and importance of on-time delivery.
              •	Assess, evaluate risks and incorporatecomprehensive risk management planfor expeditions based on extreme adventure sports.
              •	Create collaterals and build effective public relations, media, social media and marketing campaigns.
            </p>
          </TimelineItem>
          <TimelineItem
            dateText="03/2003 – 02/2006"
            dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3 style={{ color: '#61b8ff' }}>Assistant Manager - Quality</h3>
            <h4 style={{ color: '#61b8ff' }}>EXL Service Pvt. Ltd</h4>
            <hr></hr>
            <p>
              <strong>Quality assurance for voice and data based contact centre operations.</strong>
            </p>
            <p>
              •	Deploy Quality Assurance framework for all voice processes
              •	Shortlist/Hire and train Quality Compliance Analysts to deliver transactional quality scores and qualitativeanalysis
              •	Partner with operations to drive improvement initiatives based on Six Sigma.
            </p>
          </TimelineItem>
          
          <TimelineItem
            dateText="03/2002 – 02/2003"
            dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3 style={{ color: '#61b8ff' }}>Analyst - Quality</h3>
            <h4 style={{ color: '#61b8ff' }}>EXL Service Pvt. Ltd</h4>
            <hr></hr>
            <p>
              <strong>Call monitoring for outbound telemarketing, inbound technology support and insurance policies.</strong>
            </p>
            <p>
              •	Evaluate transactions and provide feedback to customer care executives. 
              •	Prepare and maintain quality reports, conduct training sessions on quality standards for associates and identify training needs.
            </p>
          </TimelineItem>

          <TimelineItem
            dateText="10/2001 – 02/2002"
            dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3 style={{ color: '#61b8ff' }}>Executive - Customer Care</h3>
            <h4 style={{ color: '#61b8ff' }}>EXL Service Pvt. Ltd</h4>
            <hr></hr>
            <p>
              <strong>Telemarketing for home equity loans.</strong>
            </p>
            <p>
              •	Lead generation for refinancing home equity loansoffered by a US based insurance company.
            </p>
          </TimelineItem>

          <TimelineItem
            dateText="04/2000 – 09/2001"
            dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3 style={{ color: '#61b8ff' }}>Executive - Customer Care</h3>
            <h4 style={{ color: '#61b8ff' }}>EXL Service Pvt. Ltd</h4>
            <hr></hr>
            <p>
              <strong>Telemarketing for home equity loans.</strong>
            </p>
            <p>
              •	Lead generation for refinancing home equity loansoffered by a US based insurance company.
            </p>
          </TimelineItem>

        </Timeline>
                       
            
      </div>
    )
  }
}
