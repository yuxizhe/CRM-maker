import React from 'react';
// import { Button } from 'antd';
import Item from './Item';
import { observer } from 'mobx-react';
import { ReactSortable } from "react-sortablejs";
import { addItem } from '../util/index';

@observer
class ItemContainer extends React.Component {
  render() {
    let element = this.props.element;
    return (
      <div className={'item-container'}>
        {element.componentName.match(/^(Modal|Card|Descriptions)$/) ?
          <div>
            {element.componentText}: 
            <ReactSortable
              list={element.children}
              setList={(newList, func, dragStore) => {
                // TODO: 提PR修改react-sortablejs库的逻辑
                // 判断是add还是move ..
                if(JSON.stringify(element.children).length === JSON.stringify(newList).length ) {
                  element.children = newList
                }
              }}
              group={{ name: "cloning-group-name" }}
              onAdd={(evt, func, dragStore) => addItem(evt, func, dragStore, element.children)}
              // move function 没有找到新旧index
              // onMove={(moveEvt, evt, func, dragStore) => moveItem(moveEvt, evt, func, dragStore, list)}
              style={{minHeight: '50px'}}
            >
                {element.children.map(item => {
                  return (
                    // <Item key={item.props.key} element={item} />
                    <ItemContainer key={item.props.key} element={item}/>
                  )
                })}
            </ReactSortable>
          </div>
          : <Item key={element.props.key} element={element} />
        }

      </div>
    )
  }
}

export default ItemContainer