import React from 'react'
import faqstyles from './styles/faq.module.scss';
// import styles from './styles.'

import { Collapse } from 'antd';

const { Panel } = Collapse;

function callback(key) {
  console.log(key)
}

const text = `
GirlScript is the fastest growing tech-community in India. 
It is a non-profit project brought to you by GirlScript Foundation to help beginners in technology.
`;


export default function Faq() {
  return (
    <div className={faqstyles.faqContainer}>
      <div className={faqstyles.faqHeading}>FAQ</div>
      <Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header=" Is the Girlscript coomunity open for all genders " key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="How to apply for Girlscript " key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="What does Girlscript Offer " key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    );</div>
  )
}
