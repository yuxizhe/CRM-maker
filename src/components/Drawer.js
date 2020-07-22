import React from 'react';
import { Divider, Button } from 'antd';
import { ReactSortable } from "react-sortablejs";

import { basicComponents, layoutComponents } from './InitJson'

class Drawer extends React.Component {
  render() {
    return (

      <div>
        <ReactSortable
          list={layoutComponents}
          setList={() => {}}
          group={{ name: "cloning-group-name", pull: "clone", put: false }}
          sort={false}
        >
          {layoutComponents.map(item => {
            return (
              <Button style={{ margin: '2px' }} type="dashed" key={item.componentName}>{item.componentText}</Button>
            )
          })}
        </ReactSortable>
        <Divider />
        <ReactSortable
          list={basicComponents}
          setList={() => {}}
          group={{ name: "cloning-group-name", pull: "clone", put: false}}
          sort={false}
        >
          {basicComponents.map(item => {
            return (
              <Button style={{ margin: '2px' }} type="dashed" key={item.componentName}>{item.componentText}</Button>
            )
          })}
        </ReactSortable>
      </div>

    )
  }

}

export default Drawer