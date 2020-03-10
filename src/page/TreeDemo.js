import React from 'react';
import { Tree } from 'antd';

const { TreeNode } = Tree;

class TreeDemo extends React.Component {
    state = {
        expandedKeys: [],
    }

    // 接收原本的展开事件，在 state 中记录 expandedKeys
    onExpand = (expandedKeys) => {
        this.setState({ expandedKeys });
    }

    // 接收选中事件，修改 expandedKeys
    onSelect = (selectedKeys) => {
        const { expandedKeys } = this.state;
        const key = selectedKeys[0];

        if (expandedKeys.includes(key)) { // 点击已经展开的结点
            // 移除 key
            this.setState({
                expandedKeys: expandedKeys.filter(k => k !== key),
            });
        } else { // 点击关闭的结点
            // 添加 key
            this.setState({ expandedKeys: [...expandedKeys, key] })
        }
    }

    treeData = [
        {
            title: "parent 1",
            key: "0-0",
            children: [
                {
                    title: "leaf",
                    key: "0-0-0",
                },
                {
                    title: "leaf",
                    key: "0-0-1",
                }
            ]
        }
    ]

    render() {
        return (
            <Tree
                // 设置展开的结点
                expandedKeys={this.state.expandedKeys}
                // 设置被选中的结点
                selectedKeys={[]}
                // 结点被展开/关闭时触发
                onExpand={this.onExpand}
                // 结点被选中时触发
                onSelect={this.onSelect}
                treeData={this.treeData}
            >
                {/* 直接写结点的方式已经过时，新版本使用 treeData 属性定义子节点 */}
                {/* <TreeNode title="parent 1" key="0-0">
                    <TreeNode title="leaf" key="0-0-0" />
                    <TreeNode title="leaf" key="0-0-1" />
                </TreeNode> */}
            </Tree>
        )
    }
}

export default TreeDemo;