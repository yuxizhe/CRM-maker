import React from 'react';
import {inject, observer} from 'mobx-react';
import { Button, Input, Select, TimePicker, DatePicker, Checkbox, Radio, Divider, Descriptions} from 'antd';

const { TextArea } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
const DescriptionsItem = Descriptions.Item;

@inject('DSL')
@observer
class Item extends React.Component {
  DSL = this.props.DSL

  setSelect = () => {
    this.DSL.selectItem = this.props.element;
  }
  render() {
    let element = this.props.element;
    return (
      <div onClick={this.setSelect} className="editor-item">
        {/* {element.componentText}:  */}
        {element.componentName === 'Button' &&
          <Button>
            {element.componentText}
          </Button>
        }
        {element.componentName === 'Input' &&
          <div className="form-item-line">
            <span className="label">{element.props.label}: </span>
            <Input placeholder={element.props.placeholder}/>
          </div>
        }
        {element.componentName === 'DescriptionsItem' &&
          <DescriptionsItem label={element.props.label}>
            {element.props.defaultValue}
          </DescriptionsItem>
        }
        {element.componentName === 'Divider' &&
          <Divider />
        }
        {element.componentName === 'TextArea' &&
          <div className="form-item-line">
            <span className="label">{element.props.label}: </span>
            <TextArea placeholder={element.props.placeholder}/>
          </div>
        }
        {element.componentName === 'Select' &&
          <div className="form-item-line">
            <span className="label">{element.props.label}: </span>
            <Select style={{ width: 120 }} placeholder={element.props.placeholder}>
              {element.props.dataSource.map(item => (
                  <Option key={item.value} label={item.label} value={item.value}>
                    {item.label}
                  </Option>
                ))
              }
            </Select>
          </div>
        }
        {element.componentName === 'RadioGroup' &&
          <div className="form-item-line">
            <span className="label">{element.props.label}: </span>
            <RadioGroup>
              {element.props.dataSource.map(item => (
                  <Radio key={item.value} label={item.label} value={item.value}>
                    {item.label}
                  </Radio>
                ))
              }
            </RadioGroup>
          </div>
        }
        {element.componentName === 'CheckboxGroup' &&
          <div className="form-item-line">
            <span className="label">{element.props.label}: </span>
            <CheckboxGroup>
              {element.props.dataSource.map(item => (
                  <Checkbox key={item.value} label={item.label} value={item.value}>
                    {item.label}
                  </Checkbox>
                ))
              }
            </CheckboxGroup>
          </div>
        }
        {element.componentName === 'TimePicker' &&
          <div className="form-item-line">
            <span className="label">{element.props.label}: </span>
            <TimePicker />
          </div>
        }
        {element.componentName === 'DatePicker' &&
          <div className="form-item-line">
            <span className="label">{element.props.label}: </span>
            <DatePicker />
          </div>
        }
        {element.componentName === 'RangePicker' &&
          <div className="form-item-line">
            <span className="label">{element.props.label}: </span>
            <RangePicker />
          </div>
        } 
      </div>
    )
  }
}

export default Item