import React from 'react';
import ShoppingList from './ShoppingList.js';

class Content extends React.Component {
    render() {
        return (
            // 此处的 name="张三" 传入到ShoppingList组件中，成为其 this.props.name
            <ShoppingList name="张三">
                {/* 组件内部的内容传入到ShoppingList组件中，成为其 this.props.children */}
                {/* 插入其他内容 */}
            </ShoppingList>
        )
    }
}

export default Content;