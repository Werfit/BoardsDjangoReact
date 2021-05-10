import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { loadBoards } from 'actions/boards'

import BoardItem from '../boards/BoardItem'
import Loader from '../common/Loader'

const Boards = () => {
    const { list: boards, isLoading } = useSelector(state => state.boards)
    const { user, isLoading: userIsLoading } = useSelector(state => state.accounts)
    const dsp = useDispatch()

    const [bloggersDetails, setBloggersDetails] = useState(false)

    useEffect(() => dsp(loadBoards()), [])

    useEffect(
        () => setBloggersDetails(user && !userIsLoading && user.is_blogger),
        [user, userIsLoading]
    )

    return (
        <div className="container">
            <ol className="breadcrumb my-4">
                <li className="breadcrumb-item active">Home</li>
            </ol>
            { bloggersDetails && <Link className="mb-4 btn btn-primary" to="/boards/new/">New board</Link> }
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>Board</th>
                        <th>Posts</th>
                        <th>Topics</th>
                        <th>Last Post</th>
                        {
                            bloggersDetails && <th></th>
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        isLoading ? 
                            <Loader isTable={ true } /> :
                                boards.map(board => <BoardItem key={board.id} board={board} bloggersDetails={bloggersDetails} />)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Boards
