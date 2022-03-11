import React from 'react'
import styles from './styles/faq.module.scss';
import { Collapse } from 'antd';
const buttons = () => {
  return (
      <div>
          <h1>FAQ</h1>
          
      </div>
  )
};

export default buttons;


const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
export default function Faq() {
  return (
    <div className={styles.faqContainer}><Collapse accordion>
    <Panel header="Is the Girlscript coomunity open for all genders" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="How to apply for Girlscript" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="What does Girlscript Offer" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse></div>
  )
}
