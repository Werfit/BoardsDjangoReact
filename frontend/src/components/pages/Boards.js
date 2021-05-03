import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { loadBoards } from 'actions/boards'

import BoardItem from '../boards/BoardItem'
import Loader from '../common/Loader'

const Boards = () => {
    const { list: boards, isLoading } = useSelector(state => state.boards)
    const dsp = useDispatch()

    useEffect(() => dsp(loadBoards()), [])

    return (
        <div className="container">
            <ol className="breadcrumb my-4">
                <li className="breadcrumb-item active">Home</li>
            </ol>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>Board</th>
                        <th>Posts</th>
                        <th>Topics</th>
                        <th>Last Post</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        isLoading ? <Loader isTable={ true } /> : boards.map(board => <BoardItem key={board.id} board={board} />)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Boards
