import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import { loadBoard, updateBoard, clearBoard } from 'actions/boards'

import Loader from '../common/Loader'

const UpdateBoard = ({ match }) => {
    const dsp = useDispatch()
    const history = useHistory()
    const { board, isLoading } = useSelector(state => state.boards)

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        dsp(loadBoard(match.params.board_id))

        return () => dsp(clearBoard())
    }, [])

    useEffect(() => {
        if (board) {
            setName(board.name)
            setDescription(board.description)
        }
    }, [board])

    const newBoard = e => {
        e.preventDefault()

        dsp(updateBoard({
            board_id: match.params.board_id,
            data: { name, description },
            pushHistory: history.push
        }))
    }

    return isLoading ? <Loader /> : (
        <div className="container">
            <ol className="breadcrumb my-4">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">
                    <span>New board</span>
                </li>
            </ol>

            <form onSubmit={e => newBoard(e)}>
                <div className="mb-3">
                    <label htmlFor="board" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="board" required
                        value={name} onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Description:</label>
                    <input type="text" className="form-control" id="subject" required
                        value={description} onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default UpdateBoard
