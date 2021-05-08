import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { loadBoards } from 'actions/boards'

import BoardItem from '../boards/BoardItem'
import Loader from '../common/Loader'

const Boards = () => {
    const { list: boards, isLoading } = useSelector(state => state.boards)
    const { user, isLoading: userIsLoading } = useSelector(state => state.accounts)
    const dsp = useDispatch()

    useEffect(() => dsp(loadBoards()), [])

    return (
        <div className="container">
            <ol className="breadcrumb my-4">
                <li className="breadcrumb-item active">Home</li>
            </ol>
            { (user && !userIsLoading && user.is_blogger) && <Link className="mb-4 btn btn-primary" to="/boards/new/">New board</Link> }
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
