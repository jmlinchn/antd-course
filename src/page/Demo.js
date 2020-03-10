import React from 'react';

const MyInput = ({ value = '', onChange }) => (
    <input value={value} onChange={onChange} />
);

class Demo extends React.Component {

    state = {
        text: '',
    }

    onTextChange = (event) => {
        this.setState({ text: event.target.value });
    }

    onTextReset = () => {
        // 设置 MyInput 内部 input 元素 value 为 ''
        this.setState({ text: '' });
    }

    render() {
        return (
            <div>
                <MyInput value={this.state.text} onChange={this.onTextChange} />
                <button onClick={this.onTextReset}>重置</button>
            </div>
        )
    }
}

export default Demo;