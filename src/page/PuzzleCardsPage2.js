import React, {Component} from 'react';
import {Button, Card} from 'antd';
import {connect} from 'dva';

const namespace = 'puzzlecards';

const mapStateToProps = (state) => {
    const cardList = state[namespace].data;
    return {
        cardList,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDidMount: () => {
            dispatch({
                type: `${namespace}/queryInitCards`
            });
        }
    };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class PuzzleCardsPage2 extends Component {

    // 在 React 16 中，页面初始化时的异步请求必须只能在 componentDidMount 中做，
    // 不能在 constructor, UNSAFE_componentWillMount, UNSAFE_componentWillReceiveProps, getDerivedStateFromProps 中做。
    componentDidMount() {
        this.props.onDidMount();
    }

    render() {
        // do something

        // 返回一个jsx语法的html节点
        return (
            <div>
                {/* 使用{}包裹js语句 */}
                {
                    // ！！！ 注意这里改成了 this.props.cardList
                    this.props.cardList.map(card => {
                        return (
                            <Card key={card.id}>
                                <div>Q: {card.setup}</div>
                                <div>
                                    <strong>A: {card.punchline}</strong>
                                </div>
                            </Card>
                        )
                    })
                }
            </div>
        )
    }

}

